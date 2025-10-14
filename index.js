import{i as f,S as G,N as z,P as U,A as W,a as J}from"./assets/vendor-BqCDThHa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const X=document.querySelectorAll(".event-btn"),c=document.querySelector("#modal-backdrop"),H=document.body;X.forEach(e=>{e.addEventListener("click",()=>D(e.dataset.event))});function D(e){const t=`
    <div class="modal">
      <button type="button" class="modal-close" aria-label="Close modal">
        <svg width="16" height="16">
         <use href="./img/icons.svg#icon-x"></use>
        </svg>
      </button>
      <h2 class="modal-title">Register</h2>
      <h3 class="event-title">${e}</h3>
      <form class="modal-form" id="register-form" novalidate>
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
  `;c.innerHTML=t,c.classList.add("is-open"),H.classList.add("no-scroll");const o=c.querySelector(".modal-close"),i=c.querySelector("#register-form");o.addEventListener("click",C),c.addEventListener("click",_),window.addEventListener("keydown",V),i.addEventListener("submit",Z)}function C(){c.classList.remove("is-open"),H.classList.remove("no-scroll"),c.innerHTML="",window.removeEventListener("keydown",V),c.removeEventListener("click",_)}function _(e){e.target===c&&C()}function V(e){e.key==="Escape"&&C()}function Z(e){e.preventDefault();const t=e.target,o=t.elements.name,i=t.elements.email,s=o.value.trim(),n=i.value.trim();t.querySelectorAll("input, textarea").forEach(d=>ee(d)),t.querySelectorAll(".error-text").forEach(d=>d.remove());let a=!1;s||(B(o,"Name is required"),a=!0),n?te(n)||(B(i,"Please enter a valid email"),a=!0):(B(i,"Email is required"),a=!0),!a&&(f.success({message:"Registration successful!",position:"topRight",timeout:2500}),setTimeout(()=>C(),2500))}function B(e,t){e.classList.add("error"),e.dataset.originalPlaceholder||(e.dataset.originalPlaceholder=e.placeholder);const o=document.createElement("p");o.classList.add("error-text"),o.textContent=t,e.insertAdjacentElement("afterend",o)}function ee(e){e.classList.remove("error"),e.dataset.originalPlaceholder&&(e.placeholder=e.dataset.originalPlaceholder)}function te(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".events-swiper");e&&new G(e,{modules:[z,U],slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},pagination:{el:".ev-pagination",clickable:!0,renderBullet:(t,o)=>`<li class="${o}" aria-label="Go to slide ${t+1}"></li>`,bulletClass:"ev-dot",bulletActiveClass:"ev-dot--active"},navigation:{nextEl:".events-swiper-btn-next",prevEl:".events-swiper-btn-prev"},watchOverflow:!0})});const oe=document.querySelectorAll(".event-btn");oe.forEach(e=>{e.addEventListener("click",()=>D(e.dataset.event))});const u=document.querySelector("#modal-backdrop"),N=document.body;async function se(e){try{let a=function(){u.classList.remove("is-open"),N.classList.remove("no-scroll"),u.innerHTML="",window.removeEventListener("keydown",P),u.removeEventListener("click",d)},d=function(m){m.target===u&&a()},P=function(m){m.key==="Escape"&&a()};const o=await(await fetch(`https://books-backend.p.goit.global/books/${e}`)).json(),i=`
      <div class="modal">
        <button type="button" class="modal-close" aria-label="Close modal">
          <svg width="16" height="16">
            <use href="./src/img/icons-modal.svg#icon-close"></use>
          </svg>
        </button>

        <img src="${o.book_image||""}" alt="${o.title}" class="book-image"/>
        <h2 class="book-title">${o.title||"No title"}</h2>
        <p class="book-author">${o.author||"Unknown author"}</p>
        <p class="book-price">${o.price?`$${o.price}`:"N/A"}</p>

        <form class="quantity-form">
          <button type="button" class="decreaseQty">-</button>
          <input type="number" class="bookQty" value="1" min="1" />
          <button type="button" class="increaseQty">+</button>
        </form>

        <div class="buttons">
          <button type="button" class="addToCart">Add To Cart</button>
          <button type="submit" class="buyNow">Buy Now</button>
        </div>

        <div class="accordion">
          <div class="accordion-item">
            <button class="accordion-header">
              Details
              <svg class="accordion-icon" width="14" height="8">
                <use href="./src/img/icons-modal.svg#icon-down"></use>
              </svg>
            </button>
            <div class="accordion-body">${o.details||"No details available"}</div>
          </div>

          <div class="accordion-item">
            <button class="accordion-header">
              Shipping
              <svg class="accordion-icon" width="14" height="8">
                <use href="./src/img/icons-modal.svg#icon-down"></use>
              </svg>
            </button>
            <div class="accordion-body">${o.shipping||"No shipping info available"}</div>
          </div>

          <div class="accordion-item">
            <button class="accordion-header">
              Returns
              <svg class="accordion-icon" width="14" height="8">
                <use href="./src/img/icons-modal.svg#icon-down"></use>
              </svg>
            </button>
            <div class="accordion-body">${o.returns||"No return policy available"}</div>
          </div>
        </div>
      </div>
    `;u.innerHTML=i,u.classList.add("is-open"),N.classList.add("no-scroll");const s=u.querySelector(".modal");s.querySelector(".modal-close").addEventListener("click",a),u.addEventListener("click",d),window.addEventListener("keydown",P);const g=s.querySelector(".bookQty");s.querySelector(".increaseQty").addEventListener("click",()=>{g.value=parseInt(g.value)+1}),s.querySelector(".decreaseQty").addEventListener("click",()=>{parseInt(g.value)>1&&(g.value=parseInt(g.value)-1)}),s.querySelector(".addToCart").addEventListener("click",()=>{console.log(`Додано до кошика: ${g.value} шт.`),f.success({title:"Успіх",message:`Додано до кошика: ${g.value} шт.`,position:"topRight",timeout:2500})}),s.querySelector(".buyNow").addEventListener("click",m=>{m.preventDefault(),f.info({title:"Покупка",message:"Дякуємо за покупку",position:"topRight",timeout:2500}),setTimeout(()=>{a()},2500)}),new W(s.querySelector(".accordion"),{duration:300,showMultiple:!1}),s.querySelector(".accordion").addEventListener("click",m=>{const S=m.target.closest(".accordion-header");if(!S)return;const O=S.querySelector(".accordion-icon use"),I=S.nextElementSibling;setTimeout(()=>{I&&I.offsetHeight>0?O.setAttribute("href","./src/img/icons-modal.svg#icon-above"):O.setAttribute("href","./src/img/icons-modal.svg#icon-down")},310)})}catch(t){console.error("Error fetching book:",t),f.error({title:"Помилка",message:"Не вдалося завантажити книгу",position:"topRight",timeout:2500})}}const T="https://books-backend.p.goit.global",ne="/books/category-list",ie="/books/top-books",re="/books/category",ae=10,ce=24,r={categoryToggleBtn:document.querySelector("[data-category-list-toggle]"),categoryMenuContainer:document.querySelector("[data-category-list]"),categoryListElement:document.querySelector(".books-categories-list"),booksContainer:document.querySelector(".js-books-list"),showMoreBtn:document.querySelector(".books-show-more-btn"),booksShowingCount:document.querySelector(".books-showing-count")};let y=[],p="All categories",b=[],L=0,v=0;function M(){return window.innerWidth<768?ae:ce}async function $(e,t={}){try{const{data:o}=await J(e,t);return o}catch(o){throw f.error({title:"Error",titleColor:"#ffffff",message:`Request failed: <u>${o.message}</u>`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3,animateInside:!0,progressBar:!1,close:!1,closeOnClick:!0}),o}}async function le(){return(await $(`${T}${ne}`)).map(t=>t.list_name)}async function de(){return(await $(`${T}${ie}`)).flatMap(t=>t.books)}async function ue(e){const t={category:e};return await $(`${T}${re}`,{params:t})}function ge(e){const t=`
    <li class="books-categories-item">
      <a href="#" class="books-categories-list-link ${p==="All categories"?"active":""}">All categories</a>
    </li>
  `,o=e.filter(i=>i!=="All categories").map(i=>`
        <li class="books-categories-item">
          <a href="#" class="books-categories-list-link ${i===p?"active":""}">${i}</a>
        </li>
      `).join("");return t+o}function me(e){return e.length===0?'<li class="no-books-message">No books found for this category.</li>':e.map(({book_image:t,title:o,author:i,price:s,_id:n})=>`
        <li class="books-card" data-book-id="${n}">
            <img class="books-card-img" src="${t}" alt="${o}"/>
            <div class="books-info">
                <div class="books-info-left">
                   <h4 class="books-h section-subtitle">${o}</h4>
                   <p class="books-text">${i}</p>
                   
                </div>
                <p class="books-price-text">$${s}</p>
            </div>
            <button class="learn-more-btn" type="button" data-book-modal-open data-book-id="${n}">Learn more</button>
        </li>
    `).join("")}function Y(){r.categoryListElement.innerHTML=ge(y),r.categoryListElement.querySelectorAll(".books-categories-list-link").forEach(e=>{e.addEventListener("click",be)})}async function K(){r.booksContainer.innerHTML="",r.showMoreBtn.classList.add("show-more-hidden"),p==="All categories"?b=await de():b=await ue(p),L=0,v=0,q()}function q(e=M()){const t=L*e,o=Math.min(t+e,b.length),i=b.slice(t,o);r.booksContainer.insertAdjacentHTML("beforeend",me(i)),v=o,r.booksShowingCount.textContent=`Showing ${v} of ${b.length}`,L++,v<b.length?r.showMoreBtn.classList.remove("show-more-hidden"):r.showMoreBtn.classList.add("show-more-hidden")}function fe(){const e=r.categoryMenuContainer.classList.toggle("is-open");r.categoryToggleBtn.classList.toggle("is-open"),e&&w()}async function be(e){e.preventDefault();const t=e.target.textContent;if(p===t){r.categoryMenuContainer.classList.remove("is-open"),r.categoryToggleBtn.classList.remove("is-open");return}p=t,Y(),await K(),r.categoryMenuContainer.classList.remove("is-open"),r.categoryToggleBtn.classList.remove("is-open")}async function pe(e){const t=e.target.closest(".learn-more-btn");if(!t)return;const o=t.dataset.bookId;if(o)try{await se(o)}catch(i){f.error({title:"Error",message:"Failed to load book details. Please try again later.",position:"topRight",timeout:2500}),console.error("Failed to open book modal:",i)}finally{t.disabled=!1}}async function ye(){r.showMoreBtn.disabled=!0;try{q(4)}catch(e){f.error({title:"Error",message:`Failed to load books: ${e.message}`,backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}finally{r.showMoreBtn.disabled=!1}}async function ve(){y=await le(),y.includes("All categories")||(y=["All categories",...y]),Y(),r.categoryToggleBtn.firstChild.textContent="Categories ",await K();let e=M();window.addEventListener("resize",()=>{const t=M();t!==e&&(e=t,r.booksContainer.innerHTML="",L=0,v=0,q(t))})}const k=r.categoryListElement,E=document.querySelector(".books-categories-scrollbar-thumb");function w(){const{scrollTop:e,scrollHeight:t,clientHeight:o}=k,i=o/t,s=Math.max(i*o,24),n=o-s,a=e/(t-o)*n||0;E.style.height=s+"px",E.style.top=a+"px"}k.addEventListener("scroll",w);window.addEventListener("resize",w);w();let A=!1,j=0,Q=0;E.addEventListener("mousedown",e=>{A=!0,j=e.clientY,Q=k.scrollTop,document.body.style.userSelect="none"});document.addEventListener("mousemove",e=>{if(!A)return;const{scrollHeight:t,clientHeight:o}=k,i=t-o,s=E.offsetHeight,n=o-s,d=(e.clientY-j)/n*i;k.scrollTop=Q+d,w()});document.addEventListener("mouseup",()=>{A=!1,document.body.style.userSelect=""});r.categoryToggleBtn.addEventListener("click",fe);r.booksContainer.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");t&&(t.blur(),pe(e))});r.showMoreBtn.addEventListener("click",ye);window.addEventListener("click",function(e){!r.categoryToggleBtn.contains(e.target)&&!r.categoryMenuContainer.contains(e.target)&&(r.categoryMenuContainer.classList.remove("is-open"),r.categoryToggleBtn.classList.remove("is-open"))});document.addEventListener("DOMContentLoaded",ve);document.addEventListener("DOMContentLoaded",()=>{const e=new Swiper("#feedbacks-slider",{slidesPerView:1,spaceBetween:24,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},watchOverflow:!0,navigation:{nextEl:".btn-next",prevEl:".btn-prev",disabledClass:"is-disabled",lockClass:"is-locked"},pagination:{el:".slider-dots",clickable:!0,bulletClass:"dot",bulletActiveClass:"dot--active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}}),t=document.querySelector(".btn-prev"),o=document.querySelector(".btn-next");function i(){if(t){const n=t.classList.contains("is-disabled");t.toggleAttribute("disabled",n),t.setAttribute("aria-disabled",String(n))}if(o){const n=o.classList.contains("is-disabled");o.toggleAttribute("disabled",n),o.setAttribute("aria-disabled",String(n))}}e.on("init",i),e.on("slideChange",i),e.on("reachBeginning",i),e.on("reachEnd",i),e.on("fromEdge",i),i();function s(n){n.key==="ArrowLeft"&&(n.preventDefault(),t?.click()),n.key==="ArrowRight"&&(n.preventDefault(),o?.click())}t?.addEventListener("keydown",s),o?.addEventListener("keydown",s)});new Swiper(".hero-swiper",{loop:!1,speed:400,slidesPerView:1,wrapperClass:"hero-swiper-wrapper",slideClass:"hero-slide",navigation:{nextEl:".hero-right-btn",prevEl:".hero-left-btn"}});const l=document.querySelector("[data-menu]"),h=document.querySelector("[data-menu-open]"),R=document.querySelector("[data-menu-close]"),he=document.querySelectorAll(".menu-nav-link"),F=e=>{document.body&&(document.body.style.overflow=e?"hidden":"")};h&&l&&h.addEventListener("click",()=>{l.classList.add("is-open"),l.removeAttribute("hidden"),F(!0),h.style.display="none"});const x=()=>{l&&(l.classList.remove("is-open"),l.setAttribute("hidden",""),F(!1),h&&(h.style.display="flex"))};R&&R.addEventListener("click",x);l&&l.addEventListener("click",e=>{e.target===l&&x()});he.forEach(e=>{e.addEventListener("click",x)});
//# sourceMappingURL=index.js.map
