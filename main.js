!function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var a={load:function(e){const n=document.querySelector("#content");n.innerHTML="",n.appendChild(e)}};var o={name:"Home",switchTo:function(){const e=document.createElement("article");e.className="home",e.innerHTML='\n      <header class="main">\n        <h1>Odin Restaurant</h1>\n        <div class="img-container">\n          <img\n            src="https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" \n            alt="Placeholder Image"\n          >\n        </div>\n        </img>\n      </header>\n      <section class="description">\n        <div>\n          This is a description for the "Restaurant Page" project from The Odin Project.\n        </div>\n        <div class="placeholder">\n          More placeholder text here\n        </div>\n      </section>\n    ',a.load(e)}};var c={name:"Contact",switchTo:function(){const e=document.createElement("article");e.className="contact",e.innerHTML='\n      <header class="main">\n        <h1>Odin Restaurant</h1>\n        <h3>Contact</h3>\n      </header>\n      <section class="description">\n        <div class="placeholder">\n          Contact details like Address & such\n        </div>\n      </section>\n    ',a.load(e)}};var r={name:"About",switchTo:function(){const e=document.createElement("article");e.className="about",e.innerHTML='\n      <header class="main">\n        <h1>Odin Restaurant</h1>\n        <h3>About</h3>\n      </header>\n      <section class="description">\n        <div class="placeholder">\n          About the restaurant - History & Speciality\n        </div>\n      </section>\n    ',a.load(e)}};var i={name:"Food",switchTo:function(){const e=document.createElement("article");e.className="food",e.innerHTML='\n      <header class="main">\n        <h1>Odin Restaurant</h1>\n        <h3>Food Menu</h3>\n      </header>\n      <section class="description">\n        <div class="placeholder">\n          Gallery of available food in the restaurant\n        </div>\n      </section>\n    ',a.load(e)}};!function(){const e=[o,c,r,i],n=document.querySelector("#nav-list");e.forEach((e,t)=>{const a=document.createElement("li");a.className="nav-item",a.id=e.name,a.innerHTML=`\n      <a class="nav-link" data-index="${t}" href="#">${e.name}</a>\n    `,n.appendChild(a)}),n.addEventListener("click",n=>{const t=n.target,a=t.dataset.index;e[a].switchTo(),document.querySelector(".active").classList.toggle("active"),t.classList.toggle("active")}),o.switchTo(),document.querySelector(".nav-link").classList.toggle("active")}()}]);