import React, { useState } from 'react';
import { GitFork, ShieldAlert, ArrowRight, CheckCircle, XCircle, Landmark, Building, Scale, Sparkles } from 'lucide-react';

export const RegulatoryDiagrams: React.FC = () => {
  const [activeDiagram, setActiveDiagram] = useState<'doors' | 'superpac' | 'exchanges'>('doors');

  return (
    <div className="space-y-8 pb-16">
      {/* Top Diagram Switcher */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-700/60 text-xs font-semibold text-indigo-300 mb-2">
              <GitFork className="w-3.5 h-3.5 text-indigo-400" />
              <span>정치·법률 시스템 아키텍처 다이어그램</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              규제 우회 & 파생 메커니즘 시각화
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              "정문과 옆문", "슈퍼팩의 정치 자금 레버리지", "4대 거래소의 파생 인프라"를 다이어그램으로 비교합니다.
            </p>
          </div>

          <div className="flex items-center space-x-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveDiagram('doors')}
              className={`px-3 py-2 rounded-lg font-semibold transition-all ${
                activeDiagram === 'doors' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              정문 vs 옆문 워크플로우
            </button>
            <button
              onClick={() => setActiveDiagram('superpac')}
              className={`px-3 py-2 rounded-lg font-semibold transition-all ${
                activeDiagram === 'superpac' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              슈퍼팩 정치자금 매커니즘
            </button>
            <button
              onClick={() => setActiveDiagram('exchanges')}
              className={`px-3 py-2 rounded-lg font-semibold transition-all ${
                activeDiagram === 'exchanges' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              4대 거래소 인프라 비교
            </button>
          </div>
        </div>
      </div>

      {/* DIAGRAM 1: Front Door vs Side Door */}
      {activeDiagram === 'doors' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white">
              '정문(클레리티 법안)' vs '옆문(CFTC DCM 선물)' 비교
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              미 의회 입법 절벽에 막힌 정문 대신, CFTC 규정 Part 40.2 자기인증을 통해 상품 지위를 선점하는 옆문의 승리
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FRONT DOOR (BLOCKED) */}
            <div className="p-6 rounded-2xl bg-rose-950/20 border-2 border-dashed border-rose-800/60 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-8 h-8 rounded-lg bg-rose-900/60 text-rose-300 font-bold flex items-center justify-center text-xs">
                    🚪
                  </span>
                  <div>
                    <h4 className="font-extrabold text-base text-rose-200">정문: 미 의회 포괄 입법</h4>
                    <span className="text-[11px] text-rose-400 font-semibold">CLARITY Act / FIT21 연계</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-rose-900/80 text-rose-200 text-xs font-bold border border-rose-700">
                  ⛔ 진행 불가 (하원 일정 소멸)
                </span>
              </div>

              {/* Steps */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-rose-900/50 flex items-center justify-between">
                  <span>1단계: 하원 상임위 및 본회의 통과</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-rose-900/50 flex items-center justify-between">
                  <span>2단계: 상원 본회의 절차표결 (60표 필요)</span>
                  <span className="text-amber-400 font-semibold">진행 중 (초박빙)</span>
                </div>
                <div className="p-3 rounded-lg bg-rose-950/70 border border-rose-700 text-rose-200 flex items-center justify-between font-bold">
                  <span>3단계: 하원 최종 승인 및 양원 문안 조율</span>
                  <XCircle className="w-4 h-4 text-rose-400" />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 text-xs text-rose-300 border border-rose-900/40 leading-relaxed">
                <strong>치명적 한계:</strong> 9월 하원 8일간 표결 취소로 본회의가 단 4일만 열리고 11월 중간선거까지 장기 휴회. 법안을 물리적으로 통과시킬 캘린더가 증발함.
              </div>
            </div>

            {/* SIDE DOOR (SUCCESSFUL) */}
            <div className="p-6 rounded-2xl bg-emerald-950/20 border-2 border-emerald-600/70 space-y-5 shadow-lg shadow-emerald-950/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-8 h-8 rounded-lg bg-emerald-900/60 text-emerald-300 font-bold flex items-center justify-center text-xs">
                    🚪
                  </span>
                  <div>
                    <h4 className="font-extrabold text-base text-emerald-200">옆문: CFTC DCM 선물 상장</h4>
                    <span className="text-[11px] text-emerald-400 font-semibold">CFTC Part 40.2 자기인증</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-900/80 text-emerald-200 text-xs font-bold border border-emerald-700 animate-pulse">
                  ✅ 가동 중 (신규 코인 대거 진입)
                </span>
              </div>

              {/* Steps */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-emerald-900/50 flex items-center justify-between">
                  <span>1단계: CFTC 인가 거래소(DCM) 리스크 심사</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-emerald-900/50 flex items-center justify-between">
                  <span>2단계: Rule 40.2 '자기인증' CFTC 1일 전 공시</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-600 text-emerald-200 flex items-center justify-between font-bold">
                  <span>3단계: 미 상품거래법(CEA)상 '상품' 지위 선점</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 text-xs text-emerald-300 border border-emerald-900/40 leading-relaxed">
                <strong>결정적 승리:</strong> 의회 승인이나 SEC 허가 없이도 DCM 거래소(비트노미얼, 코인베이스, CME 등)의 자체 인증으로 선물이 거래되며 법적 방어막(Affirmative Defense) 획득.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DIAGRAM 2: Super PAC Mechanics */}
      {activeDiagram === 'superpac' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white">
              슈퍼팩(Fairshake)의 정치 자본 순환 메커니즘
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              암호화폐 기업의 자본이 어떻게 의회 지형을 바꾸고 SEC의 규제 칼날을 무력화했는가
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            {/* Step 1 */}
            <div className="p-5 rounded-xl bg-slate-850 border border-slate-800 space-y-3">
              <div className="font-bold text-amber-400">1. 자본 집결 (Fundraising)</div>
              <p className="text-slate-300 leading-relaxed">
                코인베이스, 리플, a16z 등 크립토 거인들이 2024년에만 2억 6천만 달러, 2026년 중간선거용으로 1억 9천만 달러 이상을 공여.
              </p>
              <div className="text-[11px] p-2 rounded bg-slate-950 text-slate-400">
                • Coinbase: 9,350만$+<br/>
                • Ripple: 5,000만$+<br/>
                • a16z: 4,700만$+
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-xl bg-slate-850 border border-slate-800 space-y-3">
              <div className="font-bold text-indigo-400">2. 독립 지출 (Independent Spending)</div>
              <p className="text-slate-300 leading-relaxed">
                Super PAC 법제(무제한 독립 지출)를 활용해 경합주 및 예선전에서 집중적인 TV 광고 및 낙선/당선 캠페인 전개.
              </p>
              <div className="text-[11px] p-2 rounded bg-slate-950 text-slate-400">
                • 케이티 포터 낙선 운동<br/>
                • 초당파 친크립토 의원 지원<br/>
                • 승률 90%+ 달성
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-xl bg-slate-850 border border-slate-800 space-y-3">
              <div className="font-bold text-emerald-400">3. 의회 지형 재편 (Power Shift)</div>
              <p className="text-slate-300 leading-relaxed">
                워싱턴 상·하원에 친크립토 성향 다수파가 형성되어 규제 당국(SEC)에 대한 청문회 압박 및 입법 지지 세력 급증.
              </p>
              <div className="text-[11px] p-2 rounded bg-slate-950 text-slate-400">
                • SAB 121 폐지 결의안 통과<br/>
                • CFTC 예산 및 관할권 확대<br/>
                • SEC 예산 삭감 경고
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-xl bg-slate-850 border border-slate-800 space-y-3">
              <div className="font-bold text-amber-300">4. 규제 안전지대 (Derivatives Safe Harbor)</div>
              <p className="text-slate-300 leading-relaxed">
                정치적 역풍을 우려한 SEC가 알트코인 선물 상장 거래소에 대한 무차별 소송을 자제하고, 공동 상품 분류에 서명.
              </p>
              <div className="text-[11px] p-2 rounded bg-slate-950 text-slate-400">
                • 비트노미얼 XRP 소송 취하<br/>
                • 알트 무기한 선물 합법 런칭<br/>
                • 기관 대차대조표 편입 가속
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DIAGRAM 3: 4 Exchanges Architecture */}
      {activeDiagram === 'exchanges' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white">
              알트 무기한·선물 파생 4대 거래소 아키텍처 비교
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              거래소별 라이선스 구조, 혁신 모델, 그리고 기관 진입 파이프라인
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {/* Bitnomial */}
            <div className="p-5 rounded-xl bg-slate-850 border border-indigo-500/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-black text-sm text-white">비트노미얼</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-700 font-mono">
                  풀스택
                </span>
              </div>
              <div className="text-slate-400">
                DCM(거래소) + DCO(청산소) + FCM(중개회사)
              </div>
              <div className="p-3 rounded-lg bg-slate-950 text-slate-300 space-y-1">
                <div className="font-bold text-amber-400">핵심 무기:</div>
                <p>미국 최초 규제 XRP 선물(XUS), 크라켄 인수 후 합법 무기한 선물(Perpetuals) 개척, RLUSD 마진 담보.</p>
              </div>
            </div>

            {/* Kalshi */}
            <div className="p-5 rounded-xl bg-slate-850 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-black text-sm text-white">칼시 (Kalshi)</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                  이벤트 파생
                </span>
              </div>
              <div className="text-slate-400">
                CFTC 인가 Event Contract DCM
              </div>
              <div className="p-3 rounded-lg bg-slate-950 text-slate-300 space-y-1">
                <div className="font-bold text-emerald-400">핵심 무기:</div>
                <p>연방 항소법원 승소 기반, BNB·ADA·AAVE 등 17종 알트코인 무기한 선물 라인업 확장.</p>
              </div>
            </div>

            {/* Coinbase Derivatives */}
            <div className="p-5 rounded-xl bg-slate-850 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-black text-sm text-white">코인베이스</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                  소매+글로벌
                </span>
              </div>
              <div className="text-slate-400">
                DCM(구 FairX) + NFA FCM + 버뮤다 CEX
              </div>
              <div className="p-3 rounded-lg bg-slate-950 text-slate-300 space-y-1">
                <div className="font-bold text-indigo-400">핵심 무기:</div>
                <p>SOL, DOGE, AVAX, SHIB 등 대중적 알트 선물 다수 상장 및 미국 최초 USDC 선물 마진 담보.</p>
              </div>
            </div>

            {/* CME Group */}
            <div className="p-5 rounded-xl bg-slate-850 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-black text-sm text-white">CME 그룹</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700 font-mono">
                  기관 본산
                </span>
              </div>
              <div className="text-slate-400">
                글로벌 1위 공인 파생거래소(DCM/DCO)
              </div>
              <div className="p-3 rounded-lg bg-slate-950 text-slate-300 space-y-1">
                <div className="font-bold text-amber-300">핵심 무기:</div>
                <p>Micro XRP/SOL 선물, Nasdaq CME 크립토 인덱스 선물, SEC 현물 ETF 승인 필수 SSA 제공.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
