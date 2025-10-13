import{S as D,N as I,P as H,i as C,a as R}from"./assets/vendor-BtyJiotn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".events-swiper");e&&new D(e,{modules:[I,H],slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},pagination:{el:".ev-pagination",clickable:!0,renderBullet:(t,o)=>`<li class="${o}" aria-label="Go to slide ${t+1}"></li>`,bulletClass:"ev-dot",bulletActiveClass:"ev-dot--active"},navigation:{nextEl:".events-swiper-btn-next",prevEl:".events-swiper-btn-prev"},watchOverflow:!0})});const c=document.getElementById("modal-backdrop");function _(e){let t=document.querySelector(".modal");t?t.querySelector(".event-title").textContent=e:(t=document.createElement("div"),t.classList.add("modal"),t.innerHTML=`
            <button class="modal-close" aria-label="Close modal">&times;</button>
            <h2 class="modal-title">Register for Event</h2>
            <p class="event-title">${e}</p>
            <form class="modal-form">
                <label>
                    Name
                    <input type="text" placeholder="Your name" required>
                </label>
                <label>
                    Email
                    <input type="email" placeholder="Your email" required>
                </label>
                <button type="submit">Submit</button>
            </form>
        `,c.appendChild(t),t.querySelector(".modal-close").addEventListener("click",M)),c.classList.add("is-open"),document.body.classList.add("no-scroll"),c.addEventListener("click",function o(s){s.target===c&&M(),c.removeEventListener("click",o)})}function M(){c.classList.remove("is-open"),document.body.classList.remove("no-scroll")}const N=document.querySelectorAll(".event-register-btn");N.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.event;_(t)})});const v="https://books-backend.p.goit.global",Y="/books/category-list",V="/books/top-books",K="/books/category",j="/books/",F=10,G=24,a={categoryToggleBtn:document.querySelector("[data-category-list-toggle]"),categoryMenuContainer:document.querySelector("[data-category-list]"),categoryListElement:document.querySelector(".books-categories-list"),booksContainer:document.querySelector(".js-books-list"),showMoreBtn:document.querySelector(".books-show-more-btn"),booksShowingCount:document.querySelector(".books-showing-count")};let m=[],u="All categories",d=[],y=0,f=0;function E(){return window.innerWidth<768?F:G}async function k(e,t={}){try{const{data:o}=await R(e,t);return o}catch(o){throw C.error({title:"Error",titleColor:"#ffffff",message:`Request failed: <u>${o.message}</u>`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3,animateInside:!0,progressBar:!1,close:!1,closeOnClick:!0}),o}}async function z(){return(await k(`${v}${Y}`)).map(t=>t.list_name)}async function U(){return(await k(`${v}${V}`)).flatMap(t=>t.books)}async function W(e){const t={category:e};return await k(`${v}${K}`,{params:t})}async function J(e){const t=await k(`${v}${j}${e}`);return console.log(`Book details for ID ${e}:`,t),t}function Q(e){const t=`
    <li class="books-categories-item">
      <a href="#" class="books-categories-list-link ${u==="All categories"?"active":""}">All categories</a>
    </li>
  `,o=e.filter(s=>s!=="All categories").map(s=>`
        <li class="books-categories-item">
          <a href="#" class="books-categories-list-link ${s===u?"active":""}">${s}</a>
        </li>
      `).join("");return t+o}function X(e){return e.length===0?'<li class="no-books-message">No books found for this category.</li>':e.map(({book_image:t,title:o,author:s,price:r,_id:n})=>`
        <li class="books-card" data-book-id="${n}">
            <img class="books-card-img" src="${t}" alt="${o}"/>
            <div class="books-info">
                <div class="books-info-left">
                   <h4 class="books-h section-subtitle">${o}</h4>
                   <p class="books-text">${s}</p>
                   
                </div>
                <p class="books-price-text">$${r}</p>
            </div>
            <button class="learn-more-btn" type="button" data-book-modal-open data-book-id="${n}">Learn more</button>
        </li>
    `).join("")}function T(){a.categoryListElement.innerHTML=Q(m),a.categoryListElement.querySelectorAll(".books-categories-list-link").forEach(e=>{e.addEventListener("click",ee)})}async function $(){a.booksContainer.innerHTML="",a.showMoreBtn.classList.add("show-more-hidden"),u==="All categories"?d=await U():d=await W(u),y=0,f=0,B()}function B(e=E()){const t=y*e,o=Math.min(t+e,d.length),s=d.slice(t,o);a.booksContainer.insertAdjacentHTML("beforeend",X(s)),f=o,a.booksShowingCount.textContent=`Showing ${f} of ${d.length}`,y++,f<d.length?a.showMoreBtn.classList.remove("show-more-hidden"):a.showMoreBtn.classList.add("show-more-hidden")}function Z(){const e=a.categoryMenuContainer.classList.toggle("is-open");a.categoryToggleBtn.classList.toggle("is-open"),e&&p()}async function ee(e){e.preventDefault();const t=e.target.textContent;if(u===t){a.categoryMenuContainer.classList.remove("is-open"),a.categoryToggleBtn.classList.remove("is-open");return}u=t,T(),await $(),a.categoryMenuContainer.classList.remove("is-open"),a.categoryToggleBtn.classList.remove("is-open")}async function te(e){const t=e.target.closest(".learn-more-btn");if(t){const o=t.dataset.bookId;if(o)try{const s=await J(o);alert(`Book Title: ${s.title}
Author: ${s.author}
Description: ${s.description.substring(0,100)}...`)}catch(s){alert("Failed to load book details. Please try again later."),console.error("Failed to show book details:",s)}}}async function oe(){a.showMoreBtn.disabled=!0;try{B(4)}catch(e){C.error({title:"Error",message:`Failed to load books: ${e.message}`,backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}finally{a.showMoreBtn.disabled=!1}}async function se(){m=await z(),m.includes("All categories")||(m=["All categories",...m]),T(),a.categoryToggleBtn.firstChild.textContent="Categories ",await $();let e=E();window.addEventListener("resize",()=>{const t=E();t!==e&&(e=t,a.booksContainer.innerHTML="",y=0,f=0,B(t))})}const b=a.categoryListElement,h=document.querySelector(".books-categories-scrollbar-thumb");function p(){const{scrollTop:e,scrollHeight:t,clientHeight:o}=b,s=o/t,r=Math.max(s*o,24),n=o-r,i=e/(t-o)*n||0;h.style.height=r+"px",h.style.top=i+"px"}b.addEventListener("scroll",p);window.addEventListener("resize",p);p();let S=!1,A=0,x=0;h.addEventListener("mousedown",e=>{S=!0,A=e.clientY,x=b.scrollTop,document.body.style.userSelect="none"});document.addEventListener("mousemove",e=>{if(!S)return;const{scrollHeight:t,clientHeight:o}=b,s=t-o,r=h.offsetHeight,n=o-r,g=(e.clientY-A)/n*s;b.scrollTop=x+g,p()});document.addEventListener("mouseup",()=>{S=!1,document.body.style.userSelect=""});a.categoryToggleBtn.addEventListener("click",Z);a.booksContainer.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");t&&(t.blur(),te(e))});a.showMoreBtn.addEventListener("click",oe);window.addEventListener("click",function(e){!a.categoryToggleBtn.contains(e.target)&&!a.categoryMenuContainer.contains(e.target)&&(a.categoryMenuContainer.classList.remove("is-open"),a.categoryToggleBtn.classList.remove("is-open"))});document.addEventListener("DOMContentLoaded",se);document.addEventListener("DOMContentLoaded",()=>{const e=new Swiper("#feedbacks-slider",{slidesPerView:1,spaceBetween:24,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},watchOverflow:!0,navigation:{nextEl:".btn-next",prevEl:".btn-prev",disabledClass:"is-disabled",lockClass:"is-locked"},pagination:{el:".slider-dots",clickable:!0,bulletClass:"dot",bulletActiveClass:"dot--active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}}),t=document.querySelector(".btn-prev"),o=document.querySelector(".btn-next");function s(){if(t){const n=t.classList.contains("is-disabled");t.toggleAttribute("disabled",n),t.setAttribute("aria-disabled",String(n))}if(o){const n=o.classList.contains("is-disabled");o.toggleAttribute("disabled",n),o.setAttribute("aria-disabled",String(n))}}e.on("init",s),e.on("slideChange",s),e.on("reachBeginning",s),e.on("reachEnd",s),e.on("fromEdge",s),s();function r(n){n.key==="ArrowLeft"&&(n.preventDefault(),t?.click()),n.key==="ArrowRight"&&(n.preventDefault(),o?.click())}t?.addEventListener("keydown",r),o?.addEventListener("keydown",r)});new Swiper(".hero-swiper",{loop:!1,speed:400,slidesPerView:1,wrapperClass:"hero-swiper-wrapper",slideClass:"hero-slide",navigation:{nextEl:".hero-right-btn",prevEl:".hero-left-btn"}});const ne=document.querySelectorAll(".event-btn"),l=document.querySelector("#modal-backdrop"),q=document.body;ne.forEach(e=>{e.addEventListener("click",()=>re(e.dataset.event))});function re(e){const t=`
    <div class="modal">
      <button type="button" class="modal-close" aria-label="Close modal">
        <svg width="16" height="16">
         <use href="../img/icons.svg#icon-x"></use>
        </svg>
      </button>
      <h2 class="modal-title">Register</h2>
      <h3 class="event-title">${e}</h3>
      <form class="modal-form" id="register-form">
        <label>
          Name*
          <input type="text" name="name" placeholder="Eva" required />
        </label>
        <label>
          Email*
          <input type="email" name="email" placeholder="hello@booksy.com" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" placeholder="Type your message..."></textarea>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  `;l.innerHTML=t,l.classList.add("is-open"),q.classList.add("no-scroll");const o=l.querySelector(".modal-close"),s=l.querySelector("#register-form");o.addEventListener("click",L),l.addEventListener("click",P),window.addEventListener("keydown",O),s.addEventListener("submit",ae)}function L(){l.classList.remove("is-open"),q.classList.remove("no-scroll"),l.innerHTML="",window.removeEventListener("keydown",O),l.removeEventListener("click",P)}function P(e){e.target===l&&L()}function O(e){e.key==="Escape"&&L()}function ae(e){e.preventDefault();const t=e.target,o=t.elements.name,s=t.elements.email,r=o.value.trim(),n=s.value.trim();t.querySelectorAll("input, textarea").forEach(g=>ie(g)),t.querySelectorAll(".error-text").forEach(g=>g.remove());let i=!1;r||(w(o,"Error text"),i=!0),n?le(n)||(w(s,"Invalid email"),i=!0):(w(s,"Error text"),i=!0),!i&&(C.success({message:"Registration successful!",position:"topRight",timeout:2500}),setTimeout(()=>L(),2500))}function w(e,t){e.classList.add("error"),e.dataset.originalPlaceholder||(e.dataset.originalPlaceholder=e.placeholder),e.placeholder=t;const o=document.createElement("p");o.classList.add("error-text"),o.textContent=t,e.insertAdjacentElement("afterend",o)}function ie(e){e.classList.remove("error"),e.dataset.originalPlaceholder&&(e.placeholder=e.dataset.originalPlaceholder)}function le(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=index.js.map
