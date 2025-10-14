import{i as b,S as G,N as z,P as U,A as W,a as J}from"./assets/vendor-BqCDThHa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const X=document.querySelectorAll(".event-btn"),c=document.querySelector("#modal-backdrop"),R=document.body;X.forEach(e=>{e.addEventListener("click",()=>H(e.dataset.event))});function H(e){const t=`
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
  `;c.innerHTML=t,c.classList.add("is-open"),R.classList.add("no-scroll");const o=c.querySelector(".modal-close"),s=c.querySelector("#register-form");o.addEventListener("click",S),c.addEventListener("click",_),window.addEventListener("keydown",V),s.addEventListener("submit",Z)}function S(){c.classList.remove("is-open"),R.classList.remove("no-scroll"),c.innerHTML="",window.removeEventListener("keydown",V),c.removeEventListener("click",_)}function _(e){e.target===c&&S()}function V(e){e.key==="Escape"&&S()}function Z(e){e.preventDefault();const t=e.target,o=t.elements.name,s=t.elements.email,n=o.value.trim(),r=s.value.trim();t.querySelectorAll("input, textarea").forEach(d=>ee(d)),t.querySelectorAll(".error-text").forEach(d=>d.remove());let i=!1;n||(T(o,"Name is required"),i=!0),r?te(r)||(T(s,"Please enter a valid email"),i=!0):(T(s,"Email is required"),i=!0),!i&&(b.success({message:"Registration successful!",position:"topRight",timeout:2500}),setTimeout(()=>S(),2500))}function T(e,t){e.classList.add("error"),e.dataset.originalPlaceholder||(e.dataset.originalPlaceholder=e.placeholder);const o=document.createElement("p");o.classList.add("error-text"),o.textContent=t,e.insertAdjacentElement("afterend",o)}function ee(e){e.classList.remove("error"),e.dataset.originalPlaceholder&&(e.placeholder=e.dataset.originalPlaceholder)}function te(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".events-swiper");e&&new G(e,{modules:[z,U],slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},pagination:{el:".ev-pagination",clickable:!0,renderBullet:(t,o)=>`<li class="${o}" aria-label="Go to slide ${t+1}"></li>`,bulletClass:"ev-dot",bulletActiveClass:"ev-dot--active"},navigation:{nextEl:".events-swiper-btn-next",prevEl:".events-swiper-btn-prev"},watchOverflow:!0})});const oe=document.querySelectorAll(".event-btn");oe.forEach(e=>{e.addEventListener("click",()=>H(e.dataset.event))});(function(){const e=document.querySelector(".form");if(!e)return;const t=e.querySelector(".join-input"),o=e.querySelector(".join-btn");if(!t||!o)return;let s=t.closest(".input-wrap");s||(s=document.createElement("div"),s.className="input-wrap",t.parentNode.insertBefore(s,t),s.appendChild(t));let n=s.querySelector(".join-error");n||(n=document.createElement("p"),n.className="join-error",n.textContent="Error text",s.appendChild(n)),o.addEventListener("click",r=>{r.preventDefault(),s.classList.add("validated"),t.checkValidity()?(t.setAttribute("aria-invalid","false"),s.classList.remove("validated")):(t.setAttribute("aria-invalid","true"),t.reportValidity&&t.reportValidity(),t.focus())}),t.addEventListener("input",()=>{(t.value.trim()===""||t.checkValidity())&&(t.setAttribute("aria-invalid","false"),s.classList.remove("validated"))})})();const u=document.querySelector("#modal-backdrop"),N=document.body;async function se(e){try{let i=function(){u.classList.remove("is-open"),N.classList.remove("no-scroll"),u.innerHTML="",window.removeEventListener("keydown",P),u.removeEventListener("click",d)},d=function(g){g.target===u&&i()},P=function(g){g.key==="Escape"&&i()};const o=await(await fetch(`https://books-backend.p.goit.global/books/${e}`)).json(),s=`
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
    `;u.innerHTML=s,u.classList.add("is-open"),N.classList.add("no-scroll");const n=u.querySelector(".modal");n.querySelector(".modal-close").addEventListener("click",i),u.addEventListener("click",d),window.addEventListener("keydown",P);const m=n.querySelector(".bookQty");n.querySelector(".increaseQty").addEventListener("click",()=>{m.value=parseInt(m.value)+1}),n.querySelector(".decreaseQty").addEventListener("click",()=>{parseInt(m.value)>1&&(m.value=parseInt(m.value)-1)}),n.querySelector(".addToCart").addEventListener("click",()=>{console.log(`Додано до кошика: ${m.value} шт.`),b.success({title:"Успіх",message:`Додано до кошика: ${m.value} шт.`,position:"topRight",timeout:2500})}),n.querySelector(".buyNow").addEventListener("click",g=>{g.preventDefault(),b.info({title:"Покупка",message:"Дякуємо за покупку",position:"topRight",timeout:2500}),setTimeout(()=>{i()},2500)}),new W(n.querySelector(".accordion"),{duration:300,showMultiple:!1}),n.querySelector(".accordion").addEventListener("click",g=>{const B=g.target.closest(".accordion-header");if(!B)return;const O=B.querySelector(".accordion-icon use"),I=B.nextElementSibling;setTimeout(()=>{I&&I.offsetHeight>0?O.setAttribute("href","./src/img/icons-modal.svg#icon-above"):O.setAttribute("href","./src/img/icons-modal.svg#icon-down")},310)})}catch(t){console.error("Error fetching book:",t),b.error({title:"Помилка",message:"Не вдалося завантажити книгу",position:"topRight",timeout:2500})}}const q="https://books-backend.p.goit.global",ne="/books/category-list",re="/books/top-books",ae="/books/category",ie="/books/",ce=10,le=24,a={categoryToggleBtn:document.querySelector("[data-category-list-toggle]"),categoryMenuContainer:document.querySelector("[data-category-list]"),categoryListElement:document.querySelector(".books-categories-list"),booksContainer:document.querySelector(".js-books-list"),showMoreBtn:document.querySelector(".books-show-more-btn"),booksShowingCount:document.querySelector(".books-showing-count")};let p=[],y="All categories",f=[],L=0,v=0;function M(){return window.innerWidth<768?ce:le}async function C(e,t={}){try{const{data:o}=await J(e,t);return o}catch(o){throw b.error({title:"Error",titleColor:"#ffffff",message:`Request failed: <u>${o.message}</u>`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3,animateInside:!0,progressBar:!1,close:!1,closeOnClick:!0}),o}}async function de(){return(await C(`${q}${ne}`)).map(t=>t.list_name)}async function ue(){return(await C(`${q}${re}`)).flatMap(t=>t.books)}async function me(e){const t={category:e};return await C(`${q}${ae}`,{params:t})}async function ge(e){const t=await C(`${q}${ie}${e}`);return console.log(`Book details for ID ${e}:`,t),t}function fe(e){const t=`
    <li class="books-categories-item">
      <a href="#" class="books-categories-list-link ${y==="All categories"?"active":""}">All categories</a>
    </li>
  `,o=e.filter(s=>s!=="All categories").map(s=>`
        <li class="books-categories-item">
          <a href="#" class="books-categories-list-link ${s===y?"active":""}">${s}</a>
        </li>
      `).join("");return t+o}function be(e){return e.length===0?'<li class="no-books-message">No books found for this category.</li>':e.map(({book_image:t,title:o,author:s,price:n,_id:r})=>`
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
    `).join("")}function j(){a.categoryListElement.innerHTML=fe(p),a.categoryListElement.querySelectorAll(".books-categories-list-link").forEach(e=>{e.addEventListener("click",pe)})}async function K(){a.booksContainer.innerHTML="",a.showMoreBtn.classList.add("show-more-hidden"),y==="All categories"?f=await ue():f=await me(y),L=0,v=0,$()}function $(e=M()){const t=L*e,o=Math.min(t+e,f.length),s=f.slice(t,o);a.booksContainer.insertAdjacentHTML("beforeend",be(s)),v=o,a.booksShowingCount.textContent=`Showing ${v} of ${f.length}`,L++,v<f.length?a.showMoreBtn.classList.remove("show-more-hidden"):a.showMoreBtn.classList.add("show-more-hidden")}function ye(){const e=a.categoryMenuContainer.classList.toggle("is-open");a.categoryToggleBtn.classList.toggle("is-open"),e&&w()}async function pe(e){e.preventDefault();const t=e.target.textContent;if(y===t){a.categoryMenuContainer.classList.remove("is-open"),a.categoryToggleBtn.classList.remove("is-open");return}y=t,j(),await K(),a.categoryMenuContainer.classList.remove("is-open"),a.categoryToggleBtn.classList.remove("is-open")}async function ve(e){const t=e.target.closest(".learn-more-btn");if(t){const o=t.dataset.bookId;if(o)try{const s=await ge(o);se(s)}catch(s){alert("Failed to load book details. Please try again later."),console.error("Failed to show book details:",s)}}}async function he(){a.showMoreBtn.disabled=!0;try{$(4)}catch(e){b.error({title:"Error",message:`Failed to load books: ${e.message}`,backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}finally{a.showMoreBtn.disabled=!1}}async function ke(){p=await de(),p.includes("All categories")||(p=["All categories",...p]),j(),a.categoryToggleBtn.firstChild.textContent="Categories ",await K();let e=M();window.addEventListener("resize",()=>{const t=M();t!==e&&(e=t,a.booksContainer.innerHTML="",L=0,v=0,$(t))})}const k=a.categoryListElement,E=document.querySelector(".books-categories-scrollbar-thumb");function w(){const{scrollTop:e,scrollHeight:t,clientHeight:o}=k,s=o/t,n=Math.max(s*o,24),r=o-n,i=e/(t-o)*r||0;E.style.height=n+"px",E.style.top=i+"px"}k.addEventListener("scroll",w);window.addEventListener("resize",w);w();let A=!1,Y=0,Q=0;E.addEventListener("mousedown",e=>{A=!0,Y=e.clientY,Q=k.scrollTop,document.body.style.userSelect="none"});document.addEventListener("mousemove",e=>{if(!A)return;const{scrollHeight:t,clientHeight:o}=k,s=t-o,n=E.offsetHeight,r=o-n,d=(e.clientY-Y)/r*s;k.scrollTop=Q+d,w()});document.addEventListener("mouseup",()=>{A=!1,document.body.style.userSelect=""});a.categoryToggleBtn.addEventListener("click",ye);a.booksContainer.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");t&&(t.blur(),ve(e))});a.showMoreBtn.addEventListener("click",he);window.addEventListener("click",function(e){!a.categoryToggleBtn.contains(e.target)&&!a.categoryMenuContainer.contains(e.target)&&(a.categoryMenuContainer.classList.remove("is-open"),a.categoryToggleBtn.classList.remove("is-open"))});document.addEventListener("DOMContentLoaded",ke);document.addEventListener("DOMContentLoaded",()=>{const e=new Swiper("#feedbacks-slider",{slidesPerView:1,spaceBetween:24,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},watchOverflow:!0,navigation:{nextEl:".btn-next",prevEl:".btn-prev",disabledClass:"is-disabled",lockClass:"is-locked"},pagination:{el:".slider-dots",clickable:!0,bulletClass:"dot",bulletActiveClass:"dot--active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}}),t=document.querySelector(".btn-prev"),o=document.querySelector(".btn-next");function s(){if(t){const r=t.classList.contains("is-disabled");t.toggleAttribute("disabled",r),t.setAttribute("aria-disabled",String(r))}if(o){const r=o.classList.contains("is-disabled");o.toggleAttribute("disabled",r),o.setAttribute("aria-disabled",String(r))}}e.on("init",s),e.on("slideChange",s),e.on("reachBeginning",s),e.on("reachEnd",s),e.on("fromEdge",s),s();function n(r){r.key==="ArrowLeft"&&(r.preventDefault(),t?.click()),r.key==="ArrowRight"&&(r.preventDefault(),o?.click())}t?.addEventListener("keydown",n),o?.addEventListener("keydown",n)});document.querySelector("[data-book-modal]");document.querySelector("[data-book-modal-close]");document.querySelector("[data-book-modal-backdrop]");document.querySelector("[data-book-image]"),document.querySelector("[data-book-title]"),document.querySelector("[data-book-author]"),document.querySelector("[data-book-price]"),document.querySelector("[data-book-quantity]"),document.querySelector("[data-quantity-decrease]"),document.querySelector("[data-quantity-increase]"),document.querySelector("[data-add-to-cart]"),document.querySelector("[data-buy-now]"),document.querySelector("[data-details-content]"),document.querySelector("[data-shipping-content]"),document.querySelector("[data-returns-content]"),document.querySelector("[data-book-form]");new Swiper(".hero-swiper",{loop:!1,speed:400,slidesPerView:1,wrapperClass:"hero-swiper-wrapper",slideClass:"hero-slide",navigation:{nextEl:".hero-right-btn",prevEl:".hero-left-btn"}});const l=document.querySelector("[data-menu]"),h=document.querySelector("[data-menu-open]"),D=document.querySelector("[data-menu-close]"),we=document.querySelectorAll(".menu-nav-link"),F=e=>{document.body&&(document.body.style.overflow=e?"hidden":"")};h&&l&&h.addEventListener("click",()=>{l.classList.add("is-open"),l.removeAttribute("hidden"),F(!0),h.style.display="none"});const x=()=>{l&&(l.classList.remove("is-open"),l.setAttribute("hidden",""),F(!1),h&&(h.style.display="flex"))};D&&D.addEventListener("click",x);l&&l.addEventListener("click",e=>{e.target===l&&x()});we.forEach(e=>{e.addEventListener("click",x)});
//# sourceMappingURL=index.js.map
