import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // Helper for Gemini AI client
  function getGenAI() {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      return null;
    }
    return new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // API: Health check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      hasApiKey: !!process.env.GEMINI_API_KEY,
      timestamp: new Date().toISOString(),
    });
  });

  // API: AI Research & Editorial Assistant for Blog
  app.post('/api/editorial/generate', async (req, res) => {
    try {
      const { prompt, topic, format = 'blog', targetLength = 'detailed' } = req.body;

      const ai = getGenAI();
      if (!ai) {
        return res.status(503).json({
          error: 'GEMINI_API_KEY is not configured. Please configure your API key in Settings > Secrets.',
        });
      }

      const systemInstruction = `당신은 대한민국 최고 수준의 가상자산·금융 파생상품 전문 리서처이자 YesOkLab의 수석 테크니컬 블로그 에디터(CTO 역할)입니다.
전문적이고 날카로운 통찰을 담으면서도, 블로그 독자(투자자, 기관 관계자, 업계 실무자)가 직관적으로 이해할 수 있는 명쾌한 필력으로 글을 작성합니다.
하원 일정 실종, 클레리티(CLARITY) 법안과 선물시장 옆문(DCM), 수퍼팩(Fairshake 등), 비트노미얼·칼시·코인베이스·CME의 파생상품 라인업, 그리고 '장부에 오르는 코인의 생존 매트릭스'를 정확한 금융 법률 용어(CFTC, SEC, CEA Part 40, DCO, FCM 등)와 함께 설명합니다.`;

      const userMessage = prompt || `[주제: ${topic || '가상자산 제도권 편입 전략'}]에 대해 [형식: ${format}] 포맷으로 상세하고 권위 있는 YesOkLab 블로그 아티클을 작성해 주세요.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: userMessage,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({
        content: response.text,
        timestamp: new Date().toISOString(),
      });
    } catch (err: any) {
      console.error('Error generating content:', err);
      res.status(500).json({
        error: err.message || '콘텐츠 생성 중 오류가 발생했습니다.',
      });
    }
  });

  // API: Deep Q&A Assistant for Reader Questions
  app.post('/api/editorial/qa', async (req, res) => {
    try {
      const { question, context } = req.body;
      const ai = getGenAI();
      if (!ai) {
        return res.status(503).json({
          error: 'GEMINI_API_KEY is not configured.',
        });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: `[참고 컨텍스트: ${context || '미국 크립토 규제, DCM 선물시장, 슈퍼팩'}]\n\n[사용자 질문]: ${question}\n\n위 질문에 대해 YesOkLab CTO 관점에서 명쾌하고 정확하게 답변해 주세요.`,
        config: {
          systemInstruction: '당신은 YesOkLab의 CTO 겸 디지털자산 금융공학 리서처입니다. 질문에 대해 간결하고 핵심적인 통찰과 제도적 배경을 제시합니다.',
          temperature: 0.6,
        },
      });

      res.json({
        answer: response.text,
      });
    } catch (err: any) {
      console.error('Error in Q&A:', err);
      res.status(500).json({
        error: err.message || 'Q&A 생성 중 오류가 발생했습니다.',
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
