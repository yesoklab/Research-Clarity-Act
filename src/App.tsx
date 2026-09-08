import { useState, useEffect } from 'react';
import { ActiveTab } from './types';
import { Header } from './components/Header';
import { ExecutiveBriefing } from './components/ExecutiveBriefing';
import { BlogEditorialDesk } from './components/BlogEditorialDesk';
import { CoinSurvivalMatrix } from './components/CoinSurvivalMatrix';
import { RegulatoryDiagrams } from './components/RegulatoryDiagrams';
import { AiResearchAssistant } from './components/AiResearchAssistant';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('briefing');
  const [hasApiKey, setHasApiKey] = useState<boolean>(false);

  useEffect(() => {
    // Check server health and API key status
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.hasApiKey) {
          setHasApiKey(true);
        }
      })
      .catch(() => {
        // Dev server or fallback
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        hasApiKey={hasApiKey}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {activeTab === 'briefing' && (
          <ExecutiveBriefing
            onNavigateToBlog={() => setActiveTab('blog')}
            onNavigateToMatrix={() => setActiveTab('matrix')}
          />
        )}

        {activeTab === 'blog' && <BlogEditorialDesk />}

        {activeTab === 'matrix' && <CoinSurvivalMatrix />}

        {activeTab === 'diagrams' && <RegulatoryDiagrams />}

        {activeTab === 'ai-qa' && <AiResearchAssistant />}
      </main>

      {/* Institutional Footer */}
      <footer className="bg-slate-900 border-t border-slate-800/80 text-xs text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white font-black text-[10px]">
              YOK
            </div>
            <span className="font-bold text-slate-200">YesOkLab Financial Engineering Lab</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Official Blog Editorial Intelligence</span>
          </div>

          <div className="text-center sm:text-right text-slate-500 text-[11px] leading-relaxed">
            본 리포트는 CFTC 상품거래법(CEA), 미국 의회 입법 캘린더, 각 거래소 공시 기준 리서치 자료입니다.
            <br />
            YesOkLab 공식블로그 기획 연재를 위해 편철되었습니다. Contact: wakk5252@gmail.com
          </div>
        </div>
      </footer>
    </div>
  );
}
