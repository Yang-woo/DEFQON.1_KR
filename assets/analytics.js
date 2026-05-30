// =============================================================
//  Defqon.1 KR Guide — Analytics (Microsoft Clarity + Vercel)
// =============================================================
//  순수 정적 사이트라 npm 패키지 대신 스크립트 태그 방식.
//  · Vercel Web Analytics: window.va 큐 shim + /_vercel/insights/script.js (head에서 defer 로드)
//  · Microsoft Clarity: 공식 인라인 로더
//  커스텀 이벤트는 window.dqTrack(name, data, clarityOnly) 로 양쪽에 전송.
//  ※ CLARITY_PROJECT_ID 는 발급받은 가이드용 Clarity 프로젝트 ID로 치환.
// =============================================================
(function () {
  "use strict";

  var CLARITY_PROJECT_ID = "wyxzf1ep5f"; // 가이드용 Clarity 프로젝트

  // --- 1) Vercel Web Analytics: 큐 shim (insights 스크립트가 비우기 전 호출 버퍼) ---
  window.va =
    window.va ||
    function () {
      (window.vaq = window.vaq || []).push(arguments);
    };

  // --- 2) Microsoft Clarity 로더 (공식 스니펫) ---
  if (CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== "CLARITY_PROJECT_ID") {
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
  }

  // --- 3) 듀얼 트래킹 헬퍼 ---
  //  clarityOnly=true 면 Vercel(유료 한도)엔 안 보내고 Clarity(무제한)에만 기록.
  window.dqTrack = function (name, data, clarityOnly) {
    try {
      if (window.clarity) {
        window.clarity("event", name);
        if (data)
          for (var k in data)
            if (Object.prototype.hasOwnProperty.call(data, k))
              window.clarity("set", k, String(data[k]));
      }
    } catch (e) {}
    try {
      if (!clarityOnly && window.va)
        window.va("event", { name: name, data: data || {} });
    } catch (e) {}
  };

  // --- 4) 위임 클릭 이벤트 (페이지별 HTML 수정 불필요) ---
  //  분류 우선순위: 외부host(outbound) → nav → card → theme
  document.addEventListener(
    "click",
    function (ev) {
      var a = ev.target.closest && ev.target.closest("a, .theme-toggle");
      if (!a) return;

      // theme 토글 (버튼)
      if (a.classList && a.classList.contains("theme-toggle")) {
        // 클릭 시점의 현재 테마 → 클릭 후 전환될 값
        var cur =
          document.documentElement.getAttribute("data-theme") || "dark";
        window.dqTrack("theme_toggle", { to: cur === "light" ? "dark" : "light" });
        return;
      }
      if (a.tagName !== "A") return;

      var href = a.getAttribute("href") || "";
      var label = (a.textContent || "").trim().slice(0, 40);

      // 외부 링크 우선 (다른 host 또는 target=_blank)
      var isBlank = a.getAttribute("target") === "_blank";
      var diffHost = a.host && a.host !== window.location.host;
      if (isBlank || diffHost) {
        window.dqTrack("outbound_click", { host: a.host || "", href: href });
        return;
      }
      // 내부 nav
      if (a.classList.contains("navlink") || a.classList.contains("brand")) {
        window.dqTrack("nav_click", { label: label, href: href });
        return;
      }
      // index 카드
      if (a.classList.contains("cardlink")) {
        var h3 = a.querySelector("h3");
        window.dqTrack("card_click", {
          label: (h3 ? h3.textContent : label).trim().slice(0, 40),
        });
        return;
      }
    },
    true
  );

  // --- 5) 스크롤 마일스톤 (긴 문서 "어디서 멈췄나"; Clarity 전용) ---
  (function () {
    var doc = document.documentElement;
    if (doc.scrollHeight <= window.innerHeight * 1.2) return; // 짧은 페이지는 생략
    var marks = [25, 50, 75, 100];
    var hit = {};
    var ticking = false;
    function check() {
      ticking = false;
      var scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      var pct = (window.pageYOffset / scrollable) * 100;
      for (var i = 0; i < marks.length; i++) {
        var m = marks[i];
        if (pct >= m && !hit[m]) {
          hit[m] = true;
          window.dqTrack("scroll_depth", { pct: m }, true);
        }
      }
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(check);
        }
      },
      { passive: true }
    );
  })();

  // --- 6) 간단 프라이버시 고지 (차단형 배너 없음) ---
  function injectNotice() {
    var footer = document.querySelector("footer.bot");
    if (!footer || footer.querySelector(".privacy-note")) return;
    var p = document.createElement("div");
    p.className = "privacy-note";
    p.style.cssText = "margin-top:10px;font-size:12px;opacity:.6;";
    p.textContent =
      "이 사이트는 익명 사용 통계(Microsoft Clarity · Vercel Analytics)를 수집합니다.";
    footer.appendChild(p);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectNotice);
  } else {
    injectNotice();
  }
})();
