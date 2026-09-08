import { ResearchAgenda, ExchangeProfile } from '../types';

export const RESEARCH_OVERVIEW = {
  title: 'YesOkLab CTO 긴급 리서치 브리핑: 크립토 규제 절벽과 파생시장 옆문의 역학',
  subtitle: '미 의회 하원 일정 실종(CLARITY 법안 표류), 슈퍼팩(Fairshake)의 정치 자본, 그리고 4대 거래소(비트노미얼·칼시·코인베이스·CME)의 알트 파생 영토 확장',
  preparedFor: 'YesOkLab 공식블로그 기획 연재 시리즈',
  preparedBy: 'YesOkLab CTO / Lead Financial Engineering Researcher',
  date: '2026. 09. 08',
  status: 'Published for Editorial Desk',
  coreThesis: '포괄적 입법(정문)이 워싱턴 선거 정치에 막히자, 자본과 거래소들은 CFTC DCM 선물 자기인증(옆문)과 슈퍼팩 정치력을 통해 알트코인을 제도권 대차대조표에 올리는 생존 전략을 완성했다.',
};

export const RESEARCH_AGENDAS: ResearchAgenda[] = [
  {
    id: 'agenda-1',
    tag: '정치·입법 분석',
    title: '"하원 일정이 사라졌다"는 말의 엄중한 의미',
    subtitle: '선거철 워싱턴 캘린더 단축과 클레리티(CLARITY) 법안의 입법 절벽',
    summary: '미 하원이 9월 회기 중 2주(8일간의 본회의 표결)를 전격 취소하면서, 11월 중간선거 전 디지털 자산 법제화의 시계가 완전히 멈췄습니다.',
    coreInsight: '하원이 9월 중 단 4일만 문을 열고 11월 선거 장기 휴회에 돌입함에 따라, 상원에서 법안이 논의되더라도 하원의 수정안 승인 및 양원 문안 조율이 물리적으로 불가능해졌습니다. 즉, "정치권이 만들어주는 규제 명확성(정문)"은 최소 차기 의회 출범 전까지 닫혔음을 의미합니다.',
    keyPoints: [
      {
        heading: '8일간의 표결 일정 취소와 선거 휴회(Recess)',
        description: '미 연방 하원 지도부는 9월 의회 일정 중 2주간의 본회의 표결(총 8일)을 전격 취소했습니다. 노동절 이후 하원이 실제로 개원해 표결할 수 있는 날은 단 4일에 불과하며, 의원들은 곧바로 11월 중간선거 유세 현장으로 흩어집니다.',
        highlight: '9월 본회의 단 4일 진행 후 11월 선거까지 사실상 휴회',
      },
      {
        heading: '클레리티 법안(H.R. 3633 / FIT21 연계)의 입법 병목',
        description: '하원을 통과하고 상원 은행위를 거친 클레리티 법안은 상원 본회의 심의 시작을 위해 60명의 찬성(Cloture 표결)이 필요합니다. 설령 상원에서 기적적으로 절차 표결을 통과하고 수정안을 의결하더라도, 이를 하원이 재의결하거나 조정위원회(Conference Committee)를 열 물리적 시간표가 소멸했습니다.',
        highlight: '상원 60표 절차 표결 통과하더라도 하원 의결 일정 부재',
      },
      {
        heading: '입법 공백이 시장에 던진 시그널',
        description: '의회가 포괄적인 법률을 제정해 SEC와 CFTC의 관할권을 나누어주길 기다렸던 전통 금융기관과 크립토 업계는 "의회발 구원투수는 없다"는 냉혹한 결론에 도달했습니다. 선거 정국에서 크립토 법안은 우선순위에서 밀려났습니다.',
      },
    ],
    regulatoryContext: '미국 헌법상 양원제 구조에서 회기가 종료되면 미처리 법안은 자동 폐기되거나 차기 의회에서 원점 재발의되어야 하는 레임덕 리스크 직면.',
    marketImpact: '포괄적 규제 완화 랠리 기대감은 단기 꺾였으나, 시장은 이미 대안 루트(선물 시장 및 사법부 판례)로 무게중심을 완전히 이동.',
  },
  {
    id: 'agenda-2',
    tag: '규제 우회 메커니즘',
    title: '"정문이 막히자 선물시장이라는 옆문을 열었다"의 역학',
    subtitle: '의회 입법 대신 CFTC 규정 Part 40.2(자기인증)를 통한 제도권 진입',
    summary: '의회를 통한 법제화(정문)가 좌초되자, 업계는 CFTC가 관할하는 지정계약시장(DCM) 선물 상장(옆문)을 통해 알트코인을 연방법상 "상품"으로 확정짓는 영리한 우회로를 개척했습니다.',
    coreInsight: 'SEC의 자의적 Howey Test 공격을 무력화하는 가장 강력한 무기는 미 의회의 새 법률이 아니라, CFTC 인가 DCM 거래소의 "자기인증(Self-Certification) 선물 상장"이었습니다. 선물이 상장되면 미 연방법상 상품(Commodity)의 지위를 획득하게 됩니다.',
    keyPoints: [
      {
        heading: '정문(Front Door)의 한계: SEC의 집행에 의한 규제(Regulation by Enforcement)',
        description: 'SEC는 게리 겐슬러 체제 하에서 거의 모든 알트코인을 비등록 증권(Unregistered Securities)으로 규정하며 거래소를 기습 기소해 왔습니다. 업계는 이를 타파하기 위해 의회의 클레리티 법안(CFTC에 현물 관할권 부여)에 매달렸으나 입법 지연으로 한계에 봉착했습니다.',
      },
      {
        heading: '옆문(Side Door)의 열쇠: CFTC 규정 Part 40.2 "자기인증(Self-Certification)"',
        description: 'CFTC 인가 지정계약시장(DCM)은 신규 선물 상품을 출시할 때 규제 당국의 사전 승인을 기다릴 필요가 없습니다. 거래소가 스스로 시장 조작 위험성 평가와 공정한 결제 메커니즘을 입증하는 자기인증 서류를 제출하면, 1영업일 후 즉시 상장이 가능합니다.',
        highlight: 'CFTC Rule 40.2: 사전 승인 없이 DCM 자체 인증으로 알트 선물 출시 가능',
      },
      {
        heading: '선물 상장이 부여하는 법적 방어막(Affirmative Defense)',
        description: '알트코인이 연방 규제 선물 시장(DCM)에서 거래되기 시작하면, 해당 자산은 미 상품거래법(CEA)의 보호를 받는 "상품 파생상품의 기초자산"이 됩니다. SEC가 사후에 "이것은 증권이다"라며 단독 규제하려 해도 연방기관 간 관할권 충돌 및 사법부의 반발에 부딪히게 됩니다.',
        highlight: 'DCM 상장 = 상품(Commodity) 분류 선점 효과',
      },
    ],
    regulatoryContext: '2026년 3월 SEC와 CFTC가 비트코인, 이더리움에 이어 XRP, 솔라나(SOL), 카르다노(ADA) 등에 대해 디지털 상품(Digital Commodity) 성격을 인정하는 공동 규칙 발표로 옆문 전략의 유효성이 완벽히 증명됨.',
    marketImpact: '개별 알트코인이 SEC 소송 위험에서 벗어나 제도권 기관 투자자의 합법적 투자 유니버스에 편입되는 결정적 분기점 형성.',
  },
  {
    id: 'agenda-3',
    tag: '정치 자본 & 파생 확장',
    title: '"비트를 넘어 영토를 넓히는 파생시장"과 슈퍼팩(Super PAC)',
    subtitle: 'Fairshake의 2억 6천만 달러 실탄이 바꾼 워싱턴 지형과 알트 파생 폭발',
    summary: '코인베이스, 리플, a16z가 결집한 수퍼팩(Fairshake)이 의회 선거판을 뒤흔들며 정치적 방패를 만들었고, 파생상품 시장은 비트코인·이더리움을 넘어 솔라나, XRP, 아발란체 등 알트코인 전역으로 영토를 확장하고 있습니다.',
    coreInsight: '파생상품 시장의 알트코인 확장은 단순한 금융 기술의 진보가 아닙니다. 크립토 거인들이 조성한 수천억 원 규모의 슈퍼팩 자금이 반크립토 정치인을 퇴출시키고 규제 당국(SEC)의 손발을 묶었기에 비로소 가능해진 고도의 정치·자본 합작품입니다.',
    keyPoints: [
      {
        heading: '수퍼팩(Super PAC: Independent Expenditure-Only Committee)이란?',
        description: '특정 후보자에게 직접 헌금할 수는 없으나, 기업과 개인으로부터 무제한의 자금을 모금하여 TV 광고, 낙선 운동, 지지 캠페인 등 "독립 지출(Independent Expenditure)"을 집행할 수 있는 미국의 합법적 정치 자금 단체입니다.',
      },
      {
        heading: 'Fairshake와 자매 PAC의 압도적 파워 (2억 6천만 달러의 위력)',
        description: '코인베이스(9,350만 달러 이상), 리플 랩스(5,000만 달러 이상), a16z(4,700만 달러 이상)가 주도하여 2024년 2억 6천만 달러를 모금했으며, 2026년 중간선거를 위해서도 이미 1억 9,300만 달러를 비축했습니다. 반크립토 선봉장이었던 케이티 포터 등 유력 의원들을 낙선시키는 등 경이적인 90%+ 승률을 기록했습니다.',
        highlight: '미국 정계 역사상 단일 산업 분야 최대 규모의 정치 자금 집결',
      },
      {
        heading: '비트·이더를 넘어 알트코인으로의 파생 영토 확장',
        description: '정치적 안전지대가 확보되자 거래소들은 BTC, ETH에 안주하지 않고 SOL, XRP, AVAX, LINK, DOGE, ADA, APT, INJ 등 메이저 알트코인에 대한 선물, 옵션, 무기한 선물(Perpetuals)을 동시다발적으로 쏟아내고 있습니다.',
        highlight: '기관 자금 유입 통로가 알트코인 파생상품으로 전면 확대',
      },
    ],
    regulatoryContext: '대법원의 Citizens United 판결(2010)로 기업의 무제한 정치 표현의 자유가 보장된 체제에서, 크립토 산업은 금융권 최고 수준의 정치 로비력 확보.',
    marketImpact: '워싱턴 정치권이 크립토 표심과 자금을 의식해 SEC의 과도한 알트코인 단속에 제동을 걸기 시작함.',
  },
  {
    id: 'agenda-4',
    tag: '기관 금융 & 생존 공식',
    title: '"장부에 오른 코인(금융상품에 올라간 코인)만 살아남는다"',
    subtitle: '클레리티 법안 지연이 초래한 가혹한 양극화: 제도권 자산 vs 장외 좀비 토큰',
    summary: '의회의 법적 사면(클레리티 법안)이 지연되면서, 기관의 대차대조표(장부)와 규제 금융상품에 등재된 코인만이 생존 유동성을 독식하고 비제도권 알트코인은 고사하는 양극화가 가속화됩니다.',
    coreInsight: '월가 헤지펀드, 연기금, 적격 수탁기관, 상업은행은 "법률적 안전장치(DCM 선물, ETF, 적격 담보)"가 없는 코인을 절대로 대차대조표에 올릴 수 없습니다. 금융상품화에 성공한 상위 10여 개 코인만이 살아남고 나머지는 퇴출됩니다.',
    keyPoints: [
      {
        heading: '기관 장부(Institutional Balance Sheet)의 엄격한 편입 기준',
        description: '기관 투자자와 상장 기업은 바젤 은행자본규제, SEC 규정 15c3-1(순자본 규정), 수탁 지침(SAB 121 개정 논의)에 묶여 있습니다. CFTC 인가 선물이나 SEC 승인 ETF 등 공인된 파생·증권 상품으로 포장되지 않은 원시 토큰은 회계상 감액 손실 및 100% 자본 차감 대상이 됩니다.',
      },
      {
        heading: '살아남는 코인의 4대 금융상품화 요건',
        description: '1) CFTC DCM(CME, 비트노미얼, 코인베이스) 선물 상장 완료\n2) 기관급 적격 결제소(DCO) 증거금(Margin Collateral) 인정\n3) SEC 현물 ETF 심사 요건(감시공유협정 SSA) 충족\n4) 공인 벤치마크(CME Reference Rate 등) 실시간 가격 산출',
        highlight: 'DCM 선물 + CME 지수 + ETF 라인업 = 기관 생존 보증수표',
      },
      {
        heading: '장부에 오르지 못한 롱테일 알트코인의 파멸적 유동성 고갈',
        description: '클레리티 법안이 모든 알트코인에 면죄부를 주지 못하는 상태에서, 장부 등재에 실패한 중소형 알트코인들은 CEX 상장폐지, 미국인 거래 차단, 마켓메이커(MM) 철수로 거래량이 마르는 고사 위기에 처합니다.',
      },
    ],
    regulatoryContext: '미 회계기준원(FASB)의 가상자산 공정가치 회계(Fair Value Accounting) 도입으로 규제 상품화된 코인에 한해서만 기업 장부 반영이 수월해짐.',
    marketImpact: '상위 메이저 코인(BTC, ETH, SOL, XRP 등)으로의 기관 자본 초집중 현상과 알트코인 생존율 급감.',
  },
  {
    id: 'agenda-5',
    tag: 'DCM 라이선스 분석',
    title: 'DCM(지정계약시장) 선물 상장 여부와 심사 메커니즘',
    subtitle: 'CFTC Core Principles와 시장 조작 방지(Rule 40.2)의 벽을 넘는 법',
    summary: '아무 코인이나 DCM 선물이 될 수 없습니다. CFTC 핵심 원칙(조작 취약성 방지, 레퍼런스 레이트 신뢰성, 결제 인프라)을 통과한 코인만이 제도권 파생상품 자격을 획득합니다.',
    coreInsight: 'DCM 거래소가 신규 알트코인을 자기인증할 때 CFTC가 가장 엄격하게 따지는 기준은 "현물 시장이 조작에 취약한가(Susceptible to Manipulation)" 여부입니다. 이를 통과했다는 것 자체가 해당 코인의 탈중앙성과 유동성 성숙도를 증명합니다.',
    keyPoints: [
      {
        heading: 'DCM(Designated Contract Market)이란 무엇인가?',
        description: '미국 상품거래소법(CEA) 제5조에 의거해 CFTC의 엄격한 자본금, 시장 감시, 투자자 보호 요건을 통과한 공인 선물거래소입니다. CME, 코인베이스 파생거래소(구 FairX), 비트노미얼, 칼시 등이 대표적입니다.',
      },
      {
        heading: 'CFTC Rule 40.2 자기인증 vs Rule 40.3 사전 승인',
        description: '거래소는 Rule 40.3을 통해 CFTC의 공식 승인을 요청할 수도 있지만, 대다수 혁신 거래소는 Rule 40.2(자기인증)를 선택합니다. 거래소 컴플라이언스 위원회가 상품 스펙과 조작 방지책을 자체 검증하고 등록 통보를 하면 바로 효력이 발생합니다.',
        highlight: 'CFTC가 10일 이내에 명시적 이의(Stay)를 제기하지 않으면 법적 유효',
      },
      {
        heading: 'DCM 선물 상장의 필수 3대 허들',
        description: '1) 신뢰할 수 있는 다수 현물 거래소 가중평균 지수(CME CF BRR, Coinbase Benchmark 등)\n2) 단일 고래의 가격 왜곡을 방어할 수 있는 최소 현물 거래대금\n3) DCO(파생상품 청산소)의 마진 청산 및 디폴트 펀드 커버리지',
      },
    ],
    regulatoryContext: '상품거래법 Core Principle 3: "DCM은 조작에 쉽게 취약하지 않은 계약만을 상장하여야 한다".',
    marketImpact: 'DCM에 상장된 코인은 향후 SEC 현물 ETF 승인의 필수 관문인 "충분한 규모의 규제 시장 감시공유협정(SSA)" 자격을 즉시 확보.',
  },
];

export const EXCHANGES_DATA: ExchangeProfile[] = [
  {
    id: 'bitnomial',
    name: 'Bitnomial',
    nameKo: '비트노미얼',
    category: '수직통합 풀스택 파생거래소',
    licenseType: 'CFTC DCM + DCO(청산소) + FCM(선물중개) 풀 라이선스',
    keyCharacteristic: '미국 유일의 3대 라이선스 수직통합 거래소. 실물인도 및 크립토 마진 담보 혁신.',
    altcoinOfferings: ['XRP(XUS - 미국 최초 규제 선물)', 'SOL', 'ADA', 'APT(앱토스)', 'XTZ(테조스)', 'INJ(인젝티브)', 'BTC', 'ETH'],
    secLitigationStatus: 'SEC의 "XRP 선물은 증권선물" 압박에 굴복하지 않고 2024년 SEC 상대로 연방법원 소송 제기. 이후 SEC-CFTC 공동 상품 분류 및 소송 취하로 규제 승리 달성.',
    strategicSignificance: '2026년 크라켄(Payward)에 전격 인수되어, 미국 거주자 대상 합법적 무기한 선물(CFTC-regulated Perpetuals)의 핵심 전초기지로 급부상.',
    features: [
      '미국 내 최초 규제 XRP 선물(XUS) 상장 주도',
      '크립토 담보 증거금: BTC, ETH, XRP뿐 아니라 리플 스테이블코인(RLUSD)을 마진으로 수취',
      'Crypto Complex: 앱토스, 테조스, 인젝티브 등 최초 알트 선물 개척',
      '크라켄의 유동성과 결합하여 미국 적격 투자자용 무기한 선물 오픈',
    ],
    stats: [
      { label: '보유 라이선스', value: 'DCM / DCO / FCM 풀스택' },
      { label: '핵심 모회사', value: 'Payward (크라켄)' },
      { label: '선물 결제 방식', value: '물리인도(Physical) & 현금결제' },
      { label: '마진 허용 자산', value: 'USD, BTC, ETH, XRP, RLUSD' },
    ],
  },
  {
    id: 'kalshi',
    name: 'Kalshi',
    nameKo: '칼시',
    category: '규제 예측시장 & 이벤트 파생 거래소',
    licenseType: 'CFTC 인가 DCM (Designated Contract Market)',
    keyCharacteristic: '미국 최초의 전면 규제 이벤트 계약(Event Contract) 거래소. 법원 승소 후 알트 무기한 선물 전격 진출.',
    altcoinOfferings: ['BNB', 'ADA', 'AAVE', 'LINK', 'UNI', 'AVAX', 'NEAR', 'SUI', 'PEPE 등 17개 알트 무기한 선물(Perpetual) 라인업 확장'],
    secLitigationStatus: 'CFTC의 선거 이벤트 계약 상장 금지 명령에 불복 소송을 제기하여 워싱턴 D.C. 연방 항소법원에서 역사적 승소(2024). CFTC 권한 남용에 제동.',
    strategicSignificance: '단순 예측시장을 넘어 만기 없는 USD 마진 알트코인 무기한 선물(Perpetual Contracts)을 제도권 CFTC 우산 아래 합법 제공하는 변칙적 파생 혁신가.',
    features: [
      '미국 최초 CFTC 인가 이벤트 계약(Event Contracts) 거래소',
      '알트코인 무기한 선물: BNB, 에이다, 아베 등 17개 알트 라인업 가동',
      '크립토 매크로/규제 통과 확률 시장(클레리티 법안 통과 여부, SEC 위원장 교체 등) 제공',
      '주 정부 및 규제 당국의 제재 시도에 대해 CFTC 비상 권한 개입으로 합법성 방어',
    ],
    stats: [
      { label: '인가 형태', value: 'CFTC DCM (이벤트 파생)' },
      { label: '알트 무기한 선물 라인업', value: '17개 코인' },
      { label: '마진 통화', value: 'USD 증거금 기반' },
      { label: '주요 법적 승리', value: '연방 항소법원 CFTC 규제 승소' },
    ],
  },
  {
    id: 'coinbase',
    name: 'Coinbase Derivatives',
    nameKo: '코인베이스 파생거래소',
    category: '미국 리테일·기관 통합 DCM 거래소',
    licenseType: 'CFTC 인가 DCM (구 FairX 인수) + NFA 등록 FCM',
    keyCharacteristic: '가장 광범위한 미국 내 알트 선물 상장과 버뮤다 역외 무기한 선물(Coinbase International)의 글로벌 투트랙.',
    altcoinOfferings: ['SOL', 'DOGE', 'AVAX', 'LINK', 'SHIB', 'HBAR', 'XLM', 'ADA', 'BTC/ETH Nano 선물'],
    secLitigationStatus: 'SEC의 코인베이스 기소(미등록 브로커 혐의)와 정면 대치하면서도, CFTC 인가 파생 자회사(DCM)를 통해 합법 선물 상장을 계속 밀어붙이는 기염 토함.',
    strategicSignificance: '미국 내 선물 거래에 USDC를 마진 담보로 도입 추진. 글로벌 CEX 유동성을 합법적 미국 FCM 파이프라인으로 흡수하는 중심축.',
    features: [
      '2022년 FairX 인수 후 CFTC 인가 Coinbase Derivatives Exchange로 리브랜딩',
      '미국 내 합법 알트 선물 라인업: 도지(DOGE), 시바이누(SHIB), 헤데라(HBAR), 스텔라(XLM) 등 파격적 상장',
      'USDC 선물 마진 담보: 미국 선물 역사상 최초의 규제 스테이블코인 마진 체계 구축',
      'Coinbase International Exchange(버뮤다 CEX)와 연계한 글로벌 선물 유동성 공유',
    ],
    stats: [
      { label: 'DCM 인수 기반', value: '구 FairX Exchange 인수' },
      { label: '규제 관할', value: 'CFTC / NFA' },
      { label: '마진 혁신', value: 'USDC 증거금 도입' },
      { label: '소매 접근성', value: 'Robinhood, NinjaTrader 등 연계' },
    ],
  },
  {
    id: 'cme',
    name: 'CME Group',
    nameKo: '시카고상품거래소 (CME)',
    category: '글로벌 기관 파생상품의 절대 강자',
    licenseType: '세계 최대 공인 선물거래소(DCM) 및 청산소(DCO)',
    keyCharacteristic: '월가 연기금과 헤지펀드의 본산. SEC 현물 ETF 승인을 이끌어낸 감시공유협정(SSA)의 유일무이한 표준.',
    altcoinOfferings: ['Micro XRP 선물', 'Micro SOL 선물', 'Nasdaq CME Crypto Index 선물(BTC, ETH, BCH, SOL, XRP, ADA, LINK)', 'BTC/ETH 대형·마이크로 선물·옵션'],
    secLitigationStatus: '전통 금융의 상징으로 SEC와 마찰 없음. 오히려 SEC가 비트코인/이더리움 현물 ETF를 승인할 때 "CME의 규제된 선물 시장 감시"를 필수 요건으로 명시.',
    strategicSignificance: 'CME에 상장되거나 Reference Rate(기준가격 지수)가 산출되는 코인만이 블랙록, 피델리티 등 메가 운용사의 차기 현물 ETF 포트폴리오에 진입 가능.',
    features: [
      '글로벌 기관 크립토 파생상품 미결제약정(OI) 및 거래량 부동의 1위',
      '24/7 가상자산 선물 거래 운영 시스템 구축',
      'Micro XRP 및 Micro SOL 선물로 알트코인 기관 유동성 흡수',
      'Nasdaq-CME 합작 크립토 인덱스 선물: 주요 알트코인 바스켓 선물화',
    ],
    stats: [
      { label: '시장 지위', value: '글로벌 No.1 파생거래소' },
      { label: '기관 자금 비중', value: '90%+ 기관 투자자' },
      { label: '알트 바스켓 선물', value: 'Nasdaq CME Crypto Index' },
      { label: '운영 시간', value: '24시간 7일 연속 거래' },
    ],
  },
];
