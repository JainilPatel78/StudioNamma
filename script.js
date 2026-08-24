const toggle = document.querySelector('.theme-toggle');
const root = document.documentElement;
let dark = false;
toggle.addEventListener('click', () => {
  dark = !dark;
  root.style.setProperty('--bg', dark ? '#111' : '#f4f1eb');
  root.style.setProperty('--fg', dark ? '#f4f1eb' : '#111');
  root.style.setProperty('--muted', dark ? '#aaa' : '#6e6a63');
  root.style.setProperty('--line', dark ? '#333' : '#d6d0c6');
});
