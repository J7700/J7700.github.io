!function(e,t){var r=t.documentElement,i="Fluid_Color_Scheme",a="data-user-color-scheme",n="#color-toggle-icon";function o(e){try{return localStorage.getItem(e)}catch(e){return null}}function c(){var e=getComputedStyle(r).getPropertyValue("--color-mode");return"string"==typeof e?e.replace(/["'\s]/g,""):null}function s(){r.setAttribute(a,l()),function(e){try{localStorage.removeItem(e)}catch(e){}}(i)}var u={dark:!0,light:!0};function l(){var e,t="string"==typeof(e=r.getAttribute("data-default-color-scheme"))?e.replace(/["'\s]/g,""):null;if(u[t])return t;if(t=c(),u[t])return t;var i=(new Date).getHours();return i>=18||i>=0&&i<=6?"dark":"light"}function d(c){var d=c||o(i)||l();if(d===l())s();else{if(!u[d])return void s();r.setAttribute(a,d)}!function(e){if(u[e]){var r=f("dark");e&&(r=f(e));var i=t.querySelector(n);i?(i.setAttribute("class","iconfont "+r),i.setAttribute("data",g[e])):Fluid.utils.waitElementLoaded(n,(function(){var i=t.querySelector(n);i&&(i.setAttribute("class","iconfont "+r),i.setAttribute("data",g[e]))}))}}(d),function(e){var r=t.getElementById("highlight-css"),i=t.getElementById("highlight-css-dark");"dark"===e?(i&&i.removeAttribute("disabled"),r&&r.setAttribute("disabled","")):(r&&r.removeAttribute("disabled"),i&&i.setAttribute("disabled",""));setTimeout((function(){t.querySelectorAll(".markdown-body pre").forEach((e=>{var t=Fluid.utils.getBackgroundLightness(e)>=0?"code-widget-light":"code-widget-dark",r=e.querySelector(".code-widget-light, .code-widget-dark");r&&(r.classList.remove("code-widget-light","code-widget-dark"),r.classList.add(t))}))}),200)}(d),function(r){e.REMARK42&&e.REMARK42.changeTheme(r);e.CUSDIS&&e.CUSDIS.setTheme(r);var i=t.querySelector(".utterances-frame");if(i){const t={type:"set-theme",theme:"dark"===r?e.UtterancesThemeDark:e.UtterancesThemeLight};i.contentWindow.postMessage(t,"https://utteranc.es")}var a=t.querySelector("iframe.giscus-frame");if(a){const t={setConfig:{theme:"dark"===r?e.GiscusThemeDark:e.GiscusThemeLight}};a.contentWindow.postMessage({giscus:t},"https://giscus.app")}}(d)}var g={dark:"light",light:"dark"};function f(e){return"icon-"+e}function h(){var e=o(i);if(u[e])e=g[e];else{if(null!==e)return;var r=t.querySelector(n);r&&(e=r.getAttribute("data")),r&&u[e]||(e=g[c()])}return function(e,t){try{localStorage.setItem(e,t)}catch(e){}}(i,e),e}d(),Fluid.utils.waitElementLoaded(n,(function(){d();var e=t.querySelector("#color-toggle-btn");if(e){e.addEventListener("click",(function(){d(h())}));var r=t.querySelector(n);r&&(e.addEventListener("mouseenter",(function(){var e=r.getAttribute("data");r.classList.replace(f(g[e]),f(e))})),e.addEventListener("mouseleave",(function(){var e=r.getAttribute("data");r.classList.replace(f(e),f(g[e]))})))}}))}(window,document);