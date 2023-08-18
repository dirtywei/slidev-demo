---
theme: ./
colorSchema: 'auto'
layout: intro
# https://sli.dev/custom/highlighters.html
highlighter: shiki
themeConfig:
  logoHeader: "https://re.bluepoch.com/home/img/logo.png"
  eventLogo: "https://www.bluepoch.com/_nuxt/img/logo.3bfff83.svg"
  eventUrl: "https://vuejs.amsterdam/"
  twitter: "@yangshunwei"
  twitterUrl: "https://twitter.com/alvarosabu"
css: unocss
---
# 分享会

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Next page  <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: two-cols
---

# 会议纪要

本次会议主要由两部分组成：分享前言、技术分享

- 📝 **分享前言** - 对公司的印象
- 🎨 **分享前言** - 近期的工作感受
- 🧑 **技术分享** - 什么是构建工具，他能做什么？
- 🤹 **技术分享** - 构建工具的发展史以及各自优劣
- 🎥 **技术分享** - Vite构建工具为什么这么快
- 📤 **技术分享** - Vite构建原理以官网活动应用
- 🛠 **技术分享** - JavaScript设计模式应用

::right::

---
layout: intro
---

# 你将会收获

1.快速了解前端构建工具和原理<br>
2.快速掌握Vite各种场景应用<br>
3.构建产物iife模式应用


---
preload: false
layout: new-section
---
# PPT由Slidev技术驱动

<div class="w-60 relative m-auto mt-28">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-square.png"
    />
    <img
      v-motion
      :initial="{ y: 500, x: -100, scale: 2 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-circle.png"
    />
    <img
      v-motion
      :initial="{ x: 600, y: 400, scale: 2, rotate: 100 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-triangle.png"
    />
  </div>

  <div
    class="text-5xl absolute top-14 left-40 text-[#2B90B6] -z-1"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }">
    Slidev
  </div>
</div>

<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>
---
transition: slide-up
layout: two-cols
---

# 分享前言

最初对公司的印象

- 外界对我们公司评价很高，用一词形容“小而美”
- 产品美术和剧情都很优秀，风格也很吸引人
- 具有潜力的一家游戏公司

::right::

<img class="w-350px" src="https://picx.zhimg.com/80/v2-69b2ba65fca64e6465c7236aa7b42d3d_720w.webp?source=1940ef5c" />

---
layout: two-cols
---
# 分享前言

近期工作感受

- 玩家非常疯狂，对产品要求很高
- 二次元的玩家都是“细节控”
- 二次元的玩家都是“技术控”

::right::

<img class="w-350px" src="/card.jpg" />

---
transition: slide-up

layout: intro

---
# 技术分享

<div class="text-16px  text-center">
主要讲解构建工具的原理及在工作中的应用
</div>
---
transition: slide-up
---
# 什么是构建

构建：将我们开发环境的代码，转化成生产环境可用来部署的代码，这个过程称之为构建

<div><br></div>

![Local Image](/build.png)

<arrow v-click="3" x1="400" y1="420" x2="230" y2="330" color="#564" width="3" arrowSize="1" />

[^1]: [Learn More](https://sli.dev/guide/syntax.html#line-highlighting)

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---
transition: slide-up

level: 2
---

# 构建工具的前世今生

#### 不同的时代，构建工具也不同

|      |      |
| ---- | ---- |
| <kbd>YUI Tool</kbd> <kbd>Ant</kbd>| 青铜时代：YUI tool 是 07 年左右出现的一个构建工具，功能比较简单，当时 web 应用开发主要采用 JSP，用于压缩混淆 css 和 js 代码，需要配合 java 的 Ant 使用。 （前后端未分离）|
| <kbd>Grunt</kbd> <kbd>Gulp</kbd>|白银时代：解析 html、es6 代码转换为 es5、less / sass 代码转换为 css 代码、代码检查、代码压缩、代码混淆配置成一系列任务，然后通过 Grunt / Gulp 自动执行这些任务。（前后端分离） |
| <kbd>Webpack </kbd> | 黄金时代：基于三大框架诞生，组件模块化成为前端开发的主流模式，webpack油然而生，解决文件杂乱，依赖关系不明确等问题 |
| <kbd>Vite </kbd> | 黄金时代：开发模式下借助浏览器对 ESM 的支持，采用 nobundle 的方式进行构建，提高开发体验；生产模式下则基于 rollup 进行构建，相对webpack而言，速度更快 |

---
transition: slide-up

layout: new-section
---

# 新一代构建工具核心能力

![Local Image](/power.png)
---
layout: new-section
---
# 2022构建工具排行榜

![Local Image](/rank.png)

---
layout: intro
---
# 为什么Vite比webpack快呢
---
layout: new-section
---
# webpack在后台构建表现

后台项目大约30模块左右，构建时间约60000ms

<div>
<br>
<br>
<img class="w-450px m-auto" src="/houtai.png" />
</div>
---
transition: slide-up
layout: new-section
---

# webpack构建原理
<div><br></div>

![Local Image](/webpack.png)


---
layout: new-section

---
# Vite构建原理
<div>
<br>
<img class="w-450px m-auto" src="/vite.png" />
<br>
<div>上链接：<a href="http://172.24.6.46:4001/">http://172.24.6.46:4001/</a></div>
</div>
---
transition: fade-out
---

# Vite 快的原因：

- 📝 **noBundle** - vite提供的都是 noBundle 服务，无需等待构建，直接提供服务
- 📝 **esbuild** - Vite使用 esbuild 预构建依赖，esbuild 基于 go 语言实现，代码直接编译成机器码。webpack基于js，先解析为字节码，再编译为机器码。构建速度比 webpack 快10-100 倍
<img class="w-450px m-auto" src="/esbuild.png" />
- 📝 **ESM** - Vite 以 原生 ESM 方式根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理
- 📝 **缓存策略** - Vite 同时利用 HTTP 头来加速整个页面的重新加载(针对依赖和源码做缓存策略)

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: intro
---
#### 总的来说vite快的核心是让浏览器做更多的事情
---
layout: intro
---
#### 这么快，这么好用东西，我们实际工作中有什么作为呢
---

# Vite应用

- 构建单页面应用（开发效率更高,后面单页面应用会考虑vite构建）
- 打包js-sdk（解决前端复用问题，例如live2D功能、底部icp模块、双端适配代码、其他复杂且复用功能）
- 代码混淆压缩（体积更小、防止篡改和白嫖技术）
- ...
- 其他

---

# 底部ICP过往现状

- 官网、H5活动、还有版本页都有ICP，而且都是一样
- 复用该模块采用Copy方式，把css\html\js复制到不同项目下
- 如果遇到修改，例如修改一个协议链接，意味着把所有项目git pull 本地修改，在逐一发布
- 效率非常低效，方式很尴尬
---

# Vite构建底部ICP

- 最终产物是一个js文件
- 部署js到服务器，其他项目引入js 文件
- 如果遇到修改，直接修改js发布即可，引入的项目无需改动
---
layout: text-window
reverse: true
---

<h1 class="text-left">构建底部ICP</h1>

<ul class="text-left">
<li>1.编译es6+语法</li>
<li>2.自动添加浏览器css前缀</li>
<li>3.动态加载css和dom</li>
<li>4.压缩混淆代码</li>
</ul>


<div class="text-left">使用示例：</div>
```html
<script src="./bpFooter.jp.js"></script>
<script>
  const footerRight = new bpFooter.SetFooterRight();
  footerRight.setupInit().then();
</script>
```

::window::

```js
var bpFooter = (function (r) {
    'use strict'
    class a {
      constructor() {
       ...
      }
      setupInit() {
        const e = this
        return new Promise(function (t, o) {})
      }
      setupStyle() {
        const e = document.createElement('style')
        ;(e.innerHTML = ``),
          document.head.appendChild(e)
      }
      setupDom() {
        this.footer.innerHTML = ``
      }
    }
  })({})

```
---

# 构建产物的格式
- esm
- umd
- amd
- cjs
- iife
---
layout: text-window
---
# iife特点

1. 英文全称：immediately invoked function expressions
2. 中文名称：立即执行函数
3. 拥有独立作用域，对其他代码互不干预
4. 著名的Jquery就是使用iife


::window::

```js
(function(){
  // ...
})()

```
---
layout: two-cols
---

# iife+原型模式应用

- 更有组织编写代码
- 可读性高
- 易拓展
- 性能高

::right::

<img src="/carbon.png" class="w-800px" />

---
layout: intro
---
# 谢谢观看