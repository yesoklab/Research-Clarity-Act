import React, { useState } from 'react';
import { BLOG_ARTICLES } from '../data/blogArticlesData';
import { 
  Copy, Check, FileText, Code2, Eye, Share2, 
  Calendar, User, Clock, Tag, Sparkles, BookOpen 
} from 'lucide-react';

export const BlogEditorialDesk: React.FC = () => {
  const [selectedSeriesId, setSelectedSeriesId] = useState<string>('series-1');
  const [viewMode, setViewMode] = useState<'preview' | 'markdown'>('preview');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const activeArticle = BLOG_ARTICLES.find((a) => a.id === selectedSeriesId) || BLOG_ARTICLES[0];

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(activeArticle.contentMarkdown);
    setCopiedType('markdown');
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(activeArticle.htmlFormatted);
    setCopiedType('html');
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleCopySummary = () => {
    const summaryText = `[YesOkLab 공식블로그 기획 리포트 제${activeArticle.seriesNumber}편]\n제목: ${activeArticle.title}\n\n요약:\n${activeArticle.excerpt}\n\n핵심 키워드: ${activeArticle.seoKeywords.join(', ')}\n\n(자세한 내용은 YesOkLab 공식 블로그에서 확인하세요.)`;
    navigator.clipboard.writeText(summaryText);
    setCopiedType('summary');
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/60 text-xs font-semibold text-amber-300 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>YesOkLab 공식블로그 기획 연재 전용 데스크</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            크립토 규제 & 파생시장 3부작 원고 편집실
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            네이버 블로그, 티스토리, 미디엄, 브런치 등에 즉시 게시 가능한 고품질 공식 연재 원고입니다.
          </p>
        </div>

        {/* Copy Toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleCopyMarkdown}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all"
          >
            {copiedType === 'markdown' ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copiedType === 'markdown' ? '마크다운 복사됨!' : '마크다운 복사'}</span>
          </button>

          <button
            onClick={handleCopyHtml}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
          >
            {copiedType === 'html' ? <Check className="w-4 h-4 text-emerald-300" /> : <Code2 className="w-4 h-4 text-amber-400" />}
            <span>{copiedType === 'html' ? 'HTML 복사됨!' : '블로그 서식(HTML) 복사'}</span>
          </button>

          <button
            onClick={handleCopySummary}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
          >
            {copiedType === 'summary' ? <Check className="w-4 h-4 text-emerald-300" /> : <Share2 className="w-4 h-4 text-indigo-400" />}
            <span>{copiedType === 'summary' ? '요약 복사됨!' : 'SNS/카드뉴스 요약'}</span>
          </button>
        </div>
      </div>

      {/* Series Switcher Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {BLOG_ARTICLES.map((article) => {
          const isSelected = article.id === selectedSeriesId;
          return (
            <button
              key={article.id}
              onClick={() => setSelectedSeriesId(article.id)}
              className={`p-4 rounded-xl text-left border transition-all ${
                isSelected
                  ? 'bg-slate-800/90 border-amber-500 shadow-md shadow-amber-950/20 text-white'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-850 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-amber-400">연재 제{article.seriesNumber}편</span>
                <span className="text-[11px] text-slate-400">{article.targetDate}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-100 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                {article.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Article Workspace Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        {/* Article Meta Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950/40 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-1.5 text-slate-300 font-medium">
              <User className="w-3.5 h-3.5 text-indigo-400" />
              <span>{activeArticle.author}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{activeArticle.targetDate}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>예상 읽는 시간: 약 {activeArticle.readingTimeMinutes}분</span>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center rounded-lg bg-slate-850 p-1 border border-slate-800">
            <button
              onClick={() => setViewMode('preview')}
              className={`flex items-center space-x-1 px-3 py-1 rounded text-xs font-semibold transition-all ${
                viewMode === 'preview'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>원문 서식 뷰어</span>
            </button>
            <button
              onClick={() => setViewMode('markdown')}
              className={`flex items-center space-x-1 px-3 py-1 rounded text-xs font-semibold transition-all ${
                viewMode === 'markdown'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>마크다운 소스</span>
            </button>
          </div>
        </div>

        {/* SEO Keywords Tag Bar */}
        <div className="px-6 py-3 border-b border-slate-800/60 bg-slate-900/60 flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center space-x-1 text-slate-400 font-semibold mr-1">
            <Tag className="w-3.5 h-3.5 text-amber-400" />
            <span>블로그 태그/SEO 키워드:</span>
          </div>
          {activeArticle.seoKeywords.map((kw, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-[11px]"
            >
              #{kw}
            </span>
          ))}
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10">
          {viewMode === 'preview' ? (
            <div className="max-w-4xl mx-auto text-slate-200 space-y-6 leading-relaxed">
              <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {activeArticle.title}
              </h1>
              <p className="text-slate-400 font-medium text-base italic border-l-2 border-amber-500 pl-4">
                {activeArticle.subtitle}
              </p>

              <div className="p-4 rounded-xl bg-slate-850/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
                <span className="font-bold text-amber-400 mr-2">[포스팅 서두 요약 (Excerpt)]</span>
                {activeArticle.excerpt}
              </div>

              {/* Rendered content structured for clean reading */}
              <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base space-y-6 pt-4 border-t border-slate-800">
                <div className="whitespace-pre-line leading-relaxed font-sans font-normal text-slate-200">
                  {activeArticle.contentMarkdown}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <textarea
                readOnly
                value={activeArticle.contentMarkdown}
                rows={24}
                className="w-full bg-slate-950 font-mono text-xs text-slate-300 p-4 rounded-xl border border-slate-800 focus:outline-none scrollbar-thin"
              />
            </div>
          )}
        </div>

        {/* Article Footer Publishing Note */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            <span className="font-semibold text-slate-300">YesOkLab 연재 매뉴얼:</span> 네이버 블로그에 포스팅할 때는 우측 상단의 '마크다운 복사' 또는 '블로그 서식 복사' 버튼을 눌러 본문 편집기에 붙여넣으시면 즉시 서식이 유지됩니다.
          </div>
          <button
            onClick={handleCopyMarkdown}
            className="inline-flex items-center space-x-1 font-bold text-indigo-400 hover:text-indigo-300 shrink-0"
          >
            <span>클립보드로 전체 복사</span>
            <Copy className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
