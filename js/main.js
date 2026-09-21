/* ============ 主页交互与项目数据 ============ */
const ICONS = {
  land: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 19h18M5 19V9l6 5 4-4 4 4v5"/><circle cx="6" cy="6" r="1.6"/></svg>',
  portrait: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="3.6"/><path d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6"/></svg>',
  anime: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l2 4 4 .5-3 3 .7 4-3.7-2-3.7 2 .7-4-3-3 4-.5z"/></svg>',
  about: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>',
  phone: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>'
};

/* 作品数据来自共享文件 js/data.js（WORKS / CATLINK） */

function renderProjects(){
  const grid = document.getElementById("projectGrid");
  if(!grid) return;
  grid.innerHTML = WORKS.map((p,i) => `
    <article class="card">
      <div class="media">
        <span class="badge">${ICONS[p.cat]} ${p.type}</span>
        <span class="p">${p.price}</span>
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="body">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
        <a class="more" href="pages/work.html?id=${i}">进入详情 →</a>
      </div>
    </article>`
  ).join("");
}

function renderNav(){
  const nav = document.getElementById("mainNav");
  if(!nav) return;
  const items = [
    {t:"风景图", c:"land", href:"pages/landscape.html", num:"01"},
    {t:"人物图", c:"portrait", href:"pages/portrait.html", num:"02"},
    {t:"动画图", c:"anime", href:"pages/anime.html", num:"03"}
  ];
  nav.innerHTML = items.map(i => `
    <a href="${i.href}">${ICONS[i.c]} ${i.t}<span class="num">${i.num}</span></a>`).join("");
}

function mobile(){
  const toggle = document.getElementById("navToggle"), sidebar = document.getElementById("sidebar"), mask = document.getElementById("navMask");
  if(!toggle) return;
  toggle.addEventListener("click", ()=>{ sidebar.classList.toggle("open"); mask.classList.toggle("show"); });
  mask.addEventListener("click", ()=>{ sidebar.classList.remove("open"); mask.classList.remove("show"); });
}

/* 渐入 */
function reveal(){
  const els = document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){ els.forEach(e=>e.classList.add("in")); return; }
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
  },{threshold:.12});
  els.forEach(e=>io.observe(e));
}

document.addEventListener("DOMContentLoaded", ()=>{
  renderNav(); renderProjects(); mobile(); reveal();
});