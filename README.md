# 个人作品集网站

陈海翔的个人艺术创作作品集，涵盖风景、人物、动画三类作品，展示与交易一体的静态站点。

## 功能特性

- **作品展示**：主页展示精选作品，支持按类别浏览（风景 / 人物 / 动画）
- **分类展览页**：三个独立展览页面，每类使用专属配色风格（风景青、人物橙红、动画金蓝）
- **作品详情页**：通用详情页展示作品背景、创作时间、参考价格与标签，并按作品分类自动套用对应主题
- **深浅主题切换**：一键切换「极北」（深色）/「月牙白」（浅色）主题，选择通过 localStorage 记忆，刷新与跨页跳转保持
- **滚动渐入动画**：基于 IntersectionObserver 的内容渐入效果
- **响应式布局**：兼容桌面端与移动端，移动端提供侧边菜单

## 技术栈

- 原生 HTML5 / CSS3 / JavaScript（ES6+），不使用任何前端框架
- 无第三方 UI 组件库与运行时依赖
- IntersectionObserver（滚动动画）、localStorage（主题记忆）、CSS 变量（主题配色）

## 运行方式

项目为纯静态站点，直接打开 `index.html` 即可预览；推荐通过本地服务器运行以获得最佳体验：

```bash
# 任选其一
python -m http.server 8000
npx serve -l 8000 .
```

然后访问 http://localhost:8000/ 。

## 项目结构

```
├── index.html             # 主页
├── pages/
│   ├── landscape.html     # 风景展览页
│   ├── portrait.html      # 人物展览页
│   ├── anime.html         # 动画展览页
│   └── work.html          # 通用作品详情页
├── css/
│   ├── style.css          # 主页样式
│   ├── exhibition.css     # 展览/详情页样式
│   └── theme.css          # 深浅主题切换样式
├── js/
│   ├── main.js            # 主页交互
│   ├── exhibit.js         # 分类展览渲染
│   ├── work.js            # 详情页渲染
│   ├── data.js            # 共享作品数据
│   └── theme.js           # 主题切换与记忆
└── images/                # 作品图片
```
