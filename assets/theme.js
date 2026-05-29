// Theme toggle + persistence (dark default, follows system on first visit)
(function () {
  var KEY = 'dq1-theme';
  function current() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }
  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(KEY, theme); } catch (e) {}
    var btns = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < btns.length; i++) {
      btns[i].textContent = theme === 'light' ? '🌙 다크' : '☀️ 라이트';
    }
  }
  function init() {
    apply(current());
    var btns = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        apply(current() === 'light' ? 'dark' : 'light');
      });
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
