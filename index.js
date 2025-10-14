import{i as f,S as G,N as z,P as U,A as W,a as J}from"./assets/vendor-BqCDThHa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const X=document.querySelectorAll(".event-btn"),l=document.querySelector("#modal-backdrop"),D=document.body;X.forEach(e=>{e.addEventListener("click",()=>H(e.dataset.event))});function H(e){const t=`
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
  `;l.innerHTML=t,l.classList.add("is-open"),D.classList.add("no-scroll");const o=l.querySelector(".modal-close"),s=l.querySelector("#register-form");o.addEventListener("click",C),l.addEventListener("click",V),window.addEventListener("keydown",_),s.addEventListener("submit",Z)}function C(){l.classList.remove("is-open"),D.classList.remove("no-scroll"),l.innerHTML="",window.removeEventListener("keydown",_),l.removeEventListener("click",V)}function V(e){e.target===l&&C()}function _(e){e.key==="Escape"&&C()}function Z(e){e.preventDefault();const t=e.target,o=t.elements.name,s=t.elements.email,n=o.value.trim(),i=s.value.trim();t.querySelectorAll("input, textarea").forEach(d=>ee(d)),t.querySelectorAll(".error-text").forEach(d=>d.remove());let a=!1;n||(B(o,"Name is required"),a=!0),i?te(i)||(B(s,"Please enter a valid email"),a=!0):(B(s,"Email is required"),a=!0),!a&&(f.success({message:"Registration successful!",position:"topRight",timeout:2500}),setTimeout(()=>C(),2500))}function B(e,t){e.classList.add("error"),e.dataset.originalPlaceholder||(e.dataset.originalPlaceholder=e.placeholder);const o=document.createElement("p");o.classList.add("error-text"),o.textContent=t,e.insertAdjacentElement("afterend",o)}function ee(e){e.classList.remove("error"),e.dataset.originalPlaceholder&&(e.placeholder=e.dataset.originalPlaceholder)}function te(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".events-swiper");e&&new G(e,{modules:[z,U],slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},pagination:{el:".ev-pagination",clickable:!0,renderBullet:(t,o)=>`<li class="${o}" aria-label="Go to slide ${t+1}"></li>`,bulletClass:"ev-dot",bulletActiveClass:"ev-dot--active"},navigation:{nextEl:".events-swiper-btn-next",prevEl:".events-swiper-btn-prev"},watchOverflow:!0})});const oe=document.querySelectorAll(".event-btn");oe.forEach(e=>{e.addEventListener("click",()=>H(e.dataset.event))});(function(){const e=document.querySelector(".form");if(!e)return;const t=e.querySelector(".join-input"),o=e.querySelector(".join-btn");if(!t||!o)return;let s=t.closest(".input-wrap");s||(s=document.createElement("div"),s.className="input-wrap",t.parentNode.insertBefore(s,t),s.appendChild(t));let n=s.querySelector(".join-error");n||(n=document.createElement("p"),n.className="join-error",n.textContent="Error text",s.appendChild(n)),o.addEventListener("click",i=>{i.preventDefault(),s.classList.add("validated"),t.checkValidity()?(t.setAttribute("aria-invalid","false"),s.classList.remove("validated")):(t.setAttribute("aria-invalid","true"),t.reportValidity&&t.reportValidity(),t.focus())}),t.addEventListener("input",()=>{(t.value.trim()===""||t.checkValidity())&&(t.setAttribute("aria-invalid","false"),s.classList.remove("validated"))})})();const u=document.querySelector("#modal-backdrop"),I=document.body;async function se(e){try{let a=function(){u.classList.remove("is-open"),I.classList.remove("no-scroll"),u.innerHTML="",window.removeEventListener("keydown",P),u.removeEventListener("click",d)},d=function(g){g.target===u&&a()},P=function(g){g.key==="Escape"&&a()};const o=await(await fetch(`https://books-backend.p.goit.global/books/${e}`)).json(),s=`
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
    `;u.innerHTML=s,u.classList.add("is-open"),I.classList.add("no-scroll");const n=u.querySelector(".modal");n.querySelector(".modal-close").addEventListener("click",a),u.addEventListener("click",d),window.addEventListener("keydown",P);const m=n.querySelector(".bookQty");n.querySelector(".increaseQty").addEventListener("click",()=>{m.value=parseInt(m.value)+1}),n.querySelector(".decreaseQty").addEventListener("click",()=>{parseInt(m.value)>1&&(m.value=parseInt(m.value)-1)}),n.querySelector(".addToCart").addEventListener("click",()=>{console.log(`Додано до кошика: ${m.value} шт.`),f.success({title:"Успіх",message:`Додано до кошика: ${m.value} шт.`,position:"topRight",timeout:2500})}),n.querySelector(".buyNow").addEventListener("click",g=>{g.preventDefault(),f.info({title:"Покупка",message:"Дякуємо за покупку",position:"topRight",timeout:2500}),setTimeout(()=>{a()},2500)}),new W(n.querySelector(".accordion"),{duration:300,showMultiple:!1}),n.querySelector(".accordion").addEventListener("click",g=>{const S=g.target.closest(".accordion-header");if(!S)return;const O=S.querySelector(".accordion-icon use"),N=S.nextElementSibling;setTimeout(()=>{N&&N.offsetHeight>0?O.setAttribute("href","./src/img/icons-modal.svg#icon-above"):O.setAttribute("href","./src/img/icons-modal.svg#icon-down")},310)})}catch(t){console.error("Error fetching book:",t),f.error({title:"Помилка",message:"Не вдалося завантажити книгу",position:"topRight",timeout:2500})}}const q="https://books-backend.p.goit.global",ne="/books/category-list",ie="/books/top-books",re="/books/category",ae=10,le=24,r={categoryToggleBtn:document.querySelector("[data-category-list-toggle]"),categoryMenuContainer:document.querySelector("[data-category-list]"),categoryListElement:document.querySelector(".books-categories-list"),booksContainer:document.querySelector(".js-books-list"),showMoreBtn:document.querySelector(".books-show-more-btn"),booksShowingCount:document.querySelector(".books-showing-count")};let v=[],b="All categories",p=[],L=0,y=0;function M(){return window.innerWidth<768?ae:le}async function T(e,t={}){try{const{data:o}=await J(e,t);return o}catch(o){throw f.error({title:"Error",titleColor:"#ffffff",message:`Request failed: <u>${o.message}</u>`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3,animateInside:!0,progressBar:!1,close:!1,closeOnClick:!0}),o}}async function ce(){return(await T(`${q}${ne}`)).map(t=>t.list_name)}async function de(){return(await T(`${q}${ie}`)).flatMap(t=>t.books)}async function ue(e){const t={category:e};return await T(`${q}${re}`,{params:t})}function me(e){const t=`
    <li class="books-categories-item">
      <a href="#" class="books-categories-list-link ${b==="All categories"?"active":""}">All categories</a>
    </li>
  `,o=e.filter(s=>s!=="All categories").map(s=>`
        <li class="books-categories-item">
          <a href="#" class="books-categories-list-link ${s===b?"active":""}">${s}</a>
        </li>
      `).join("");return t+o}function ge(e){return e.length===0?'<li class="no-books-message">No books found for this category.</li>':e.map(({book_image:t,title:o,author:s,price:n,_id:i})=>`
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
    `).join("")}function j(){r.categoryListElement.innerHTML=me(v),r.categoryListElement.querySelectorAll(".books-categories-list-link").forEach(e=>{e.addEventListener("click",pe)})}async function Y(){r.booksContainer.innerHTML="",r.showMoreBtn.classList.add("show-more-hidden"),b==="All categories"?p=await de():p=await ue(b),L=0,y=0,A()}function A(e=M()){const t=L*e,o=Math.min(t+e,p.length),s=p.slice(t,o);r.booksContainer.insertAdjacentHTML("beforeend",ge(s)),y=o,r.booksShowingCount.textContent=`Showing ${y} of ${p.length}`,L++,y<p.length?r.showMoreBtn.classList.remove("show-more-hidden"):r.showMoreBtn.classList.add("show-more-hidden")}function fe(){const e=r.categoryMenuContainer.classList.toggle("is-open");r.categoryToggleBtn.classList.toggle("is-open"),e&&w()}async function pe(e){e.preventDefault();const t=e.target.textContent;if(b===t){r.categoryMenuContainer.classList.remove("is-open"),r.categoryToggleBtn.classList.remove("is-open");return}b=t,j(),await Y(),r.categoryMenuContainer.classList.remove("is-open"),r.categoryToggleBtn.classList.remove("is-open")}async function be(e){const t=e.target.closest(".learn-more-btn");if(!t)return;const o=t.dataset.bookId;if(o)try{await se(o)}catch(s){f.error({title:"Error",message:"Failed to load book details. Please try again later.",position:"topRight",timeout:2500}),console.error("Failed to open book modal:",s)}finally{t.disabled=!1}}async function ve(){r.showMoreBtn.disabled=!0;try{A(4)}catch(e){f.error({title:"Error",message:`Failed to load books: ${e.message}`,backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}finally{r.showMoreBtn.disabled=!1}}async function ye(){v=await ce(),v.includes("All categories")||(v=["All categories",...v]),j(),r.categoryToggleBtn.firstChild.textContent="Categories ",await Y();let e=M();window.addEventListener("resize",()=>{const t=M();t!==e&&(e=t,r.booksContainer.innerHTML="",L=0,y=0,A(t))})}const k=r.categoryListElement,E=document.querySelector(".books-categories-scrollbar-thumb");function w(){const{scrollTop:e,scrollHeight:t,clientHeight:o}=k,s=o/t,n=Math.max(s*o,24),i=o-n,a=e/(t-o)*i||0;E.style.height=n+"px",E.style.top=a+"px"}k.addEventListener("scroll",w);window.addEventListener("resize",w);w();let $=!1,K=0,Q=0;E.addEventListener("mousedown",e=>{$=!0,K=e.clientY,Q=k.scrollTop,document.body.style.userSelect="none"});document.addEventListener("mousemove",e=>{if(!$)return;const{scrollHeight:t,clientHeight:o}=k,s=t-o,n=E.offsetHeight,i=o-n,d=(e.clientY-K)/i*s;k.scrollTop=Q+d,w()});document.addEventListener("mouseup",()=>{$=!1,document.body.style.userSelect=""});r.categoryToggleBtn.addEventListener("click",fe);r.booksContainer.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");t&&(t.blur(),be(e))});r.showMoreBtn.addEventListener("click",ve);window.addEventListener("click",function(e){!r.categoryToggleBtn.contains(e.target)&&!r.categoryMenuContainer.contains(e.target)&&(r.categoryMenuContainer.classList.remove("is-open"),r.categoryToggleBtn.classList.remove("is-open"))});document.addEventListener("DOMContentLoaded",ye);document.addEventListener("DOMContentLoaded",()=>{const e=new Swiper("#feedbacks-slider",{slidesPerView:1,spaceBetween:24,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},watchOverflow:!0,navigation:{nextEl:".btn-next",prevEl:".btn-prev",disabledClass:"is-disabled",lockClass:"is-locked"},pagination:{el:".slider-dots",clickable:!0,bulletClass:"dot",bulletActiveClass:"dot--active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}}),t=document.querySelector(".btn-prev"),o=document.querySelector(".btn-next");function s(){if(t){const i=t.classList.contains("is-disabled");t.toggleAttribute("disabled",i),t.setAttribute("aria-disabled",String(i))}if(o){const i=o.classList.contains("is-disabled");o.toggleAttribute("disabled",i),o.setAttribute("aria-disabled",String(i))}}e.on("init",s),e.on("slideChange",s),e.on("reachBeginning",s),e.on("reachEnd",s),e.on("fromEdge",s),s();function n(i){i.key==="ArrowLeft"&&(i.preventDefault(),t?.click()),i.key==="ArrowRight"&&(i.preventDefault(),o?.click())}t?.addEventListener("keydown",n),o?.addEventListener("keydown",n)});new Swiper(".hero-swiper",{loop:!1,speed:400,slidesPerView:1,wrapperClass:"hero-swiper-wrapper",slideClass:"hero-slide",navigation:{nextEl:".hero-right-btn",prevEl:".hero-left-btn"}});const c=document.querySelector("[data-menu]"),h=document.querySelector("[data-menu-open]"),R=document.querySelector("[data-menu-close]"),he=document.querySelectorAll(".menu-nav-link"),F=e=>{document.body&&(document.body.style.overflow=e?"hidden":"")};h&&c&&h.addEventListener("click",()=>{c.classList.add("is-open"),c.removeAttribute("hidden"),F(!0),h.style.display="none"});const x=()=>{c&&(c.classList.remove("is-open"),c.setAttribute("hidden",""),F(!1),h&&(h.style.display="flex"))};R&&R.addEventListener("click",x);c&&c.addEventListener("click",e=>{e.target===c&&x()});he.forEach(e=>{e.addEventListener("click",x)});
//# sourceMappingURL=index.js.map
