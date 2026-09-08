export type ActiveTab = 'briefing' | 'blog' | 'matrix' | 'diagrams' | 'ai-qa';

export interface ResearchAgenda {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  summary: string;
  coreInsight: string;
  keyPoints: {
    heading: string;
    description: string;
    highlight?: string;
  }[];
  regulatoryContext?: string;
  marketImpact?: string;
}

export interface ExchangeProfile {
  id: string;
  name: string;
  nameKo: string;
  category: string;
  licenseType: string;
  keyCharacteristic: string;
  altcoinOfferings: string[];
  secLitigationStatus: string;
  strategicSignificance: string;
  features: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export interface CoinMatrixItem {
  id: string;
  symbol: string;
  name: string;
  tier: 'Tier 1 (완전 제도권)' | 'Tier 2 (파생 등재·ETF 대기)' | 'Tier 3 (증권성 리스크 잔류)';
  dcmFuturesListed: boolean;
  dcmExchanges: string[];
  cmeStatus: '상장 거래 중' | '마이크로 선물 상장' | 'Reference Rate 산출' | '미상장';
  spotEtfStatus: '승인 및 거래 중' | 'S-1/19b-4 접수 완료' | '신청 준비 중' | '미승인/반려 위험';
  secStatus: '상품 확정/비증권 인정' | '소송 취하/해결 국면' | '증권성 분쟁 진행형' | '미분류';
  institutionalBookStatus: '적격 금융상품 인정' | '기관 담보 제한적 허용' | '장외 자산 분류(규제 제약)';
  survivalScore: number; // 1-100
  notes: string;
}

export interface BlogArticle {
  id: string;
  seriesNumber: number;
  title: string;
  subtitle: string;
  targetDate: string;
  author: string;
  category: string;
  readingTimeMinutes: number;
  seoKeywords: string[];
  excerpt: string;
  contentMarkdown: string;
  htmlFormatted: string;
}
