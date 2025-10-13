import{S as N,N as Y,P as V,i as B,a as K}from"./assets/vendor-BtyJiotn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".events-swiper");e&&new N(e,{modules:[Y,V],slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},pagination:{el:".ev-pagination",clickable:!0,renderBullet:(t,o)=>`<li class="${o}" aria-label="Go to slide ${t+1}"></li>`,bulletClass:"ev-dot",bulletActiveClass:"ev-dot--active"},navigation:{nextEl:".events-swiper-btn-next",prevEl:".events-swiper-btn-prev"},watchOverflow:!0})});const d=document.getElementById("modal-backdrop");function j(e){let t=document.querySelector(".modal");t?t.querySelector(".event-title").textContent=e:(t=document.createElement("div"),t.classList.add("modal"),t.innerHTML=`
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
        `,d.appendChild(t),t.querySelector(".modal-close").addEventListener("click",$)),d.classList.add("is-open"),document.body.classList.add("no-scroll"),d.addEventListener("click",function o(s){s.target===d&&$(),d.removeEventListener("click",o)})}function $(){d.classList.remove("is-open"),document.body.classList.remove("no-scroll")}const F=document.querySelectorAll(".event-register-btn");F.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.event;j(t)})});const L="https://books-backend.p.goit.global",G="/books/category-list",z="/books/top-books",U="/books/category",W="/books/",J=10,Q=24,i={categoryToggleBtn:document.querySelector("[data-category-list-toggle]"),categoryMenuContainer:document.querySelector("[data-category-list]"),categoryListElement:document.querySelector(".books-categories-list"),booksContainer:document.querySelector(".js-books-list"),showMoreBtn:document.querySelector(".books-show-more-btn"),booksShowingCount:document.querySelector(".books-showing-count")};let f=[],m="All categories",u=[],v=0,b=0;function S(){return window.innerWidth<768?J:Q}async function w(e,t={}){try{const{data:o}=await K(e,t);return o}catch(o){throw B.error({title:"Error",titleColor:"#ffffff",message:`Request failed: <u>${o.message}</u>`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3,animateInside:!0,progressBar:!1,close:!1,closeOnClick:!0}),o}}async function X(){return(await w(`${L}${G}`)).map(t=>t.list_name)}async function Z(){return(await w(`${L}${z}`)).flatMap(t=>t.books)}async function ee(e){const t={category:e};return await w(`${L}${U}`,{params:t})}async function te(e){const t=await w(`${L}${W}${e}`);return console.log(`Book details for ID ${e}:`,t),t}function oe(e){const t=`
    <li class="books-categories-item">
      <a href="#" class="books-categories-list-link ${m==="All categories"?"active":""}">All categories</a>
    </li>
  `,o=e.filter(s=>s!=="All categories").map(s=>`
        <li class="books-categories-item">
          <a href="#" class="books-categories-list-link ${s===m?"active":""}">${s}</a>
        </li>
      `).join("");return t+o}function se(e){return e.length===0?'<li class="no-books-message">No books found for this category.</li>':e.map(({book_image:t,title:o,author:s,price:r,_id:n})=>`
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
    `).join("")}function q(){i.categoryListElement.innerHTML=oe(f),i.categoryListElement.querySelectorAll(".books-categories-list-link").forEach(e=>{e.addEventListener("click",re)})}async function P(){i.booksContainer.innerHTML="",i.showMoreBtn.classList.add("show-more-hidden"),m==="All categories"?u=await Z():u=await ee(m),v=0,b=0,M()}function M(e=S()){const t=v*e,o=Math.min(t+e,u.length),s=u.slice(t,o);i.booksContainer.insertAdjacentHTML("beforeend",se(s)),b=o,i.booksShowingCount.textContent=`Showing ${b} of ${u.length}`,v++,b<u.length?i.showMoreBtn.classList.remove("show-more-hidden"):i.showMoreBtn.classList.add("show-more-hidden")}function ne(){const e=i.categoryMenuContainer.classList.toggle("is-open");i.categoryToggleBtn.classList.toggle("is-open"),e&&h()}async function re(e){e.preventDefault();const t=e.target.textContent;if(m===t){i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open");return}m=t,q(),await P(),i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open")}async function ie(e){const t=e.target.closest(".learn-more-btn");if(t){const o=t.dataset.bookId;if(o)try{const s=await te(o);alert(`Book Title: ${s.title}
Author: ${s.author}
Description: ${s.description.substring(0,100)}...`)}catch(s){alert("Failed to load book details. Please try again later."),console.error("Failed to show book details:",s)}}}async function ae(){i.showMoreBtn.disabled=!0;try{M(4)}catch(e){B.error({title:"Error",message:`Failed to load books: ${e.message}`,backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}finally{i.showMoreBtn.disabled=!1}}async function le(){f=await X(),f.includes("All categories")||(f=["All categories",...f]),q(),i.categoryToggleBtn.firstChild.textContent="Categories ",await P();let e=S();window.addEventListener("resize",()=>{const t=S();t!==e&&(e=t,i.booksContainer.innerHTML="",v=0,b=0,M(t))})}const y=i.categoryListElement,k=document.querySelector(".books-categories-scrollbar-thumb");function h(){const{scrollTop:e,scrollHeight:t,clientHeight:o}=y,s=o/t,r=Math.max(s*o,24),n=o-r,a=e/(t-o)*n||0;k.style.height=r+"px",k.style.top=a+"px"}y.addEventListener("scroll",h);window.addEventListener("resize",h);h();let T=!1,O=0,D=0;k.addEventListener("mousedown",e=>{T=!0,O=e.clientY,D=y.scrollTop,document.body.style.userSelect="none"});document.addEventListener("mousemove",e=>{if(!T)return;const{scrollHeight:t,clientHeight:o}=y,s=t-o,r=k.offsetHeight,n=o-r,g=(e.clientY-O)/n*s;y.scrollTop=D+g,h()});document.addEventListener("mouseup",()=>{T=!1,document.body.style.userSelect=""});i.categoryToggleBtn.addEventListener("click",ne);i.booksContainer.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");t&&(t.blur(),ie(e))});i.showMoreBtn.addEventListener("click",ae);window.addEventListener("click",function(e){!i.categoryToggleBtn.contains(e.target)&&!i.categoryMenuContainer.contains(e.target)&&(i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open"))});document.addEventListener("DOMContentLoaded",le);document.addEventListener("DOMContentLoaded",()=>{const e=new Swiper("#feedbacks-slider",{slidesPerView:1,spaceBetween:24,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},watchOverflow:!0,navigation:{nextEl:".btn-next",prevEl:".btn-prev",disabledClass:"is-disabled",lockClass:"is-locked"},pagination:{el:".slider-dots",clickable:!0,bulletClass:"dot",bulletActiveClass:"dot--active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}}),t=document.querySelector(".btn-prev"),o=document.querySelector(".btn-next");function s(){if(t){const n=t.classList.contains("is-disabled");t.toggleAttribute("disabled",n),t.setAttribute("aria-disabled",String(n))}if(o){const n=o.classList.contains("is-disabled");o.toggleAttribute("disabled",n),o.setAttribute("aria-disabled",String(n))}}e.on("init",s),e.on("slideChange",s),e.on("reachBeginning",s),e.on("reachEnd",s),e.on("fromEdge",s),s();function r(n){n.key==="ArrowLeft"&&(n.preventDefault(),t?.click()),n.key==="ArrowRight"&&(n.preventDefault(),o?.click())}t?.addEventListener("keydown",r),o?.addEventListener("keydown",r)});new Swiper(".hero-swiper",{loop:!1,speed:400,slidesPerView:1,wrapperClass:"hero-swiper-wrapper",slideClass:"hero-slide",navigation:{nextEl:".hero-right-btn",prevEl:".hero-left-btn"}});const c=document.querySelector("[data-menu]"),p=document.querySelector("[data-menu-open]"),x=document.querySelector("[data-menu-close]"),ce=document.querySelectorAll(".menu-nav-link"),I=e=>{document.body&&(document.body.style.overflow=e?"hidden":"")};p&&c&&p.addEventListener("click",()=>{c.classList.add("is-open"),c.removeAttribute("hidden"),I(!0),p.style.display="none"});const A=()=>{c&&(c.classList.remove("is-open"),c.setAttribute("hidden",""),I(!1),p&&(p.style.display="flex"))};x&&x.addEventListener("click",A);c&&c.addEventListener("click",e=>{e.target===c&&A()});ce.forEach(e=>{e.addEventListener("click",A)});const de=document.querySelectorAll(".event-btn"),l=document.querySelector("#modal-backdrop"),H=document.body;de.forEach(e=>{e.addEventListener("click",()=>ue(e.dataset.event))});function ue(e){const t=`
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
  `;l.innerHTML=t,l.classList.add("is-open"),H.classList.add("no-scroll");const o=l.querySelector(".modal-close"),s=l.querySelector("#register-form");o.addEventListener("click",E),l.addEventListener("click",R),window.addEventListener("keydown",_),s.addEventListener("submit",me)}function E(){l.classList.remove("is-open"),H.classList.remove("no-scroll"),l.innerHTML="",window.removeEventListener("keydown",_),l.removeEventListener("click",R)}function R(e){e.target===l&&E()}function _(e){e.key==="Escape"&&E()}function me(e){e.preventDefault();const t=e.target,o=t.elements.name,s=t.elements.email,r=o.value.trim(),n=s.value.trim();t.querySelectorAll("input, textarea").forEach(g=>ge(g)),t.querySelectorAll(".error-text").forEach(g=>g.remove());let a=!1;r||(C(o,"Error text"),a=!0),n?fe(n)||(C(s,"Invalid email"),a=!0):(C(s,"Error text"),a=!0),!a&&(B.success({message:"Registration successful!",position:"topRight",timeout:2500}),setTimeout(()=>E(),2500))}function C(e,t){e.classList.add("error"),e.dataset.originalPlaceholder||(e.dataset.originalPlaceholder=e.placeholder),e.placeholder=t;const o=document.createElement("p");o.classList.add("error-text"),o.textContent=t,e.insertAdjacentElement("afterend",o)}function ge(e){e.classList.remove("error"),e.dataset.originalPlaceholder&&(e.placeholder=e.dataset.originalPlaceholder)}function fe(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=index.js.map
