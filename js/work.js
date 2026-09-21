/* ============ 通用作品详情页 ============ */
(function(){
  /* work.html 位于 pages/ 子目录，图片与分类链接需相对父目录 */
  const BASE = "../";
  const root = document.getElementById("pageRoot");
  const qs = new URLSearchParams(location.search);
  const idx = parseInt(qs.get("id")||"0", 10);
  const work = WORKS[idx];

  function topbar(){
    const bar = document.getElementById("topBar");
    if(!bar) return;
    const onScroll = ()=> bar.classList.toggle("solid", window.scrollY > 40);
    addEventListener("scroll", onScroll); onScroll();
  }

  if(!work || isNaN(idx)){
    location.href = "../index.html";
    return;
  }

  /* 按分类切换页面主题，套用对应风格 */
  root.className = CATTHEME[work.cat] || "theme-landscape";
  document.getElementById("barLogo").innerHTML = `陈海翔<em> · ${work.type}</em>`;

  document.getElementById("crumbCat").textContent = work.type;
  document.getElementById("crumbCat").href = BASE + CATLINK[work.cat];
  document.getElementById("crumbName").textContent = work.name;

  document.getElementById("dtTitle").innerHTML = work.name.replace(/《|》/g,"") + "<em> · 详情</em>";
  document.getElementById("dtSub").textContent = work.desc;
  document.getElementById("goCat").href = BASE + CATLINK[work.cat];

  document.getElementById("dtMeta").innerHTML = `
    <div class="m"><div class="k">创作时间</div><div class="v">${work.time}</div></div>
    <div class="m"><div class="k">作品类别</div><div class="v">${work.type}</div></div>
    <div class="m"><div class="k">参考价格</div><div class="v">${work.price}</div></div>`;

  document.getElementById("detailLayout").innerHTML = `
    <div class="dt-media">
      <img src="${BASE}${work.img}" alt="${work.name}">
    </div>
    <div class="dt-info">
      <span class="dt-badge">${work.type}</span>
      <h2>${work.name}</h2>
      <p class="dt-desc">${work.desc}</p>
      <div class="dt-price">${work.price}</div>
      <p class="label">创作时间</p>
      <p class="time">${work.time}</p>
      <p class="label">作品背景</p>
      <p>${work.bg}</p>
      <p class="label">标签</p>
      <div class="dt-tags">${(work.tags||[]).map(t=>`<span>${t}</span>`).join("")}</div>
    </div>`;

  topbar();
})();