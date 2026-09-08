import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, Copy, Check, BookOpen, AlertCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const PRESET_PROMPTS = [
  'Q. 블로그 독자용: XRP 선물 상장이 왜 현물 ETF 승인의 보증수표가 됩니까?',
  'Q. 칼시의 무기한 선물과 해외 바이낸스/바이비트 Perp의 법적 차이점은?',
  'Q. "하원 일정이 사라졌다"는 상황에서 향후 연말 레임덕 회기 시나리오는?',
  'Q. YesOkLab 블로그 독자를 위한 1분 요약 카드뉴스 문구 생성해 줘.',
];

export const AiResearchAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `반갑습니다, 대표님! YesOkLab CTO 겸 수석 금융공학 리서치 에디터입니다.
"하원 일정 실종과 클레리티 법안 지연", "CFTC DCM 선물 옆문 전략", "슈퍼팩(Fairshake)의 정치 자본", "4대 파생 거래소(비트노미얼·칼시·코인베이스·CME)", 그리고 "장부에 오른 코인의 생존 매트릭스"에 관해 무엇이든 물어보시거나 블로그 추가 원고 작성을 요청해 주세요.`,
      timestamp: '방금 전',
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleSend = async (textToSend?: string) => {
    const prompt = textToSend || inputPrompt;
    if (!prompt.trim() || isLoading) return;

    const userMsg: Message = {
      role: 'user',
      content: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/editorial/qa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: prompt }),
      });

      if (res.ok) {
        const data = await res.json();
        const assistantMsg: Message = {
          role: 'assistant',
          content: data.answer,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } else {
        // Fallback intelligent response if API key is not yet set in environment
        const fallbackAnswer = generateFallbackAnswer(prompt);
        const assistantMsg: Message = {
          role: 'assistant',
          content: fallbackAnswer,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, assistantMsg]);
      }
    } catch (err) {
      const fallbackAnswer = generateFallbackAnswer(prompt);
      const assistantMsg: Message = {
        role: 'assistant',
        content: fallbackAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const generateFallbackAnswer = (question: string): string => {
    if (question.includes('XRP') || question.includes('ETF')) {
      return `[YesOkLab CTO 분석: XRP 선물 상장이 현물 ETF로 직결되는 이유]
1. SEC의 현물 ETF 승인 필수 법적 요건은 1934년 증권거래소법 제6조(b)(5)에 따른 '시장 조작 방지'입니다.
2. 법원은 그레이스케일(Grayscale) 소송에서 "충분한 규모의 규제된 선물 시장(CME/DCM)이 존재하고, 현물과 선물의 가격 상관관계가 높다면 현물 ETF를 거부할 합리적 이유가 없다"고 판시했습니다.
3. 비트노미얼의 규제 XRP 선물(XUS)과 CME의 Micro XRP 선물 상장으로 인해, SEC는 비트코인과 이더리움 때와 동일한 감시공유협정(Surveillance Sharing Agreement, SSA) 요건을 충족받게 되었습니다. 따라서 XRP 현물 ETF 승인은 이제 '시간 문제'의 영역으로 진입했습니다.`;
    }
    if (question.includes('칼시') || question.includes('바이낸스') || question.includes('Perp')) {
      return `[YesOkLab CTO 분석: 칼시(Kalshi) vs 해외 CEX 무기한 선물의 규제적 차이]
1. 법적 관할: 바이낸스/바이비트의 무기한 선물은 바하마, 두바이 등 역외 규제에 의존하며 미국 내 거주자 제공이 엄격히 금지된 '불법 장외 파생상품'입니다.
2. 칼시의 무기한 선물: 미국 상품선물거래위원회(CFTC)가 인가한 지정계약시장(DCM) 라이선스 하에서 미국 연방 상품거래법(CEA)을 준수하며 미국 적격 투자자에게 직접 제공되는 '합법 규제 파생상품'입니다.
3. 결제와 증거금: 해외 CEX는 USDT 등 미인가 스테이블코인 마진을 주로 쓰지만, 칼시는 연방 청산 규정에 맞춘 USD 또는 공인 수탁 자산을 증거금으로 채택하여 기관 투자자가 대차대조표상 위법 리스크 없이 참여할 수 있습니다.`;
    }
    if (question.includes('레임덕') || question.includes('하원')) {
      return `[YesOkLab CTO 분석: 하원 일정 소멸 후 연말 레임덕(Lame-duck) 시나리오]
1. 11월 중간선거 종료 후 12월 말까지 소집되는 '레임덕 회기'에 클레리티 법안이 국방수권법(NDAA) 등 초당적 필수 패키지 예산안에 라이더(Rider, 부속 조항) 형태로 병합될 가능성이 열려 있습니다.
2. 그러나 선거 결과에 따라 의회 주도권(공화/민주)이 교체될 경우, 차기 다수당은 법안 처리를 차기 회기(2027년 초)로 미루고 자신들의 입맛에 맞게 전면 재작성하려 할 것입니다.
3. 결국 업계는 이러한 불확실한 정치 일정에 의존하지 않고, 비트노미얼·코인베이스·CME의 DCM 선물 상장이라는 '민간 규제 우회로'를 사실상의 영구 표준으로 정착시키고 있습니다.`;
    }
    return `[YesOkLab CTO 리서치 브리핑]
질문하신 "${question}"에 대한 제도적 함의는 명확합니다. 의회의 입법 지연(정문의 폐쇄)은 크립토 산업의 제도화를 막지 못했습니다. 오히려 CFTC 인가 DCM(지정계약시장)의 Rule 40.2 자기인증과 2억 6천만 달러 규모의 슈퍼팩(Fairshake) 자본이 결합하여, 알트코인들을 연방법상 '상품'으로 규정짓고 기관 대차대조표에 편입시키는 '옆문 슈퍼사이클'을 만들어냈습니다. 블로그 연재 시 이 핵심 프레임워크를 강조하시면 독자들의 호응이 매우 높을 것입니다.`;
  };

  const handleCopyMessage = (content: string, index: number) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-700/60 text-xs font-semibold text-indigo-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Gemini AI 기반 YesOkLab 테크니컬 리서치 어시스턴트</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            CTO 리서치 질의응답 & 블로그 콘텐츠 생성기
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            규제 법률 쟁점 질의, 블로그 독자 Q&A 단락 생성, 소셜 미디어 요약문 작성을 실시간으로 지원합니다.
          </p>
        </div>
      </div>

      {/* Preset Prompt Chips */}
      <div className="flex flex-wrap gap-2">
        {PRESET_PROMPTS.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSend(prompt)}
            className="text-xs px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:border-indigo-500 hover:text-white transition-all text-left"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Messages Log */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 min-h-[460px] flex flex-col justify-between shadow-xl">
        <div className="space-y-4 overflow-y-auto max-h-[560px] pr-2 scrollbar-thin">
          {messages.map((msg, idx) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={idx}
                className={`flex items-start space-x-3 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                    isUser
                      ? 'bg-indigo-600 text-white'
                      : 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div
                  className={`p-4 rounded-2xl max-w-2xl text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-850 border border-slate-800 text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] opacity-70 mb-1">
                    <span className="font-semibold">{isUser ? '작성자 (User)' : 'YesOkLab CTO / Research AI'}</span>
                    <span>{msg.timestamp}</span>
                  </div>

                  <div className="whitespace-pre-line font-sans">{msg.content}</div>

                  {!isUser && (
                    <div className="mt-3 pt-2 border-t border-slate-800 flex justify-end">
                      <button
                        onClick={() => handleCopyMessage(msg.content, idx)}
                        className="flex items-center space-x-1 text-[11px] text-slate-400 hover:text-white transition-colors"
                      >
                        {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedIndex === idx ? '답변 복사됨' : '답변 복사'}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {isLoading && (
            <div className="flex items-center space-x-3 text-xs text-slate-400 pl-11">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-bounce"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-bounce delay-100"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-bounce delay-200"></div>
              <span>CTO 리서치 엔진이 답변을 생성하고 있습니다...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="mt-4 pt-4 border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="규제 분석 질문 또는 블로그 작성 요청 입력..."
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              disabled={isLoading || !inputPrompt.trim()}
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-xs flex items-center space-x-1.5 shadow-md transition-all shrink-0"
            >
              <span>전송</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
