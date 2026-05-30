<div align="center">

# 🎶 DEFQON.1 2026 한국어 안내 (비공식)
### Unofficial Korean Guide

**Q-Dance 공식 Defqon.1 2026 안내문을 영어 원문과 한국어로 한 줄씩 병기한 비공식 팬 번역 사이트**
_A line-by-line English/Korean fan translation of Q-Dance's official Defqon.1 2026 guides._

[![🔗 라이브](https://img.shields.io/badge/🔗_Live-defqon1--2026--kr.vercel.app-ff3b3b)](https://defqon1-2026-kr.vercel.app)
![비공식](https://img.shields.io/badge/unofficial-fan_translation-lightgrey)
![Build](https://img.shields.io/badge/build-none_(static)-blue)
![Deploy](https://img.shields.io/badge/deploy-Vercel-black)

📅 **2026 · June 25–28** · 📍 Biddinghuizen, The Netherlands

**🌐 [한국어](#한국어) · [English](#english)**

</div>

> [!WARNING]
> **이 사이트는 Q-Dance의 공식 사이트가 아닙니다.** 비영리 비공식 팬 번역이며, Q-Dance와 아무런 관련이 없습니다.
>
> **This is NOT an official Q-Dance site.** It is an unofficial, non-commercial fan translation, not affiliated with or endorsed by Q-Dance.

---

## 한국어

### 왜 만들었나

Defqon.1의 공식 안내문(All You Need To Know·FAQ·Legendary Bracelet FAQ)은 **영어로만**, 그것도 분량이 상당합니다. 처음 가는 한국 팬에게는 티켓·팔찌·캠핑·반입 규정·교통처럼 **놓치면 곤란한 정보**를 영어로 훑는 게 부담이죠.

그래서 공식 원문을 **영어 한 줄 → 한국어 한 줄**로 나란히 정리했습니다. 원문을 그대로 옆에 두고 보기 때문에, 번역이 의심스러우면 바로 원문과 대조할 수 있습니다.

### ⚠️ 면책 (Disclaimer)

- 본 사이트는 **Q-Dance의 공식 사이트가 아닌, 비영리 비공식 팬 번역**입니다.
- 모든 원문의 저작권은 **Q-Dance**에 있습니다. 번역은 한국 팬들의 편의를 위한 것이며, 어떤 상업적 목적도 없습니다.
- 내용은 작성 시점 기준이며 행사 전 변경될 수 있습니다. **최종 정보는 항상 [Q-Dance.com](https://www.q-dance.com/) 공식 페이지에서 확인하세요.**
- 번역 과정에서 오역·누락이 있을 수 있습니다. 중요한 결정(티켓·환불·반입 등)은 반드시 원문을 확인하세요.
- 권리자(Q-Dance)의 요청이 있을 경우 **즉시 콘텐츠를 내립니다.**

### 주요 기능

- 🇬🇧🇰🇷 **영/한 병기** — 영어 원문과 한국어 번역을 한 줄씩 나란히 표시
- 🌗 **다크 / 라이트 테마** — 토글 지원, 첫 방문 시 시스템 설정을 따르고 이후 선택을 기억
- 📱 **반응형** — 모바일/데스크톱 모두 대응
- ⚡ **빠름** — 빌드·프레임워크 없는 순수 정적 페이지
- 🔍 **검색엔진 비노출** — `robots.txt`로 noindex (팬 대상 직접 공유용)

### 문서 구성

| 페이지 | 내용 |
|---|---|
| [`index.html`](index.html) | 랜딩 — 문서 선택 |
| [`all-you-need-to-know.html`](all-you-need-to-know.html) | **전체 안내** — 날짜·운영시간·티켓·팔찌·교통·캠핑·반입규정·안전·즐길거리 |
| [`faq.html`](faq.html) | **FAQ** — 접근성·티켓·팔찌·트래블&스테이·교통·DEDIQATED·추첨 등 |
| [`bracelet-faq.html`](bracelet-faq.html) | **레전더리 팔찌 FAQ** — 배송·활성화·결제·충전·분실·환불 |

### 원문 출처 (공식 Q-Dance)

- [All You Need To Know 2026](https://www.q-dance.com/l/defqon-1-all-you-need-to-know-2026)
- [FAQ 2026](https://www.q-dance.com/l/defqon1-2026-faq)
- [Legendary Bracelet FAQ 2026](https://www.q-dance.com/l/defqon1-faq-2026-legendary-bracelet)

### 기술 스택

순수 정적 사이트입니다 — **빌드 단계·프레임워크·번들러 없음.**

- **마크업/스타일/로직:** HTML · CSS · Vanilla JS
- **분석:** Microsoft Clarity(히트맵·세션) + Vercel Web Analytics(집계)
- **배포:** Vercel

### 로컬 실행

```bash
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 열기
```

> `file://`로 직접 열면 일부 에셋이 로드되지 않을 수 있으니 로컬 서버를 사용하세요.

### 프로젝트 구조

```
defqon1-kr-guide/
├─ index.html                 랜딩 (문서 선택)
├─ all-you-need-to-know.html  전체 안내
├─ faq.html                   FAQ
├─ bracelet-faq.html          팔찌 FAQ
├─ assets/
│  ├─ style.css               공유 스타일 (다크/라이트 테마)
│  ├─ theme.js                테마 토글 + 기억
│  ├─ analytics.js            Clarity + Vercel + 커스텀 이벤트
│  └─ favicon.svg
├─ robots.txt                 noindex
└─ vercel.json                Vercel 설정
```

### 오타·오역 제보

번역 오류나 깨진 부분을 발견하시면 제보해 주세요. 함께 고치면 더 정확해집니다.

- **GitHub Issues:** [이슈 남기기](https://github.com/Yang-woo/DEFQON.1-2026-KR/issues)
- 또는 페이지 하단 푸터의 **이메일**로 연락

### 제작

Made by **YANGWOO LEE** · [GitHub](https://github.com/Yang-woo)

### 라이선스

- **코드**(HTML/CSS/JS 골격)는 자유롭게 참고·사용하셔도 됩니다.
- **번역 콘텐츠**의 원저작권은 **Q-Dance**에 있습니다. 본 저장소는 비공식 팬 번역일 뿐이며, 콘텐츠에 대한 어떠한 권리도 주장하지 않습니다.

---

## English

### Why this exists

Defqon.1's official guides (All You Need To Know, FAQ, Legendary Bracelet FAQ) are **English-only** and fairly long. For Korean fans attending for the first time, skimming critical details — tickets, bracelets, camping, item rules, transport — in English is a real hurdle.

So this project lays out the official text **line by line: English first, Korean below**, side by side. Because the original sits right next to the translation, you can always cross-check it against the source.

### ⚠️ Disclaimer

- This is an **unofficial, non-commercial fan translation** — not Q-Dance's official site.
- All original content is copyright **Q-Dance**. The translation exists solely for the convenience of Korean fans, with no commercial purpose.
- Information reflects the time of writing and may change before the event. **Always confirm final details on the official [Q-Dance.com](https://www.q-dance.com/) pages.**
- Translations may contain errors or omissions. For important decisions (tickets, refunds, items), always verify against the original.
- Content will be **taken down immediately upon request** by the rights holder (Q-Dance).

### Features

- 🇬🇧🇰🇷 **Bilingual** — English original and Korean translation, line by line
- 🌗 **Dark / light theme** — follows your system on first visit, then remembers your choice
- 📱 **Responsive** — works on mobile and desktop
- ⚡ **Fast** — pure static pages, no build or framework
- 🔍 **Not indexed** — noindex via `robots.txt` (for direct sharing among fans)

### Pages

| Page | Contents |
|---|---|
| [`index.html`](index.html) | Landing — pick a document |
| [`all-you-need-to-know.html`](all-you-need-to-know.html) | **All You Need To Know** — dates, hours, tickets, bracelet, transport, camping, item rules, safety, things to do |
| [`faq.html`](faq.html) | **FAQ** — accessibility, tickets, bracelet, travel & stay, transport, DEDIQATED, lottery, and more |
| [`bracelet-faq.html`](bracelet-faq.html) | **Legendary Bracelet FAQ** — shipping, activation, payment, top-up, loss, refunds |

### Sources (official Q-Dance)

- [All You Need To Know 2026](https://www.q-dance.com/l/defqon-1-all-you-need-to-know-2026)
- [FAQ 2026](https://www.q-dance.com/l/defqon1-2026-faq)
- [Legendary Bracelet FAQ 2026](https://www.q-dance.com/l/defqon1-faq-2026-legendary-bracelet)

### Tech stack

A pure static site — **no build step, framework, or bundler.**

- **Markup / styles / logic:** HTML · CSS · Vanilla JS
- **Analytics:** Microsoft Clarity (heatmaps & session replay) + Vercel Web Analytics (aggregate)
- **Deploy:** Vercel

### Local development

```bash
python3 -m http.server 8000
# open http://localhost:8000 in your browser
```

> Opening files via `file://` may break some asset loading — use a local server.

### Project structure

```
defqon1-kr-guide/
├─ index.html                 Landing (document picker)
├─ all-you-need-to-know.html  All You Need To Know
├─ faq.html                   FAQ
├─ bracelet-faq.html          Legendary Bracelet FAQ
├─ assets/
│  ├─ style.css               Shared styles (dark/light theme)
│  ├─ theme.js                Theme toggle + persistence
│  ├─ analytics.js            Clarity + Vercel + custom events
│  └─ favicon.svg
├─ robots.txt                 noindex
└─ vercel.json                Vercel config
```

### Reporting errors

Found a translation error or something broken? Please let me know — fixing it together makes the guide more accurate.

- **GitHub Issues:** [open an issue](https://github.com/Yang-woo/DEFQON.1-2026-KR/issues)
- or use the **email** in the page footer

### Credits

Made by **YANGWOO LEE** · [GitHub](https://github.com/Yang-woo)

### License

- **Code** (HTML/CSS/JS scaffolding) is free to reference and reuse.
- **Translated content** remains copyright **Q-Dance**. This repository is an unofficial fan translation and claims no rights over that content.

<div align="center">
<sub>비공식 팬 번역 · Unofficial Korean fan translation of Q-Dance Defqon.1 2026 guides.</sub>
</div>
