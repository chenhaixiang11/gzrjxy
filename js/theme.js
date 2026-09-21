/* ============ 深浅主题切换（极北 / 月牙白） ============ */
(function(){
  const KEY = "theme";
  const DARK = "polar";   /* 现有深色主题：极北 */
  const LIGHT = "moon";   /* 浅色主题：月牙白 */

  function read(){
    try{ return localStorage.getItem(KEY); }catch(e){ return null; }
  }
  function current(){ return read() === LIGHT ? LIGHT : DARK; }

  function setTheme(t){
    const light = t === LIGHT;
    document.documentElement.classList.toggle("theme-light", light);
    const btn = document.getElementById("themeToggle");
    if(btn){
      btn.classList.toggle("is-light", light);
      btn.setAttribute("aria-pressed", String(light));
      btn.title = light ? "切换到极北主题" : "切换到月牙白主题";
    }
    try{ localStorage.setItem(KEY, t); }catch(e){}
  }

  /* 立即应用，避免页面加载时闪烁 */
  setTheme(current());

  document.addEventListener("DOMContentLoaded", function(){
    setTheme(current());
    const btn = document.getElementById("themeToggle");
    if(btn) btn.addEventListener("click", function(){
      setTheme(current() === LIGHT ? DARK : LIGHT);
    });
  });
})();
