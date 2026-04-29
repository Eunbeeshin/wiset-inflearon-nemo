---
marp: true
theme: gaia
paginate: true
header: "NE-MO REAL ESTATE VAPORWAVE INSIGHTS"
footer: "Vaporwave EDA | Antigravity Design Lab"
backgroundColor: #1A0533
style: |
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono&display=swap');
  
  section {
    font-family: 'Space Mono', monospace;
    color: #FF64C8;
    background: linear-gradient(180deg, #1A0533 0%, #2D0057 50%, #570038 100%);
    padding: 25px 40px;
    position: relative;
    overflow: hidden;
    font-size: 18px;
  }

  /* Perspective Grid */
  section::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -50%;
    width: 200%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(255, 100, 200, 0.2) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 100, 200, 0.2) 1px, transparent 1px);
    background-size: 60px 60px;
    transform: perspective(300px) rotateX(60deg);
    z-index: 0;
  }

  h1, h2, h3 {
    font-family: 'Bebas Neue', cursive;
    text-transform: uppercase;
    z-index: 1;
    position: relative;
  }

  h1 {
    font-size: 45px;
    background: linear-gradient(to bottom, #FF9F43, #FF6B9D, #C44DFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  h2 {
    color: #C44DFF;
    font-size: 22px;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  p, li, blockquote {
    z-index: 1;
    position: relative;
    color: #E0E0F0;
  }

  .tag {
    font-family: 'Bebas Neue';
    background: rgba(255, 100, 200, 0.3);
    color: #FF9F43;
    padding: 3px 12px;
    border: 1px solid #FF64C8;
    display: inline-block;
    margin-bottom: 10px;
    font-size: 14px;
  }

  img {
    border: 2px solid #FF64C8;
    box-shadow: 0 0 20px rgba(255, 100, 200, 0.5);
    z-index: 1;
    position: relative;
    max-height: 280px;
  }

  .columns {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 30px;
    z-index: 1;
    position: relative;
  }

  .summary {
    background: rgba(26, 5, 51, 0.8);
    border: 1px solid #C44DFF;
    padding: 10px 15px;
    color: #FF9F43;
    font-weight: bold;
    margin-top: 10px;
    font-size: 16px;
  }

  /* Sliced Sun */
  .sun {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 150px;
    height: 150px;
    background: linear-gradient(to bottom, #FF9F43, #FF6B9D, #C44DFF);
    border-radius: 50%;
    z-index: 0;
    opacity: 0.6;
  }
  .sun::before {
    content: '';
    position: absolute;
    top: 60%;
    left: 0;
    width: 100%;
    height: 10px;
    background: #2D0057;
    box-shadow: 0 20px 0 #2D0057, 0 40px 0 #2D0057;
  }

  header, footer {
    color: rgba(255, 100, 200, 0.5);
    font-family: 'Space Mono';
    font-size: 12px;
  }

---

<!-- _class: lead -->
<div class="sun"></div>
<div class="tag">REAL ESTATE SURREALISM</div>

# NEMO EDA
# VAPORWAVE
# INSIGHTS

### Dreamy Data Analysis of Commercial Market
**Antigravity Design Lab** | 2026.04

---

## 01. MARKET DREAMSCAPE
# 거시적 데이터 지표의 잔상

<div class="columns">
<div>

653개의 매물 데이터가 춤을 추는 강남의 밤.

- **Sample**: 653건의 디지털 파편
- **Location**: 강남/서초 네온 정글
- **Vibe**: 고품질 데이터 파이프라인

</div>
<div>

![h:300](images/rent_dist.png)

</div>
</div>

<div class="summary">💡 요점: 강남 핵심 상권의 데이터는 가장 선명한 시장의 환상을 투영합니다.</div>

---

## 02. PRICE PERSPECTIVE
# 보증금과 월세의 기하학적 균형

<div class="columns">
<div>

상관계수 **0.96**의 완벽한 정렬. 시장의 규칙은 꿈속에서도 견고합니다.

> "가격은 시장이 내뱉는 신호입니다. 이 직선적인 관계는 우리가 기댈 수 있는 유일한 현실입니다."

</div>
<div>

![h:300](images/dep_rent_scatter.png)

</div>
</div>

<div class="summary">💡 요점: 임대료 산정 체계는 디지털 그리드처럼 정교하게 설계되어 있습니다.</div>

---

## 03. URBAN SECTORS
# 업종별 노스텔지어: 창업 생태계의 잔상

카페(44건)와 다용도 점포(36건)가 그리는 도시의 실루엣.

![h:300](images/business_counts.png)

소규모 창업의 물결은 상업 공간에 새로운 리듬을 부여하며, 끊임없이 변하는 도시의 색채를 완성합니다.

<div class="summary">💡 요점: 카페 위주의 공급은 시장의 역동적인 비트를 상징합니다.</div>

---

## 04. SPACE EFFICIENCY
# 단위 면적의 초현실적 가치

입지의 희소성이 공간의 한계를 넘어서는 순간.

![h:300](images/size_rent_scatter.png)

면적과 월세의 상관관계(0.62)는 '크기'가 아닌 '깊이(입지)'가 가치를 결정함을 시사합니다.

<div class="summary">💡 요점: 작지만 강렬한 입지는 하이엔드 시장의 핵심 엔진입니다.</div>

---

## 05. SEMANTIC NOSTALGIA
# 시장의 언어: 키워드로 보는 환상

`#초역세권`, `#인테리어`, `#무권리`. 임차인이 꿈꾸는 가장 현실적인 유토피아.

<div class="columns">
<div>

- **Premium**: `#초역세권`
- **Utility**: `#풀인테리어`
- **Economic**: `#무권리_특급`

</div>
<div>

![h:300](images/text_tfidf.png)

</div>
</div>

<div class="summary">💡 요점: 시장은 입지의 프리미엄과 비용의 효율성 사이에서 공명합니다.</div>

---

## 06. STRATEGIC ROADMAP
# 미래를 향한 디지털 제언

1. **AI Valuation**: 데이터 기반 적정가 산출
2. **Trend Forecasting**: 미래의 상권 잔상 예측
3. **Hyper-Personalization**: 초개인화된 큐레이션

<div class="summary">💡 요점: 데이터는 단순한 과거의 기록이 아닌, 미래를 그리는 나침반입니다.</div>

---

<!-- _class: lead -->
<div class="sun"></div>

# DATA
# DEFINES
# FUTURE.

### ANALYZED BY ANTIGRAVITY
**DESIGN LAB**
