/* ============ 分类展览页渲染 ============ */
/* 依赖 js/data.js 的 WORKS / CATTHEME；页面通过 window.EXHIBIT = { cat:"land"|"portrait"|"anime" } 指定分类 */
(function(){
  if(typeof WORKS === "undefined") return;
  const BASE = "../"; // 展览页在 pages/ 下，图片需回退一级

  function render(){
    const grid = document.getElementById("workGrid");
    if(!grid) return;
    const cat = (window.EXHIBIT && window.EXHIBIT.cat) || "land";
    const list = WORKS.map((w,i)=>w.cat===cat ? {w,i} : null).filter(Boolean);

    grid.innerHTML = list.map(({w,i},idx)=>`
      <a class="work ${idx===0?"featured":""}" href="work.html?id=${i}" style="transition-delay:${idx*60}ms">
        <div class="media">
          <span class="price">${w.price}</span>
          <img src="${BASE}${w.img}" alt="${w.name}" loading="lazy">
        </div>
        <div class="body">
          <div class="row">
            <h3>${w.name}</h3>
            <span class="time">创作时间 · ${w.time}</span>
          </div>
          <p>${w.desc}</p>
          <div class="tags">${(w.tags||[]).map(t=>`<span>${t}</span>`).join("")}</div>
        </div>
      </a>`).join("");
    animate();
  }

  function animate(){
    const works = document.querySelectorAll("#workGrid .work");
    if(!("IntersectionObserver" in window)){ works.forEach(x=>x.classList.add("in")); return; }
    const io = new IntersectionObserver(entries=>{
      entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
    },{threshold:.1});
    works.forEach(x=>io.observe(x));
  }

  function topbar(){
    const bar = document.getElementById("topBar");
    if(!bar) return;
    const onScroll = ()=> bar.classList.toggle("solid", window.scrollY > 40);
    addEventListener("scroll", onScroll); onScroll();
  }

  addEventListener("DOMContentLoaded", ()=>{ render(); topbar(); });
})();