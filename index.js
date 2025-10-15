import{S as H,N as V,P as _,i as m,A as j,a as Y}from"./assets/vendor-BqCDThHa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".events-swiper");e&&new H(e,{modules:[V,_],slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},pagination:{el:".ev-pagination",clickable:!0,renderBullet:(t,o)=>`<li class="${o}" aria-label="Go to slide ${t+1}"></li>`,bulletClass:"ev-dot",bulletActiveClass:"ev-dot--active"},navigation:{nextEl:".events-swiper-btn-next",prevEl:".events-swiper-btn-prev"},watchOverflow:!0})});const g=document.getElementById("modal-backdrop");function K(e){let t=document.querySelector(".modal");t?t.querySelector(".event-title").textContent=e:(t=document.createElement("div"),t.classList.add("modal"),t.innerHTML=`
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
        `,g.appendChild(t),t.querySelector(".modal-close").addEventListener("click",$)),g.classList.add("is-open"),document.body.classList.add("no-scroll"),g.addEventListener("click",function o(s){s.target===g&&$(),g.removeEventListener("click",o)})}function $(){g.classList.remove("is-open"),document.body.classList.remove("no-scroll")}const Q=document.querySelectorAll(".event-register-btn");Q.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.event;K(t)})});(function(){const e=document.querySelector(".form");if(!e)return;const t=e.querySelector(".join-input"),o=e.querySelector(".join-btn");if(!t||!o)return;let s=t.closest(".input-wrap");s||(s=document.createElement("div"),s.className="input-wrap",t.parentNode.insertBefore(s,t),s.appendChild(t));let n=s.querySelector(".join-error");n||(n=document.createElement("p"),n.className="join-error",n.textContent="Error text",s.appendChild(n)),o.addEventListener("click",i=>{i.preventDefault(),s.classList.add("validated"),t.checkValidity()?(t.setAttribute("aria-invalid","false"),s.classList.remove("validated")):(t.setAttribute("aria-invalid","true"),t.reportValidity&&t.reportValidity(),t.focus())}),t.addEventListener("input",()=>{(t.value.trim()===""||t.checkValidity())&&(t.setAttribute("aria-invalid","false"),s.classList.remove("validated"))})})();const d=document.querySelector("#books-modal-backdrop"),A=document.body;async function F(e){try{let a=function(){d.classList.remove("is-open"),A.classList.remove("no-scroll"),d.innerHTML="",window.removeEventListener("keydown",T),d.removeEventListener("click",c)},c=function(v){v.target===d&&a()},T=function(v){v.key==="Escape"&&a()};const o=await(await fetch(`https://books-backend.p.goit.global/books/${e}`)).json(),s=`
      <div class="modal">
        <button type="button" class="close-btn" aria-label="Close modal">
          <svg width="16" height="16">
            <use href="../img/icons-modal.svg#icon-close"></use>
          </svg>
        </button>
        <div class="modal-body">
          <img src="${o.book_image||""}" alt="${o.title}" class="book-image"/>
          <div class="modal-content">
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
          </div>
        </div>

        <div class="accordion-container">
          <div class="ac">
            <h2 class="ac-header">
              <button class="ac-trigger">
                Details
                <svg class="accordion-icon" width="14" height="8">
                  <use href="./img/icons-modal.svg#icon-down"></use>
                </svg>
              </button>
            </h2>
            <div class="ac-panel">
              <p>${o.details||"No details available"}</p>
            </div>
          </div>

          <div class="ac">
            <h2 class="ac-header">
              <button class="ac-trigger">
                Shipping
                <svg class="accordion-icon" width="14" height="8">
                  <use href="./img/icons-modal.svg#icon-down"></use>
                </svg>
              </button>
            </h2>
            <div class="ac-panel">
              <p>${o.shipping||"No shipping info available"}</p>
            </div>
          </div>

          <div class="ac">
            <h2 class="ac-header">
              <button class="ac-trigger">
                Returns
                <svg class="accordion-icon" width="14" height="8">
                  <use href="./img/icons-modal.svg#icon-down"></use>
                </svg>
              </button>
            </h2>
            <div class="ac-panel">
              <p>${o.returns||"No return policy available"}</p>
            </div>
          </div>
        </div>
      </div>
    `;d.innerHTML=s,d.classList.add("is-open"),A.classList.add("no-scroll");const n=d.querySelector(".modal");n.querySelector(".close-btn").addEventListener("click",a),d.addEventListener("click",c),window.addEventListener("keydown",T);const u=n.querySelector(".bookQty");n.querySelector(".increaseQty").addEventListener("click",()=>{u.value=parseInt(u.value)+1}),n.querySelector(".decreaseQty").addEventListener("click",()=>{parseInt(u.value)>1&&(u.value=parseInt(u.value)-1)}),n.querySelector(".addToCart").addEventListener("click",()=>{console.log(`Додано до кошика: ${u.value} шт.`),m.success({title:"Успіх",message:`Додано до кошика: ${u.value} шт.`,position:"topRight",timeout:2500})}),n.querySelector(".buyNow").addEventListener("click",v=>{v.preventDefault(),m.info({title:"Покупка",message:"Дякуємо за покупку",position:"topRight",timeout:2500}),setTimeout(()=>{a()},2500)}),new j(n.querySelector(".accordion-container"),{duration:300,showMultiple:!0})}catch(t){console.error("Error fetching book:",t),m.error({title:"Помилка",message:"Не вдалося завантажити книгу",position:"topRight",timeout:2500})}}const S="https://books-backend.p.goit.global",G="/books/category-list",z="/books/top-books",U="/books/category",W=10,J=24,r={categoryToggleBtn:document.querySelector("[data-category-list-toggle]"),categoryMenuContainer:document.querySelector("[data-category-list]"),categoryListElement:document.querySelector(".books-categories-list"),booksContainer:document.querySelector(".js-books-list"),showMoreBtn:document.querySelector(".books-show-more-btn"),booksShowingCount:document.querySelector(".books-showing-count")};let y=[],f="All categories",p=[],b=0;function C(){return window.innerWidth<768?W:J}async function B(e,t={}){try{const{data:o}=await Y(e,t);return o}catch(o){throw m.error({title:"Error",titleColor:"#ffffff",message:`Request failed: <u>${o.message}</u>`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3,animateInside:!0,progressBar:!1,close:!1,closeOnClick:!0}),o}}async function X(){return(await B(`${S}${G}`)).map(t=>t.list_name)}async function Z(){return(await B(`${S}${z}`)).flatMap(t=>t.books)}async function ee(e){const t={category:e};return await B(`${S}${U}`,{params:t})}function te(e){const t=`
    <li class="books-categories-item">
      <a href="#" class="books-categories-list-link ${f==="All categories"?"active":""}">All categories</a>
    </li>
  `,o=e.filter(s=>s!=="All categories").map(s=>`
        <li class="books-categories-item">
          <a href="#" class="books-categories-list-link ${s===f?"active":""}">${s}</a>
        </li>
      `).join("");return t+o}function oe(e){return e.length===0?'<li class="no-books-message">No books found for this category.</li>':e.map(({book_image:t,title:o,author:s,price:n,_id:i})=>`
        <li class="books-card" data-book-id="${i}">
            <img class="books-card-img" src="${t}" alt="${o}"/>
            <div class="books-info">
                <div class="books-info-left">
                   <h4 class="books-h section-subtitle">${o}</h4>
                   <p class="books-text">${s}</p>
                   
                </div>
                <p class="books-price-text">$${n}</p>
            </div>
            <button class="learn-more-btn" type="button" data-book-modal-open data-book-id="${i}">Learn more</button>
        </li>
    `).join("")}function x(){r.categoryListElement.innerHTML=te(y),r.categoryListElement.querySelectorAll(".books-categories-list-link").forEach(e=>{e.addEventListener("click",ne)})}async function P(){r.booksContainer.innerHTML="",r.showMoreBtn.classList.add("show-more-hidden"),f==="All categories"?p=await Z():p=await ee(f),b=0,M()}function M(e=C()){const t=b,o=Math.min(t+e,p.length),s=p.slice(t,o);r.booksContainer.insertAdjacentHTML("beforeend",oe(s)),b=o,r.booksShowingCount.textContent=`Showing ${b} of ${p.length}`,b<p.length?r.showMoreBtn.classList.remove("show-more-hidden"):r.showMoreBtn.classList.add("show-more-hidden")}function se(){const e=r.categoryMenuContainer.classList.toggle("is-open");r.categoryToggleBtn.classList.toggle("is-open"),e&&k()}async function ne(e){e.preventDefault();const t=e.target.textContent;if(f===t){r.categoryMenuContainer.classList.remove("is-open"),r.categoryToggleBtn.classList.remove("is-open");return}f=t,x(),await P(),r.categoryMenuContainer.classList.remove("is-open"),r.categoryToggleBtn.classList.remove("is-open")}async function ie(e){const t=e.target.closest(".learn-more-btn");if(!t)return;const o=t.dataset.bookId;if(o)try{await F(o)}catch(s){m.error({title:"Error",message:"Failed to load book details. Please try again later.",position:"topRight",timeout:2500}),console.error("Failed to open book modal:",s)}finally{t.disabled=!1}}async function re(){r.showMoreBtn.disabled=!0;try{M(4)}catch(e){m.error({title:"Error",message:`Failed to load books: ${e.message}`,backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}finally{r.showMoreBtn.disabled=!1}}async function ae(){y=await X(),y.includes("All categories")||(y=["All categories",...y]),x(),r.categoryToggleBtn.firstChild.textContent="Categories ",await P();let e=C();window.addEventListener("resize",()=>{const t=C();t!==e&&(e=t,r.booksContainer.innerHTML="",b=0,M(t))})}const h=r.categoryListElement,L=document.querySelector(".books-categories-scrollbar-thumb");function k(){const{scrollTop:e,scrollHeight:t,clientHeight:o}=h,s=o/t,n=Math.max(s*o,24),i=o-n,a=e/(t-o)*i||0;L.style.height=n+"px",L.style.top=a+"px"}h.addEventListener("scroll",k);window.addEventListener("resize",k);k();let q=!1,O=0,N=0;L.addEventListener("mousedown",e=>{q=!0,O=e.clientY,N=h.scrollTop,document.body.style.userSelect="none"});document.addEventListener("mousemove",e=>{if(!q)return;const{scrollHeight:t,clientHeight:o}=h,s=t-o,n=L.offsetHeight,i=o-n,c=(e.clientY-O)/i*s;h.scrollTop=N+c,k()});document.addEventListener("mouseup",()=>{q=!1,document.body.style.userSelect=""});r.categoryToggleBtn.addEventListener("click",se);r.booksContainer.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");t&&(t.blur(),ie(e))});r.showMoreBtn.addEventListener("click",re);window.addEventListener("click",function(e){!r.categoryToggleBtn.contains(e.target)&&!r.categoryMenuContainer.contains(e.target)&&(r.categoryMenuContainer.classList.remove("is-open"),r.categoryToggleBtn.classList.remove("is-open"))});document.addEventListener("DOMContentLoaded",ae);document.addEventListener("DOMContentLoaded",()=>{const e=new Swiper("#feedbacks-slider",{slidesPerView:1,spaceBetween:24,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},watchOverflow:!0,navigation:{nextEl:".btn-next",prevEl:".btn-prev",disabledClass:"is-disabled",lockClass:"is-locked"},pagination:{el:".slider-dots",clickable:!0,bulletClass:"dot",bulletActiveClass:"dot--active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}}),t=document.querySelector(".btn-prev"),o=document.querySelector(".btn-next");function s(){if(t){const i=t.classList.contains("is-disabled");t.toggleAttribute("disabled",i),t.setAttribute("aria-disabled",String(i))}if(o){const i=o.classList.contains("is-disabled");o.toggleAttribute("disabled",i),o.setAttribute("aria-disabled",String(i))}}e.on("init",s),e.on("slideChange",s),e.on("reachBeginning",s),e.on("reachEnd",s),e.on("fromEdge",s),s();function n(i){i.key==="ArrowLeft"&&(i.preventDefault(),t?.click()),i.key==="ArrowRight"&&(i.preventDefault(),o?.click())}t?.addEventListener("keydown",n),o?.addEventListener("keydown",n)});new Swiper(".hero-swiper",{loop:!1,speed:400,slidesPerView:1,wrapperClass:"hero-swiper-wrapper",slideClass:"hero-slide",navigation:{nextEl:".hero-right-btn",prevEl:".hero-left-btn"}});(()=>{const e={menu:document.querySelector("[data-menu]"),openBtn:document.querySelector("[data-menu-open]"),closeBtn:document.querySelector("[data-menu-close]")},t=()=>{const o=e.menu.classList.toggle("is-open");document.body.style.overflow=o?"hidden":""};e.openBtn&&e.openBtn.addEventListener("click",t),e.closeBtn&&e.closeBtn.addEventListener("click",t),e.menu.addEventListener("click",o=>{o.target.closest("a")&&(e.menu.classList.remove("is-open"),document.body.style.overflow="")})})();const le=document.querySelectorAll(".event-btn"),l=document.querySelector("#modal-backdrop"),I=document.body;le.forEach(e=>{e.addEventListener("click",()=>ce(e.dataset.event))});function ce(e){const t=`
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
  `;l.innerHTML=t,l.classList.add("is-open"),I.classList.add("no-scroll");const o=l.querySelector(".modal-close"),s=l.querySelector("#register-form");o.addEventListener("click",w),l.addEventListener("click",R),window.addEventListener("keydown",D),s.addEventListener("submit",de)}function w(){l.classList.remove("is-open"),I.classList.remove("no-scroll"),l.innerHTML="",window.removeEventListener("keydown",D),l.removeEventListener("click",R)}function R(e){e.target===l&&w()}function D(e){e.key==="Escape"&&w()}function de(e){e.preventDefault();const t=e.target,o=t.elements.name,s=t.elements.email,n=o.value.trim(),i=s.value.trim();t.querySelectorAll("input, textarea").forEach(c=>ue(c)),t.querySelectorAll(".error-text").forEach(c=>c.remove());let a=!1;n||(E(o,"Name is required"),a=!0),i?me(i)||(E(s,"Please enter a valid email"),a=!0):(E(s,"Email is required"),a=!0),!a&&(m.success({message:"Registration successful!",position:"topRight",timeout:2500}),setTimeout(()=>w(),2500))}function E(e,t){e.classList.add("error"),e.dataset.originalPlaceholder||(e.dataset.originalPlaceholder=e.placeholder);const o=document.createElement("p");o.classList.add("error-text"),o.textContent=t,e.insertAdjacentElement("afterend",o)}function ue(e){e.classList.remove("error"),e.dataset.originalPlaceholder&&(e.placeholder=e.dataset.originalPlaceholder)}function me(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=index.js.map
