---
marp: true
theme: gaia
paginate: true
backgroundColor: #ffffff
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');
  
  section {
    font-family: 'Pretendard', 'Inter', -apple-system, sans-serif;
    color: #2D3436;
    font-size: 24px;
    padding: 50px 60px;
    background: #ffffff;
    letter-spacing: -0.02em;
    overflow: hidden; /* 컨텐츠가 슬라이드를 넘지 않도록 제한 */
  }

  h1 {
    color: #1A365D;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
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
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  strong { color: #4361EE; }
  footer { color: #A0AEC0; font-size: 12px; }

  img {
    border-radius: 4px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    max-width: 100%;
    max-height: 320px; /* 차트가 잘리지 않도록 높이 제한 */
    object-fit: contain;
    display: block;
    margin: 10px auto;
  }

  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
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
  .lead h1 { color: #ffffff; font-size: 56px; }
  .lead h1::before { background: #4CC9F0; }
  .lead h3 { color: #A0AEC0; font-weight: 300; }

  blockquote {
    border-left: 3px solid #4361EE;
    padding-left: 15px;
    font-size: 20px;
    color: #718096;
    background: #F7FAFC;
    margin: 15px 0;
  }
---

<!-- _class: lead -->

<div class="tag">MARKET INSIGHT REPORT</div>

# NE-MO
# REAL ESTATE
# DATA ANALYSIS

### 상업용 부동산 데이터 기반 전략 도출
**Antigravity Design Lab** | 2026

---

## 01. PERSPECTIVE
# 데이터의 거시적 흐름

<div class="columns">
<div>

네모 플랫폼의 **653개 매물** 데이터를 분석하여 시장의 보이지 않는 패턴을 도출했습니다.

- **Integrity**: 정제된 고품질 데이터셋
- **Diversity**: 전 업종 매물 포괄
- **Locality**: 강남 핵심 상권 중심

</div>
<div>

![h:300](images/rent_dist.png)

</div>
</div>

---

## 02. VALUATION
# 보증금과 월세의 균형점

<div class="columns">
<div>

보증금과 월세의 상관관계는 **0.96**으로, 시장 가격 형성 원리가 매우 견고합니다.

> "가격은 시장의 목소리입니다. 이 지표는 가장 객관적인 시장의 합의점입니다."

</div>
<div>

![h:300](images/dep_rent_scatter.png)

</div>
</div>

---

## 03. CATEGORY
# 업종 및 공간 활용 전략

현재 시장은 **기타창업**과 **카페/서비스업**에 집중되어 있으며, 이는 자영업 생태계의 역동성을 보여줍니다.

![h:300](images/business_counts.png)

---

## 04. EFFICIENCY
# 면적 대비 임대 효율성

입지의 희소성이 면적의 한계를 극복하는 **하이엔드 소형 매물**의 존재를 데이터로 증명했습니다.

![h:320](images/size_rent_scatter.png)

---

## 05. KEYWORDS
# 시장을 관통하는 언어

시장의 모든 니즈는 **입지(Location)**와 **비용(Cost)**으로 수렴됩니다.

<div class="columns">
<div>

- **Core Assets**: `#역세권`, `#인테리어`
- **Selling Point**: `#무권리`
- **Targeting**: 효율적 공간 선호

</div>
<div>

![h:300](images/text_tfidf.png)

</div>
</div>

---

## 06. STRATEGY
# 미래를 위한 제언

데이터는 단순한 기록이 아닌 **나침반**입니다.

1. **Quantification**: 매물 가치 점수화
2. **Prediction**: 가격 변동 추이 선제적 제공
3. **Experience**: 맞춤형 큐레이션 서비스

---

<!-- _class: lead -->

# INSIGHT
# DRIVES
# GROWTH.

### 감사합니다.
**Antigravity Design Lab**
