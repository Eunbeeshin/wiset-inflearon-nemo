---
marp: true
theme: gaia
paginate: true
header: "네모 상업용 부동산 매물 데이터 심층 분석 및 시장 인사이트"
footer: "20년 경력 수석 데이터 분석가 | Antigravity Design Lab"
backgroundColor: #ffffff
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');
  
  section {
    font-family: 'Pretendard', 'Inter', -apple-system, sans-serif;
    color: #2D3436;
    font-size: 22px;
    padding: 40px 60px;
    background: #ffffff;
    letter-spacing: -0.02em;
    overflow: hidden;
  }

  h1 {
    color: #1A365D;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 15px;
    position: relative;
  }

  h1::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 4px;
    background: #4361EE;
    border-radius: 2px;
  }

  h2 {
    color: #4A5568;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  strong { color: #4361EE; }
  footer { color: #A0AEC0; font-size: 12px; }

  img {
    border-radius: 4px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    max-width: 100%;
    max-height: 250px;
    object-fit: contain;
    display: block;
    margin: 10px auto;
  }

  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: center;
  }

  .tag {
    display: inline-block;
    padding: 3px 10px;
    background: #EDF2F7;
    border-radius: 20px;
    font-size: 12px;
    color: #718096;
    margin-bottom: 8px;
  }

  .lead { background: #1A365D; color: #ffffff; }
  .lead h1 { color: #ffffff; font-size: 48px; }
  .lead h1::before { background: #4CC9F0; }
  .lead h3 { color: #A0AEC0; font-weight: 300; }

  blockquote {
    border-left: 3px solid #4361EE;
    padding-left: 15px;
    font-size: 18px;
    color: #718096;
    background: #F7FAFC;
    margin: 10px 0;
  }

  .summary {
    background: #EBF8FF;
    border-radius: 8px;
    padding: 10px 15px;
    margin-top: 15px;
    font-weight: 700;
    color: #2B6CB0;
    border-left: 4px solid #3182CE;
  }
---

<!-- _class: lead -->

<div class="tag">REAL ESTATE MARKET INSIGHT</div>

# NEMO PREMIUM
# INSIGHT REPORT
## 상업용 부동산 시장 가치 분석 및 전략적 통찰

### 2026년 상반기 네모 매물 데이터 심층 분석 결과
**Antigravity Design Lab** | Senior Analyst

---

## 01. MARKET OVERVIEW
# 상업용 부동산 시장의 거시적 데이터 지표 분석

<div class="columns">
<div>

네모 플랫폼 내 **653개 활성 매물**의 다차원 데이터를 전수 조사했습니다.

- **Data Integrity**: 고품질 파이프라인
- **Market Coverage**: 오피스, 상가 포함
- **Regional Focus**: 강남/서초 역세권

</div>
<div>

![h:200](images/rent_dist.png)

</div>
</div>

653개의 표본 데이터는 강남권을 중심으로 한 상업용 부동산의 실시간 공급 현황을 잘 나타내고 있습니다. 월세 분포는 3,500~5,500선에 밀집되어 있으나, 초대형 매물의 존재로 인해 시장의 스펙트럼이 매우 넓게 형성되어 있습니다.

<div class="summary">💡 요점: 강남 핵심 상권을 중심으로 풍부한 표본이 확보되어 분석 신뢰도가 매우 높음</div>

---

## 02. VALUATION ANALYSIS
# 보증금과 월세의 균형 가격 결정 요인

<div class="columns">
<div>

임대 시장의 가격 결정 로직은 상관계수 **0.96**으로 매우 견고합니다.

> "데이터는 시장의 본질적인 합의를 보여줍니다. 선형적 관계는 예측 가능성을 의미합니다."

</div>
<div>

![h:200](images/dep_rent_scatter.png)

</div>
</div>

보증금이 올라가면 월세도 함께 상승하는 전형적인 '임대료 체계'가 확인되었습니다. 이는 임의적인 가격 책정이 아닌, 수익률 기반의 정교한 가격 가이드라인이 작동하고 있음을 증명하며 데이터 기반의 적정가 예측이 가능함을 시사합니다.

<div class="summary">💡 요점: 임대료 산정 방식이 매우 체계적이며 시장의 예측 가능성이 확보됨</div>

---

## 03. SECTOR ANALYSIS
# 업종별 공간 점유 현황 및 창업 생태계

상업 공간의 **75% 이상**이 서비스 및 F&B 업종에 집중되어 있으며, 이는 도심지 상권의 역동적인 순환 구조를 반증합니다.

![h:220](images/business_counts.png)

기타창업모음(264건)과 카페(44건)의 높은 비중은 소규모 창업 및 프랜차이즈 전환이 활발함을 나타냅니다. 한식, 미용실 등 생활 밀착형 업종이 상위권을 차지하며 상권의 안정적인 배후 수요를 반영하고 있습니다.

<div class="summary">💡 요점: 카페 및 다용도 점포 위주의 공급이 활발한 성숙기 시장임</div>

---

## 04. ASSET EFFICIENCY
# 단위 면적당 임대 생산성 및 효율성

공간의 크기보다 **입지의 희소성**이 가치를 결정하는 '하이엔드 소형 매물'의 비중이 확대되고 있습니다.

![h:220](images/size_rent_scatter.png)

면적과 월세의 상관관계(0.62)는 입지의 중요성 때문에 면적이 차지하는 비중이 절대적이지 않음을 보여줍니다. 작지만 강한 입지를 가진 매물들이 높은 평당 임대료를 형성하며 자산 효율성을 극대화하고 있습니다.

<div class="summary">💡 요점: 단순히 넓은 공간보다 접근성 뛰어난 소형 공간의 가치가 높게 평가됨</div>

---

## 05. SEMANTIC ANALYSIS
# 시장 언어 분석: 텍스트 마이닝 셀링 포인트

공급자가 강조하는 키워드는 소비자 의사결정의 가장 강력한 트리거입니다.

<div class="columns">
<div>

- **Premium**: `#초역세권`, `#풀인테리어`
- **Economic**: `#무권리`, `#권리금최저`
- **Location**: `#유동인구풍부`

</div>
<div>

![h:200](images/text_tfidf.png)

</div>
</div>

TF-IDF 분석 결과 '역삼동', '강남역' 등 지리적 프리미엄이 강하게 투영되어 있습니다. 특히 '무권리'와 '인테리어 완비'는 초기 비용 절감을 원하는 임차인들의 검색 의도를 정확히 타겟팅하고 있는 핵심 셀링 포인트입니다.

<div class="summary">💡 요점: 임차인은 '초역세권' 입지와 '무권리' 비용 효율성을 최우선 고려함</div>

---

## 06. STRATEGIC ROADMAP
# 데이터 기반 비즈니스 고도화 제언

데이터 분석 결과는 실행 가능한 전략으로 연결되어야 합니다.

1. **AI Valuation**: 매물별 적정 임대가 산출 엔진 도입
2. **Trend Forecasting**: 상권별 수요 예측 데이터 제공
3. **Hyper-Personalization**: 사용자 기반 정밀 큐레이션

<div class="summary">💡 요점: 단순 정보를 넘어 AI 기반 가치 평가 및 예측 서비스로의 확장이 필요함</div>

---

<!-- _class: lead -->

# DATA
# DEFINES
# STRATEGY.

### 감사합니다.
**Antigravity Design Lab**
