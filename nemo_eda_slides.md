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
    font-size: 18px;
    padding: 25px 50px;
    background: #ffffff;
    letter-spacing: -0.02em;
    overflow: hidden;
  }

  h1 {
    color: #1A365D;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    position: relative;
  }

  h1::before {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 40px;
    height: 3px;
    background: #4361EE;
    border-radius: 2px;
  }

  h2 {
    color: #4A5568;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  img {
    border-radius: 4px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    max-width: 95%;
    max-height: 350px;
    object-fit: contain;
    display: block;
    margin: 10px auto;
  }

  .columns {
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
    gap: 20px;
    align-items: start;
  }

  .tag {
    display: inline-block;
    padding: 2px 8px;
    background: #EDF2F7;
    border-radius: 20px;
    font-size: 11px;
    color: #718096;
    margin-bottom: 5px;
  }

  .lead { background: #1A365D; color: #ffffff; }
  .lead h1 { color: #ffffff; font-size: 42px; }
  .lead h1::before { background: #4CC9F0; }

  .summary {
    background: #EBF8FF;
    border-radius: 6px;
    padding: 8px 12px;
    margin-top: 10px;
    font-weight: 700;
    color: #2B6CB0;
    border-left: 4px solid #3182CE;
    font-size: 16px;
  }

  .speaker-note {
    margin-top: 15px;
    padding: 10px;
    background: #F7FAFC;
    border: 1px dashed #CBD5E0;
    font-size: 14px;
    color: #4A5568;
    line-height: 1.5;
  }
  
  .speaker-note b { color: #1A365D; }
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

- **Sample**: 653개 매물
- **Quality**: 전수 조사
- **Focus**: 강남/서초 중심

<div class="summary">💡 요점: 풍부한 표본 확보로 분석 신뢰도 매우 높음</div>

</div>
<div>

![h:350](images/rent_dist.png)

</div>
</div>

<div class="speaker-note">
<b>🎤 발표자 노트 (2분):</b> 653개의 표본은 강남 상업용 부동산의 실시간 현황을 정확히 투영합니다. 월세 분포는 3,500~5,500선에 밀집되어 있으나, 초대형 매물의 존재로 인해 시장의 스펙트럼이 매우 넓게 형성되어 있습니다. 이는 단순한 소형 상가부터 대형 오피스까지 아우르는 데이터임을 의미합니다.
</div>

---

## 02. VALUATION ANALYSIS
# 보증금과 월세의 균형 가격 결정 요인

<div class="columns">
<div>

- **Correlation**: **0.96**
- **Consistency**: 매우 높음
- **Predictability**: 우수

<div class="summary">💡 요점: 임대료 산정 체계가 매우 과학적이며 예측 가능함</div>

</div>
<div>

![h:350](images/dep_rent_scatter.png)

</div>
</div>

<div class="speaker-note">
<b>🎤 발표자 노트 (2분):</b> 보증금과 월세의 상관관계가 0.96으로 나타난 것은 시장이 매우 효율적으로 작동하고 있다는 증거입니다. 이는 임의적인 가격 책정이 아닌, 수익률 기반의 정교한 가격 가이드라인이 작동하고 있음을 증명하며 데이터 기반의 적정가 예측이 가능함을 시사합니다.
</div>

---

## 03. SECTOR ANALYSIS
# 업종별 공간 점유 현황 및 창업 생태계

![h:320](images/business_counts.png)

기타창업(264건)과 카페(44건)의 높은 비중은 소규모 창업 시장의 역동성을 반증합니다.

<div class="summary">💡 요점: 카페 및 다용도 점포 위주의 공급이 활발한 성숙기 시장임</div>

<div class="speaker-note">
<b>🎤 발표자 노트 (2분):</b> 기타창업모음과 카페의 높은 비중은 소규모 창업 및 프랜차이즈 전환이 활발함을 나타냅니다. 한식, 미용실 등 생활 밀착형 업종이 상위권을 차지하며 상권의 안정적인 배후 수요를 반영하고 있습니다. 이는 자영업 생태계가 매우 활발하게 순환되고 있음을 보여줍니다.
</div>

---

## 04. ASSET EFFICIENCY
# 단위 면적당 임대 생산성 및 효율성

![h:320](images/size_rent_scatter.png)

면적과 월세의 상관관계(0.62)는 입지의 희소성이 크기보다 중요함을 시사합니다.

<div class="summary">💡 요점: 좁지만 접근성 좋은 '하이엔드 소형 공간'의 가치가 극대화됨</div>

<div class="speaker-note">
<b>🎤 발표자 노트 (2분):</b> 면적과 월세의 상관관계(0.62)는 입지의 중요성 때문에 면적이 차지하는 비중이 절대적이지 않음을 보여줍니다. 작지만 강한 입지를 가진 매물들이 높은 평당 임대료를 형성하며 자산 효율성을 극대화하고 있습니다. 즉, '크기'보다 '입지'가 우선입니다.
</div>

---

## 05. SEMANTIC ANALYSIS
# 시장 언어 분석: 텍스트 마이닝 셀링 포인트

<div class="columns">
<div>

- **Premium**: `#초역세권`
- **Utility**: `#인테리어완비`
- **Cost**: `#무권리`

<div class="summary">💡 요점: '초역세권' 입지와 '무권리' 효율성이 핵심 트리거임</div>

</div>
<div>

![h:300](images/text_tfidf.png)

</div>
</div>

<div class="speaker-note">
<b>🎤 발표자 노트 (2분):</b> TF-IDF 분석 결과 '역삼동', '강남역' 등 지리적 프리미엄이 강하게 투영되어 있습니다. 특히 '무권리'와 '인테리어 완비'는 초기 비용 절감을 원하는 임차인들의 검색 의도를 정확히 타겟팅하고 있는 핵심 셀링 포인트입니다. 텍스트 데이터가 시장의 실질적 니즈를 반영합니다.
</div>

---

## 06. STRATEGIC ROADMAP
# 데이터 기반 비즈니스 고도화 제언

1. **AI Valuation**: 매물별 적정 임대가 산출 엔진 도입
2. **Trend Forecasting**: 상권별 수요 예측 데이터 제공
3. **Hyper-Personalization**: 사용자 기반 정밀 큐레이션

<div class="summary">💡 요점: 단순 정보를 넘어 AI 기반 가치 평가 및 예측 서비스로의 확장이 필요함</div>

<div class="speaker-note">
<b>🎤 발표자 노트 (2분):</b> 마지막으로 데이터 분석 결과를 실행 가능한 전략으로 연결해야 합니다. 매물별 적정가 산출 엔진, 상권별 수요 예측 데이터, 그리고 사용자 맞춤형 큐레이션 서비스는 네모 플랫폼이 단순한 정보 제공을 넘어 고도화된 부동산 솔루션으로 진화하는 핵심 로드맵이 될 것입니다.
</div>

---

<!-- _class: lead -->

# DATA
# DEFINES
# STRATEGY.

### 감사합니다.
**Antigravity Design Lab**
