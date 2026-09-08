import React, { useState, useMemo } from 'react';
import { COIN_SURVIVAL_MATRIX } from '../data/coinMatrixData';
import { CoinMatrixItem } from '../types';
import { Search, Filter, ShieldCheck, AlertTriangle, CheckCircle, XCircle, Info, ExternalLink } from 'lucide-react';

export const CoinSurvivalMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [onlyDcmListed, setOnlyDcmListed] = useState<boolean>(false);
  const [selectedCoin, setSelectedCoin] = useState<CoinMatrixItem | null>(null);

  const filteredCoins = useMemo(() => {
    return COIN_SURVIVAL_MATRIX.filter((coin) => {
      const matchSearch =
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase());
      const matchTier = selectedTier === 'all' || coin.tier.includes(selectedTier);
      const matchDcm = !onlyDcmListed || coin.dcmFuturesListed;
      return matchSearch && matchTier && matchDcm;
    });
  }, [searchTerm, selectedTier, onlyDcmListed]);

  return (
    <div className="space-y-8 pb-16">
      {/* Overview Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-700/60 text-xs font-semibold text-indigo-300 mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>제도권 대차대조표 & CFTC DCM 파생상품 등재 현황</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            "장부에 오른 코인만 살아남는다" 생존 매트릭스
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            클레리티 법안(정문)이 지연되면서, 기관 투자자의 장부(Balance Sheet)에 등재될 수 있는 CFTC 규제 DCM 선물 상장 코인과
            비제도권 롱테일 알트코인 간의 양극화가 가속화되고 있습니다. 각 코인의 규제 방어막과 생존 지수를 확인하세요.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="코인명 또는 심볼 (예: XRP, SOL)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Tier Filter */}
            <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              <span className="px-2 text-slate-400 flex items-center space-x-1">
                <Filter className="w-3.5 h-3.5" />
                <span>티어:</span>
              </span>
              {[
                { id: 'all', label: '전체' },
                { id: 'Tier 1', label: 'Tier 1 (완전제도권)' },
                { id: 'Tier 2', label: 'Tier 2 (대기군)' },
                { id: 'Tier 3', label: 'Tier 3 (리스크)' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTier(t.id)}
                  className={`px-2.5 py-1 rounded-lg transition-all font-medium ${
                    selectedTier === t.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Toggle DCM Only */}
          <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={onlyDcmListed}
              onChange={(e) => setOnlyDcmListed(e.target.checked)}
              className="rounded bg-slate-950 border-slate-700 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="font-medium">DCM 선물 상장 코인만 보기</span>
          </label>
        </div>
      </div>

      {/* Coins Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400 uppercase tracking-wider font-semibold">
                <th className="py-4 px-4 sm:px-6">자산 (Asset)</th>
                <th className="py-4 px-3">제도권 티어</th>
                <th className="py-4 px-3">CFTC DCM 선물</th>
                <th className="py-4 px-3">CME 지위</th>
                <th className="py-4 px-3">현물 ETF 상태</th>
                <th className="py-4 px-3">기관 장부 적격성</th>
                <th className="py-4 px-4 text-right">생존 지수</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredCoins.map((coin) => {
                const isTier1 = coin.tier.includes('Tier 1');
                const isTier2 = coin.tier.includes('Tier 2');
                return (
                  <tr
                    key={coin.id}
                    onClick={() => setSelectedCoin(coin)}
                    className="hover:bg-slate-850/80 cursor-pointer transition-colors"
                  >
                    {/* Coin info */}
                    <td className="py-3.5 px-4 sm:px-6">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 font-extrabold text-white flex items-center justify-center text-xs">
                          {coin.symbol}
                        </div>
                        <div>
                          <div className="font-bold text-slate-100 text-sm">{coin.symbol}</div>
                          <div className="text-[11px] text-slate-400">{coin.name}</div>
                        </div>
                      </div>
                    </td>

                    {/* Tier badge */}
                    <td className="py-3.5 px-3">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                          isTier1
                            ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                            : isTier2
                            ? 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                            : 'bg-rose-950/60 text-rose-300 border-rose-800/60'
                        }`}
                      >
                        {coin.tier}
                      </span>
                    </td>

                    {/* DCM Futures Exchanges */}
                    <td className="py-3.5 px-3">
                      {coin.dcmFuturesListed ? (
                        <div className="space-y-1">
                          <span className="inline-flex items-center space-x-1 text-emerald-400 font-semibold">
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>상장 완료</span>
                          </span>
                          <div className="text-[11px] text-slate-400 truncate max-w-[150px]">
                            {coin.dcmExchanges.join(', ')}
                          </div>
                        </div>
                      ) : (
                        <span className="inline-flex items-center space-x-1 text-slate-500">
                          <XCircle className="w-3.5 h-3.5" />
                          <span>미상장</span>
                        </span>
                      )}
                    </td>

                    {/* CME Status */}
                    <td className="py-3.5 px-3">
                      <span className="text-slate-300 font-medium">{coin.cmeStatus}</span>
                    </td>

                    {/* Spot ETF */}
                    <td className="py-3.5 px-3">
                      <span
                        className={`text-[11px] font-medium ${
                          coin.spotEtfStatus.includes('승인')
                            ? 'text-emerald-400'
                            : coin.spotEtfStatus.includes('접수')
                            ? 'text-amber-300'
                            : 'text-slate-400'
                        }`}
                      >
                        {coin.spotEtfStatus}
                      </span>
                    </td>

                    {/* Institutional Book */}
                    <td className="py-3.5 px-3">
                      <span className="text-slate-300 text-[11px]">
                        {coin.institutionalBookStatus}
                      </span>
                    </td>

                    {/* Survival Score Progress Bar */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <span className="font-mono font-bold text-sm text-slate-100">
                          {coin.survivalScore}%
                        </span>
                        <div className="w-16 bg-slate-800 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              coin.survivalScore >= 90
                                ? 'bg-emerald-500'
                                : coin.survivalScore >= 75
                                ? 'bg-amber-500'
                                : 'bg-rose-500'
                            }`}
                            style={{ width: `${coin.survivalScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Coin Modal / Drawer */}
      {selectedCoin && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-5 text-slate-200 shadow-2xl relative">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 font-black text-xl text-white flex items-center justify-center">
                  {selectedCoin.symbol}
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{selectedCoin.name}</h3>
                  <span className="text-xs text-indigo-400 font-semibold">{selectedCoin.tier}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCoin(null)}
                className="text-slate-400 hover:text-white text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-850 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div className="font-bold text-amber-400 mb-1">💡 제도권 편입 및 생존 분석:</div>
              {selectedCoin.notes}
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-slate-400">CFTC DCM 상장 거래소</div>
                <div className="font-bold text-slate-100 mt-0.5">
                  {selectedCoin.dcmExchanges.join(', ') || '없음'}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-slate-400">CME 그룹 연계 상태</div>
                <div className="font-bold text-slate-100 mt-0.5">{selectedCoin.cmeStatus}</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-slate-400">SEC 증권성 소송 현황</div>
                <div className="font-bold text-slate-100 mt-0.5">{selectedCoin.secStatus}</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-slate-400">기관 자산 인정 등급</div>
                <div className="font-bold text-slate-100 mt-0.5">
                  {selectedCoin.institutionalBookStatus}
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedCoin(null)}
                className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
