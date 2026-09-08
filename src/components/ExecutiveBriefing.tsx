import React, { useState } from 'react';
import { RESEARCH_AGENDAS, EXCHANGES_DATA, RESEARCH_OVERVIEW } from '../data/researchData';
import { 
  Building2, Landmark, DollarSign, BookCheck, AlertCircle, 
  ExternalLink, Layers, CheckCircle2, ChevronRight, Scale, Cpu, Sparkles 
} from 'lucide-react';

interface ExecutiveBriefingProps {
  onNavigateToBlog: () => void;
  onNavigateToMatrix: () => void;
}

export const ExecutiveBriefing: React.FC<ExecutiveBriefingProps> = ({
  onNavigateToBlog,
  onNavigateToMatrix,
}) => {
  const [selectedAgendaId, setSelectedAgendaId] = useState<string>('agenda-1');
  const [selectedExchangeId, setSelectedExchangeId] = useState<string>('bitnomial');

  const selectedAgenda = RESEARCH_AGENDAS.find((a) => a.id === selectedAgendaId) || RESEARCH_AGENDAS[0];
  const selectedExchange = EXCHANGES_DATA.find((e) => e.id === selectedExchangeId) || EXCHANGES_DATA[0];

  return (
    <div className="space-y-10 pb-16">
      {/* Executive Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-32 bottom-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-900/60 border border-indigo-700/60 text-xs font-semibold text-indigo-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>YesOkLab CTO 리서치 브리핑 2026</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {RESEARCH_OVERVIEW.title}
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {RESEARCH_OVERVIEW.subtitle}
          </p>

          {/* Core Thesis Box */}
          <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border-l-4 border-amber-500 border-t border-r border-b border-slate-800 text-xs sm:text-sm text-slate-200">
            <span className="font-bold text-amber-400 mr-2">[CTO 핵심 명제]</span>
            {RESEARCH_OVERVIEW.coreThesis}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onNavigateToBlog}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-indigo-600/30"
            >
              <span>YesOkLab 공식블로그 연재 원고 보기</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onNavigateToMatrix}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-all"
            >
              <span>장부 등재 코인 생존 매트릭스 보기</span>
              <Layers className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </div>

      {/* 6대 핵심 아젠다 섹션 */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-800 pb-4 gap-2">
          <div>
            <div className="text-xs font-bold text-indigo-400 tracking-wider uppercase">Strategic Agendas</div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
              CTO 요청 5대 규제 역학 심층 분석
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            좌측 탭을 선택하여 세부 법률·정치·시장 매커니즘을 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Agenda Navigation List */}
          <div className="lg:col-span-4 space-y-2">
            {RESEARCH_AGENDAS.map((agenda, index) => {
              const isSelected = agenda.id === selectedAgendaId;
              return (
                <button
                  key={agenda.id}
                  onClick={() => setSelectedAgendaId(agenda.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    isSelected
                      ? 'bg-slate-800/90 border-indigo-500 shadow-md shadow-indigo-950/40 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-850 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 font-semibold text-slate-300">
                      Agenda 0{index + 1}
                    </span>
                    <span className="text-indigo-400 font-medium">{agenda.tag}</span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-100 line-clamp-2">
                    {agenda.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {agenda.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Agenda Detailed Content Panel */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-400 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-950 border border-indigo-700/60">
                  {selectedAgenda.tag}
                </span>
                <span>심층 분석 보고서</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                {selectedAgenda.title}
              </h3>
              <p className="text-sm font-medium text-slate-400 mt-1">
                {selectedAgenda.subtitle}
              </p>
            </div>

            {/* Core Insight Card */}
            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/50 text-indigo-200 text-sm leading-relaxed">
              <div className="font-bold text-indigo-300 mb-1 flex items-center space-x-1.5">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>핵심 요약 및 제도적 통찰</span>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm">
                {selectedAgenda.coreInsight}
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                세부 분석 포인트 (Key Breakdown)
              </h4>
              <div className="space-y-3">
                {selectedAgenda.keyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-850/70 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-900/60 border border-indigo-700 text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h5 className="text-sm font-bold text-slate-100">
                          {point.heading}
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                          {point.description}
                        </p>
                        {point.highlight && (
                          <div className="inline-block text-xs font-medium px-2.5 py-1 rounded bg-amber-950/50 text-amber-300 border border-amber-800/40 mt-1">
                            💡 {point.highlight}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Context & Impact Footer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs">
              {selectedAgenda.regulatoryContext && (
                <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                  <div className="font-semibold text-slate-300 flex items-center space-x-1 mb-1">
                    <Scale className="w-3.5 h-3.5 text-indigo-400" />
                    <span>법률 및 규제적 컨텍스트</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {selectedAgenda.regulatoryContext}
                  </p>
                </div>
              )}
              {selectedAgenda.marketImpact && (
                <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                  <div className="font-semibold text-slate-300 flex items-center space-x-1 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>시장 및 자본 유동성 영향</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {selectedAgenda.marketImpact}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4대 파생 거래소 총람 섹션 */}
      <section className="space-y-6 pt-6 border-t border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-bold text-amber-400 tracking-wider uppercase">
              Top 4 Regulated Crypto Derivatives Venues
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
              알트 무기한·선물 파생시장 4대 플랫폼 정밀 해부
            </h2>
          </div>
          <span className="text-xs text-slate-400">
            1. 비트노미얼 · 2. 칼시 · 3. 코인베이스 · 4. CME
          </span>
        </div>

        {/* Exchange Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {EXCHANGES_DATA.map((ex) => {
            const isSelected = ex.id === selectedExchangeId;
            return (
              <button
                key={ex.id}
                onClick={() => setSelectedExchangeId(ex.id)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-gradient-to-b from-indigo-900/60 to-slate-900 border-indigo-500 shadow-md text-white'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="text-[11px] font-semibold text-indigo-400 uppercase truncate">
                  {ex.category}
                </div>
                <div className="font-bold text-sm text-slate-100 mt-0.5">
                  {ex.nameKo} <span className="text-xs text-slate-400 font-normal">({ex.name})</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Exchange Detail Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-black text-white">{selectedExchange.nameKo}</h3>
                <span className="text-sm font-mono text-indigo-400">({selectedExchange.name})</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                  {selectedExchange.licenseType}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {selectedExchange.keyCharacteristic}
              </p>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {selectedExchange.stats.map((st, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-850/80 border border-slate-800">
                <div className="text-[11px] text-slate-400">{st.label}</div>
                <div className="text-sm font-bold text-slate-100 mt-0.5">{st.value}</div>
              </div>
            ))}
          </div>

          {/* Altcoin Offerings Badges */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              상장 및 거래 지원 알트코인 라인업
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedExchange.altcoinOfferings.map((coin, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-indigo-950/70 border border-indigo-700/60 text-indigo-200 text-xs font-semibold shadow-sm"
                >
                  {coin}
                </span>
              ))}
            </div>
          </div>

          {/* SEC Dispute & Strategic Significance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-850/60 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-amber-400 flex items-center space-x-1.5">
                <Scale className="w-4 h-4" />
                <span>SEC 규제 공방 및 법적 상태</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedExchange.secLitigationStatus}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-850/60 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-indigo-400 flex items-center space-x-1.5">
                <Landmark className="w-4 h-4" />
                <span>기관 자금 유입 및 전략적 의의</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedExchange.strategicSignificance}
              </p>
            </div>
          </div>

          {/* Core Feature Bullet Points */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              주요 특징 및 혁신 메커니즘
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedExchange.features.map((feat, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
