import React from 'react';
import { ActiveTab } from '../types';
import { ShieldCheck, FileText, BarChart3, GitFork, Sparkles, BookOpen } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  hasApiKey: boolean;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, hasApiKey }) => {
  const tabs: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'briefing', label: 'CTO 총괄 리서치', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'blog', label: '공식블로그 연재 데스크', icon: <FileText className="w-4 h-4" />, badge: '3부작 완성' },
    { id: 'matrix', label: '장부 등재 코인 매트릭스', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'diagrams', label: '정문 vs 옆문 다이어그램', icon: <GitFork className="w-4 h-4" /> },
    { id: 'ai-qa', label: 'AI 블로그 어시스턴트', icon: <Sparkles className="w-4 h-4" /> },
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 text-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Identity */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-inner tracking-wider">
              YOK
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg text-slate-50 tracking-tight">YesOkLab</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-700/50 font-medium">
                  Financial Engineering & Regulatory Intelligence
                </span>
              </div>
              <p className="text-xs text-slate-400 truncate max-w-md hidden sm:block">
                미 하원 일정 실종 · 클레리티 법안 지연 · DCM 선물 옆문 전략 리서치
              </p>
            </div>
          </div>

          {/* Status & Indicators */}
          <div className="flex items-center space-x-3 text-xs">
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium">2026.09 정기 리서치 브리핑</span>
            </div>
            <div className="hidden md:flex items-center space-x-1 px-2.5 py-1 rounded-md bg-amber-950/40 border border-amber-800/50 text-amber-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>DCM & CFTC 규제 분석</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 -mb-px overflow-x-auto scrollbar-none py-1 border-t border-slate-800/60">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-indigo-600/90 text-white shadow-sm shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/70'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                    isActive ? 'bg-indigo-800 text-indigo-100' : 'bg-slate-700 text-amber-300'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
