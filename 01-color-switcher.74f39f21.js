const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let o;t.addEventListener("click",(function(){o=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.74f39f21.js.map
