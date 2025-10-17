import{i as c,A as H,a as A,S as V,N as Y,P as K,K as F}from"./assets/vendor-Dq1_fzaD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const L=new URL("/codeV1be-js/assets/icons-m-iaAyZR.svg",import.meta.url).href,U="https://books-backend.p.goit.global",z="/books/",i={backdrop:document.querySelector(".js-book-modal-backdrop"),modal:document.querySelector(".js-book-modal"),closeBtn:document.querySelector(".js-book-modal-close-btn"),modalContent:document.querySelector(".js-book-modal-content")};let S=null;async function G(e){if(!i.backdrop||!i.modal||!i.closeBtn||!i.modalContent){c.error({title:"Error",message:"Error loading modal window.",position:"topRight",timeout:4e3});return}try{const t=await Z(e);S=t,J(t);const o=i.modalContent.querySelector(".book-details-accordion-container");o&&new H(o,{showMultiple:!0}),i.backdrop.classList.add("is-open"),i.modal.classList.add("is-open"),document.body.classList.add("no-scroll"),i.closeBtn.addEventListener("click",v),i.backdrop.addEventListener("click",x),document.addEventListener("keydown",P)}catch{c.error({title:"Error",message:"Could not load book details. Please try again later.",position:"topRight",timeout:4e3})}}function v(){!i.backdrop||!i.modal||!i.closeBtn||!i.modalContent||(i.backdrop.classList.remove("is-open"),i.modal.classList.remove("is-open"),document.body.classList.remove("no-scroll"),i.closeBtn.removeEventListener("click",v),i.backdrop.removeEventListener("click",x),document.removeEventListener("keydown",P),i.modalContent.innerHTML="",S=null)}function x(e){e.target===i.backdrop&&v()}function P(e){e.key==="Escape"&&v()}async function W(e,t={}){try{const{data:o}=await A(e,t);return o}catch(o){throw c.error({title:"Error",titleColor:"#ffffff",message:`The request failed: <u>${o.message}</u>`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3,animateInside:!0,progressBar:!1,close:!1,closeOnClick:!0}),o}}async function Z(e){return await W(`${U}${z}${e}`)}function J(e){const t=`
    <div class="book-modal-details-wrapper">
      <img class="book-modal-img" src="${e.book_image}" alt="${e.title}" loading="lazy"/>
      <div class="book-modal-info">
        <h2 class="book-modal-title">${e.title}</h2>
        <p class="book-modal-author">${e.author}</p>
       <p class="book-modal-price">$${e.price!==void 0&&e.price!==null?Number(e.price).toFixed(2):"The price is not specified."}</p>

        <form class="book-modal-order-form">
          <div class="quantity-selector">
            <button type="button" class="quantity-btn" data-action="decrement">-</button>
            <input type="number" class="quantity-input" value="1" min="1" max="99" aria-label="Number of books" disabled>
            <button type="button" class="quantity-btn" data-action="increment">+</button>
          </div>
          <div class="book-modal-buttons">
            <button type="button" class="add-to-cart-btn" data-book-id="${e._id}">Add To Cart</button>
            <button type="submit" class="buy-now-btn" data-book-id="${e._id}">Buy Now</button>
          </div>
        </form>
        <div class="book-details-accordion-container">
      <div class="ac">
        <h3 class="ac-header">
          <button type="button" class="ac-trigger">Details
             <svg class="books-arrow-icon" width="24" height="24">
               <use href="${L}#icon-arrow-dwn"></use>
             </svg>
          </button>
        </h3>
        <div class="ac-panel">
          <p class="ac-text">${e.description||"No additional information available.."}</p>
        </div>
      </div>

      <div class="ac">
        <h3 class="ac-header">
          <button type="button" class="ac-trigger">Shipping
            <svg class="books-arrow-icon" width="24" height="24">
               <use href="${L}#icon-arrow-dwn"></use>
             </svg>
          </button>
        </h3>
        <div class="ac-panel">
          <p class="ac-text">We ship across the United States within 2–5 business days. All orders are processed through USPS or a reliable courier service. Enjoy free standard shipping on orders over $50.</p>
        </div>
      </div>

      <div class="ac">
        <h3 class="ac-header">
          <button type="button" class="ac-trigger">Returns
            <svg class="books-arrow-icon" width="24" height="24">
               <use href="${L}#icon-arrow-dwn"></use>
             </svg>
          </button>
        </h3>
        <div class="ac-panel">
          <p class="ac-text">You can return an item within 14 days of receiving your order, provided it hasn’t been used and is in its original condition. To start a return, please contact our support team — we’ll guide you through the process quickly and hassle-free.</p>
        </div>
      </div>
    </div>

      </div>
       
   
    </div>
  `;i.modalContent.innerHTML=t;const o=i.modalContent.querySelector(".book-modal-order-form");o&&(o.addEventListener("click",Q),o.addEventListener("submit",X))}function Q(e){const t=e.target,o=i.modalContent.querySelector(".quantity-input");if(!o)return;let s=parseInt(o.value);t.dataset.action==="decrement"?s=Math.max(1,s-1):t.dataset.action==="increment"&&(s=Math.min(99,s+1)),o.value=s,t.classList.contains("add-to-cart-btn")&&(t.disabled=!0,(async()=>{try{await new Promise(n=>setTimeout(n,4e3)),c.success({title:"Success!",message:`"${S.title}" (${s} pcs.) added to cart!`,position:"topRight",timeout:4e3})}catch{c.error({title:"Error",message:"Could not add to cart.",position:"topRight"})}finally{t.disabled=!1}})())}function X(e){e.preventDefault(),c.success({message:"Thank you for your purchase!",position:"topRight",timeout:4e3}),v()}const B="https://books-backend.p.goit.global",ee="/books/category-list",te="/books/top-books",oe="/books/category",se=10,ne=24,a={categoryToggleBtn:document.querySelector("[data-category-list-toggle]"),categoryMenuContainer:document.querySelector("[data-category-list]"),categoryListElement:document.querySelector(".books-categories-list"),booksContainer:document.querySelector(".js-books-list"),showMoreBtn:document.querySelector(".books-show-more-btn"),booksShowingCount:document.querySelector(".books-showing-count")};let b=[],u="All categories",p=[],f=0;function C(){return window.innerWidth<768?se:ne}async function $(e,t={}){try{const{data:o}=await A(e,t);return o}catch(o){throw c.error({title:"Error",titleColor:"#ffffff",message:`Request failed: <u>${o.message}</u>`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3,animateInside:!0,progressBar:!1,close:!1,closeOnClick:!0}),o}}async function re(){return(await $(`${B}${ee}`)).map(t=>t.list_name)}async function ae(){return(await $(`${B}${te}`)).flatMap(t=>t.books)}async function ie(e){const t={category:e};return await $(`${B}${oe}`,{params:t})}function le(e){const t=`
    <li class="books-categories-item">
      <a href="#" class="books-categories-list-link ${u==="All categories"?"active":""}">All categories</a>
    </li>
  `,o=e.filter(s=>s!=="All categories"&&s&&s.trim()!=="").map(s=>`
        <li class="books-categories-item">
          <a href="#" class="books-categories-list-link ${s===u?"active":""}">${s}</a>
        </li>
      `).join("");return t+o}function ce(e){return e.length===0?'<li class="no-books-message">No books found for this category.</li>':e.map(({book_image:t,title:o,author:s,price:n,_id:r})=>`
        <li class="books-card" data-book-id="${r}">
            <img class="books-card-img" src="${t}" alt="${o}"/>
            <div class="books-info">
                <div class="books-info-left">
                   <h4 class="books-h section-subtitle">${o}</h4>
                   <p class="books-text">${s}</p>
                   
                </div>
                <p class="books-price-text">$${n}</p>
            </div>
            <button class="learn-more-btn" type="button" data-book-modal-open data-book-id="${r}">Learn more</button>
        </li>
    `).join("")}function O(){a.categoryListElement.innerHTML=le(b),a.categoryListElement.querySelectorAll(".books-categories-list-link").forEach(e=>{e.addEventListener("click",ue)})}async function R(){a.booksContainer.innerHTML="",a.showMoreBtn.classList.add("show-more-hidden"),u==="All categories"?p=await ae():p=await ie(u),f=0,q()}function q(e=C()){const t=f,o=Math.min(t+e,p.length),s=p.slice(t,o);a.booksContainer.insertAdjacentHTML("beforeend",ce(s)),f=o,a.booksShowingCount.textContent=`Showing ${f} of ${p.length}`,f<p.length?a.showMoreBtn.classList.remove("show-more-hidden"):a.showMoreBtn.classList.add("show-more-hidden")}function de(){const e=a.categoryMenuContainer.classList.toggle("is-open");a.categoryToggleBtn.classList.toggle("is-open"),e&&h()}async function ue(e){e.preventDefault();const t=e.target.textContent;if(u===t){a.categoryMenuContainer.classList.remove("is-open"),a.categoryToggleBtn.classList.remove("is-open");return}u=t,O(),await R(),a.categoryToggleBtn.querySelector(".books-categories-btn-text").textContent=u,a.categoryMenuContainer.classList.remove("is-open"),a.categoryToggleBtn.classList.remove("is-open")}async function me(e){const t=e.target.closest(".learn-more-btn");if(!t)return;const o=t.dataset.bookId;if(o)try{await G(o)}catch(s){c.error({title:"Error",message:"Failed to load book details. Please try again later.",position:"topRight",timeout:2500}),console.error("Failed to open book modal:",s)}finally{t.disabled=!1}}async function pe(){a.showMoreBtn.disabled=!0;try{q(4)}catch(e){c.error({title:"Error",message:`Failed to load books: ${e.message}`,backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}finally{a.showMoreBtn.disabled=!1}}async function fe(){b=await re(),b.includes("All categories")||(b=["All categories",...b]),O(),await R();let e=C();window.addEventListener("resize",()=>{const t=C();t!==e&&(e=t,a.booksContainer.innerHTML="",f=0,q(t))})}const y=a.categoryListElement,k=document.querySelector(".books-categories-scrollbar-thumb");function h(){const{scrollTop:e,scrollHeight:t,clientHeight:o}=y,s=o/t,n=Math.max(s*o,24),r=o-n,l=e/(t-o)*r||0;k.style.height=n+"px",k.style.top=l+"px"}y.addEventListener("scroll",h);window.addEventListener("resize",h);h();let M=!1,D=0,I=0;k.addEventListener("mousedown",e=>{M=!0,D=e.clientY,I=y.scrollTop,document.body.style.userSelect="none"});document.addEventListener("mousemove",e=>{if(!M)return;const{scrollHeight:t,clientHeight:o}=y,s=t-o,n=k.offsetHeight,r=o-n,g=(e.clientY-D)/r*s;y.scrollTop=I+g,h()});document.addEventListener("mouseup",()=>{M=!1,document.body.style.userSelect=""});a.categoryToggleBtn.addEventListener("click",de);a.booksContainer.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");t&&(t.blur(),me(e))});a.showMoreBtn.addEventListener("click",pe);window.addEventListener("click",function(e){!a.categoryToggleBtn.contains(e.target)&&!a.categoryMenuContainer.contains(e.target)&&(a.categoryMenuContainer.classList.remove("is-open"),a.categoryToggleBtn.classList.remove("is-open"))});document.addEventListener("DOMContentLoaded",fe);document.addEventListener("DOMContentLoaded",()=>{const e=new Swiper("#feedbacks-slider",{slidesPerView:1,spaceBetween:24,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},watchOverflow:!0,navigation:{nextEl:".btn-next",prevEl:".btn-prev",disabledClass:"is-disabled",lockClass:"is-locked"},pagination:{el:".slider-dots",clickable:!0,bulletClass:"dot",bulletActiveClass:"dot--active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}}),t=document.querySelector(".btn-prev"),o=document.querySelector(".btn-next");function s(){if(t){const r=t.classList.contains("is-disabled");t.toggleAttribute("disabled",r),t.setAttribute("aria-disabled",String(r))}if(o){const r=o.classList.contains("is-disabled");o.toggleAttribute("disabled",r),o.setAttribute("aria-disabled",String(r))}}e.on("init",s),e.on("slideChange",s),e.on("reachBeginning",s),e.on("reachEnd",s),e.on("fromEdge",s),s();function n(r){r.key==="ArrowLeft"&&(r.preventDefault(),t?.click()),r.key==="ArrowRight"&&(r.preventDefault(),o?.click())}t?.addEventListener("keydown",n),o?.addEventListener("keydown",n)});new Swiper(".hero-swiper",{loop:!0,autoplay:{delay:8e3},speed:400,slidesPerView:1,keyboard:{enabled:!0},wrapperClass:"hero-swiper-wrapper",slideClass:"hero-slide",navigation:{nextEl:".hero-right-btn",prevEl:".hero-left-btn"}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".events-swiper");e&&new V(e,{modules:[Y,K,F],slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},pagination:{el:".ev-pagination",clickable:!0,renderBullet:(t,o)=>`<li class="${o}" aria-label="Go to slide ${t+1}"></li>`,bulletClass:"ev-dot",bulletActiveClass:"ev-dot--active"},navigation:{nextEl:".events-swiper-btn-next",prevEl:".events-swiper-btn-prev"},keyboard:{enabled:!0},watchOverflow:!0})});const m=document.getElementById("modal-backdrop");function ge(e){let t=document.querySelector(".modal");t?t.querySelector(".event-title").textContent=e:(t=document.createElement("div"),t.classList.add("modal"),t.innerHTML=`
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
        `,m.appendChild(t),t.querySelector(".modal-close").addEventListener("click",T)),m.classList.add("is-open"),document.body.classList.add("no-scroll"),m.addEventListener("click",function o(s){s.target===m&&T(),m.removeEventListener("click",o)})}function T(){m.classList.remove("is-open"),document.body.classList.remove("no-scroll")}const be=document.querySelectorAll(".event-register-btn");be.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.event;ge(t)})});(()=>{const e={menu:document.querySelector("[data-menu]"),openBtn:document.querySelector("[data-menu-open]"),closeBtn:document.querySelector("[data-menu-close]")},t=()=>{const o=e.menu.classList.toggle("is-open");document.body.style.overflow=o?"hidden":""};e.openBtn&&e.openBtn.addEventListener("click",t),e.closeBtn&&e.closeBtn.addEventListener("click",t),e.menu.addEventListener("click",o=>{o.target.closest("a")&&(e.menu.classList.remove("is-open"),document.body.style.overflow="")})})();(function(){const e=document.querySelector(".form");if(!e)return;const t=e.querySelector(".join-input"),o=e.querySelector(".join-btn");if(!t||!o)return;let s=t.closest(".input-wrap");s||(s=document.createElement("div"),s.className="input-wrap",t.parentNode.insertBefore(s,t),s.appendChild(t));let n=s.querySelector(".join-error");n||(n=document.createElement("p"),n.className="join-error",n.textContent="Error text",s.appendChild(n)),o.addEventListener("click",r=>{r.preventDefault(),s.classList.add("validated"),t.checkValidity()?(t.setAttribute("aria-invalid","false"),s.classList.remove("validated"),c.success({message:"Registration success"})):(t.setAttribute("aria-invalid","true"),t.reportValidity&&t.reportValidity(),t.focus())}),t.addEventListener("input",()=>{(t.value.trim()===""||t.checkValidity())&&(t.setAttribute("aria-invalid","false"),s.classList.remove("validated"))})})();const ye=new URL("/codeV1be-js/assets/icons-m-iaAyZR.svg",import.meta.url).href,ve=document.querySelectorAll(".event-btn"),d=document.querySelector("#modal-backdrop"),N=document.body;ve.forEach(e=>{e.addEventListener("click",()=>he(e.dataset.event))});function he(e){const t=`
    <div class="modal">
      <button type="button" class="modal-close" aria-label="Close modal">
        <svg width="32" height="32">
         <use href="${ye}#icon-x"></use>
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
  `;d.innerHTML=t,d.classList.add("is-open"),N.classList.add("no-scroll");const o=d.querySelector(".modal-close"),s=d.querySelector("#register-form");o.addEventListener("click",w),d.addEventListener("click",_),window.addEventListener("keydown",j),s.addEventListener("submit",ke)}function w(){d.classList.remove("is-open"),N.classList.remove("no-scroll"),d.innerHTML="",window.removeEventListener("keydown",j),d.removeEventListener("click",_)}function _(e){e.target===d&&w()}function j(e){e.key==="Escape"&&w()}function ke(e){e.preventDefault();const t=e.target,o=t.elements.name,s=t.elements.email,n=o.value.trim(),r=s.value.trim();t.querySelectorAll("input, textarea").forEach(g=>we(g)),t.querySelectorAll(".error-text").forEach(g=>g.remove());let l=!1;n||(E(o,"Name is required"),l=!0),r?Le(r)||(E(s,"Please enter a valid email"),l=!0):(E(s,"Email is required"),l=!0),!l&&(c.success({message:"Registration successful!",position:"topRight",timeout:2500}),setTimeout(()=>w(),2500))}function E(e,t){e.classList.add("error"),e.dataset.originalPlaceholder||(e.dataset.originalPlaceholder=e.placeholder);const o=document.createElement("p");o.classList.add("error-text"),o.textContent=t,e.insertAdjacentElement("afterend",o)}function we(e){e.classList.remove("error"),e.dataset.originalPlaceholder&&(e.placeholder=e.dataset.originalPlaceholder)}function Le(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=index.js.map
