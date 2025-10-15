import{S as j,N as Y,P as K,i as g,A as Q,a as F}from"./assets/vendor-BqCDThHa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".events-swiper");e&&new j(e,{modules:[Y,K],slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},pagination:{el:".ev-pagination",clickable:!0,renderBullet:(t,o)=>`<li class="${o}" aria-label="Go to slide ${t+1}"></li>`,bulletClass:"ev-dot",bulletActiveClass:"ev-dot--active"},navigation:{nextEl:".events-swiper-btn-next",prevEl:".events-swiper-btn-prev"},watchOverflow:!0})});const p=document.getElementById("modal-backdrop");function G(e){let t=document.querySelector(".modal");t?t.querySelector(".event-title").textContent=e:(t=document.createElement("div"),t.classList.add("modal"),t.innerHTML=`
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
        `,p.appendChild(t),t.querySelector(".modal-close").addEventListener("click",P)),p.classList.add("is-open"),document.body.classList.add("no-scroll"),p.addEventListener("click",function o(s){s.target===p&&P(),p.removeEventListener("click",o)})}function P(){p.classList.remove("is-open"),document.body.classList.remove("no-scroll")}const z=document.querySelectorAll(".event-register-btn");z.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.event;G(t)})});(function(){const e=document.querySelector(".form");if(!e)return;const t=e.querySelector(".join-input"),o=e.querySelector(".join-btn");if(!t||!o)return;let s=t.closest(".input-wrap");s||(s=document.createElement("div"),s.className="input-wrap",t.parentNode.insertBefore(s,t),s.appendChild(t));let n=s.querySelector(".join-error");n||(n=document.createElement("p"),n.className="join-error",n.textContent="Error text",s.appendChild(n)),o.addEventListener("click",r=>{r.preventDefault(),s.classList.add("validated"),t.checkValidity()?(t.setAttribute("aria-invalid","false"),s.classList.remove("validated")):(t.setAttribute("aria-invalid","true"),t.reportValidity&&t.reportValidity(),t.focus())}),t.addEventListener("input",()=>{(t.value.trim()===""||t.checkValidity())&&(t.setAttribute("aria-invalid","false"),s.classList.remove("validated"))})})();const d=document.querySelector("#modal-backdrop"),O=document.body;async function U(e){try{let a=function(){d.classList.remove("is-open"),O.classList.remove("no-scroll"),d.innerHTML="",window.removeEventListener("keydown",$),d.removeEventListener("click",c)},c=function(m){m.target===d&&a()},$=function(m){m.key==="Escape"&&a()};const o=await(await fetch(`https://books-backend.p.goit.global/books/${e}`)).json(),s=`
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
    `;d.innerHTML=s,d.classList.add("is-open"),O.classList.add("no-scroll");const n=d.querySelector(".modal");n.querySelector(".modal-close").addEventListener("click",a),d.addEventListener("click",c),window.addEventListener("keydown",$);const u=n.querySelector(".bookQty");n.querySelector(".increaseQty").addEventListener("click",()=>{u.value=parseInt(u.value)+1}),n.querySelector(".decreaseQty").addEventListener("click",()=>{parseInt(u.value)>1&&(u.value=parseInt(u.value)-1)}),n.querySelector(".addToCart").addEventListener("click",()=>{console.log(`Додано до кошика: ${u.value} шт.`),g.success({title:"Успіх",message:`Додано до кошика: ${u.value} шт.`,position:"topRight",timeout:2500})}),n.querySelector(".buyNow").addEventListener("click",m=>{m.preventDefault(),g.info({title:"Покупка",message:"Дякуємо за покупку",position:"topRight",timeout:2500}),setTimeout(()=>{a()},2500)}),new Q(n.querySelector(".accordion"),{duration:300,showMultiple:!1}),n.querySelector(".accordion").addEventListener("click",m=>{const E=m.target.closest(".accordion-header");if(!E)return;const A=E.querySelector(".accordion-icon use"),x=E.nextElementSibling;setTimeout(()=>{x&&x.offsetHeight>0?A.setAttribute("href","./src/img/icons-modal.svg#icon-above"):A.setAttribute("href","./src/img/icons-modal.svg#icon-down")},310)})}catch(t){console.error("Error fetching book:",t),g.error({title:"Помилка",message:"Не вдалося завантажити книгу",position:"topRight",timeout:2500})}}const B="https://books-backend.p.goit.global",W="/books/category-list",J="/books/top-books",X="/books/category",Z=10,ee=24,i={categoryToggleBtn:document.querySelector("[data-category-list-toggle]"),categoryMenuContainer:document.querySelector("[data-category-list]"),categoryListElement:document.querySelector(".books-categories-list"),booksContainer:document.querySelector(".js-books-list"),showMoreBtn:document.querySelector(".books-show-more-btn"),booksShowingCount:document.querySelector(".books-showing-count")};let y=[],v="All categories",f=[],b=0;function S(){return window.innerWidth<768?Z:ee}async function M(e,t={}){try{const{data:o}=await F(e,t);return o}catch(o){throw g.error({title:"Error",titleColor:"#ffffff",message:`Request failed: <u>${o.message}</u>`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3,animateInside:!0,progressBar:!1,close:!1,closeOnClick:!0}),o}}async function te(){return(await M(`${B}${W}`)).map(t=>t.list_name)}async function oe(){return(await M(`${B}${J}`)).flatMap(t=>t.books)}async function se(e){const t={category:e};return await M(`${B}${X}`,{params:t})}function ne(e){const t=`
    <li class="books-categories-item">
      <a href="#" class="books-categories-list-link ${v==="All categories"?"active":""}">All categories</a>
    </li>
  `,o=e.filter(s=>s!=="All categories").map(s=>`
        <li class="books-categories-item">
          <a href="#" class="books-categories-list-link ${s===v?"active":""}">${s}</a>
        </li>
      `).join("");return t+o}function re(e){return e.length===0?'<li class="no-books-message">No books found for this category.</li>':e.map(({book_image:t,title:o,author:s,price:n,_id:r})=>`
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
    `).join("")}function I(){i.categoryListElement.innerHTML=ne(y),i.categoryListElement.querySelectorAll(".books-categories-list-link").forEach(e=>{e.addEventListener("click",ae)})}async function N(){i.booksContainer.innerHTML="",i.showMoreBtn.classList.add("show-more-hidden"),v==="All categories"?f=await oe():f=await se(v),b=0,q()}function q(e=S()){const t=b,o=Math.min(t+e,f.length),s=f.slice(t,o);i.booksContainer.insertAdjacentHTML("beforeend",re(s)),b=o,i.booksShowingCount.textContent=`Showing ${b} of ${f.length}`,b<f.length?i.showMoreBtn.classList.remove("show-more-hidden"):i.showMoreBtn.classList.add("show-more-hidden")}function ie(){const e=i.categoryMenuContainer.classList.toggle("is-open");i.categoryToggleBtn.classList.toggle("is-open"),e&&k()}async function ae(e){e.preventDefault();const t=e.target.textContent;if(v===t){i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open");return}v=t,I(),await N(),i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open")}async function le(e){const t=e.target.closest(".learn-more-btn");if(!t)return;const o=t.dataset.bookId;if(o)try{await U(o)}catch(s){g.error({title:"Error",message:"Failed to load book details. Please try again later.",position:"topRight",timeout:2500}),console.error("Failed to open book modal:",s)}finally{t.disabled=!1}}async function ce(){i.showMoreBtn.disabled=!0;try{q(4)}catch(e){g.error({title:"Error",message:`Failed to load books: ${e.message}`,backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}finally{i.showMoreBtn.disabled=!1}}async function de(){y=await te(),y.includes("All categories")||(y=["All categories",...y]),I(),i.categoryToggleBtn.firstChild.textContent="Categories ",await N();let e=S();window.addEventListener("resize",()=>{const t=S();t!==e&&(e=t,i.booksContainer.innerHTML="",b=0,q(t))})}const h=i.categoryListElement,L=document.querySelector(".books-categories-scrollbar-thumb");function k(){const{scrollTop:e,scrollHeight:t,clientHeight:o}=h,s=o/t,n=Math.max(s*o,24),r=o-n,a=e/(t-o)*r||0;L.style.height=n+"px",L.style.top=a+"px"}h.addEventListener("scroll",k);window.addEventListener("resize",k);k();let T=!1,R=0,H=0;L.addEventListener("mousedown",e=>{T=!0,R=e.clientY,H=h.scrollTop,document.body.style.userSelect="none"});document.addEventListener("mousemove",e=>{if(!T)return;const{scrollHeight:t,clientHeight:o}=h,s=t-o,n=L.offsetHeight,r=o-n,c=(e.clientY-R)/r*s;h.scrollTop=H+c,k()});document.addEventListener("mouseup",()=>{T=!1,document.body.style.userSelect=""});i.categoryToggleBtn.addEventListener("click",ie);i.booksContainer.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");t&&(t.blur(),le(e))});i.showMoreBtn.addEventListener("click",ce);window.addEventListener("click",function(e){!i.categoryToggleBtn.contains(e.target)&&!i.categoryMenuContainer.contains(e.target)&&(i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open"))});document.addEventListener("DOMContentLoaded",de);document.addEventListener("DOMContentLoaded",()=>{const e=new Swiper("#feedbacks-slider",{slidesPerView:1,spaceBetween:24,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},watchOverflow:!0,navigation:{nextEl:".btn-next",prevEl:".btn-prev",disabledClass:"is-disabled",lockClass:"is-locked"},pagination:{el:".slider-dots",clickable:!0,bulletClass:"dot",bulletActiveClass:"dot--active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}}),t=document.querySelector(".btn-prev"),o=document.querySelector(".btn-next");function s(){if(t){const r=t.classList.contains("is-disabled");t.toggleAttribute("disabled",r),t.setAttribute("aria-disabled",String(r))}if(o){const r=o.classList.contains("is-disabled");o.toggleAttribute("disabled",r),o.setAttribute("aria-disabled",String(r))}}e.on("init",s),e.on("slideChange",s),e.on("reachBeginning",s),e.on("reachEnd",s),e.on("fromEdge",s),s();function n(r){r.key==="ArrowLeft"&&(r.preventDefault(),t?.click()),r.key==="ArrowRight"&&(r.preventDefault(),o?.click())}t?.addEventListener("keydown",n),o?.addEventListener("keydown",n)});new Swiper(".hero-swiper",{loop:!1,speed:400,slidesPerView:1,wrapperClass:"hero-swiper-wrapper",slideClass:"hero-slide",navigation:{nextEl:".hero-right-btn",prevEl:".hero-left-btn"}});(()=>{const e={menu:document.querySelector("[data-menu]"),openBtn:document.querySelector("[data-menu-open]"),closeBtn:document.querySelector("[data-menu-close]")},t=()=>{const o=e.menu.classList.toggle("is-open");document.body.style.overflow=o?"hidden":""};e.openBtn&&e.openBtn.addEventListener("click",t),e.closeBtn&&e.closeBtn.addEventListener("click",t),e.menu.addEventListener("click",o=>{o.target.closest("a")&&(e.menu.classList.remove("is-open"),document.body.style.overflow="")})})();const ue=document.querySelectorAll(".event-btn"),l=document.querySelector("#modal-backdrop"),D=document.body;ue.forEach(e=>{e.addEventListener("click",()=>me(e.dataset.event))});function me(e){const t=`
    <div class="modal">
      <button type="button" class="modal-close" aria-label="Close modal">
        <svg width="16" height="16">
         <use href="./img/icons.svg#icon-x"></use>
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
  `;l.innerHTML=t,l.classList.add("is-open"),D.classList.add("no-scroll");const o=l.querySelector(".modal-close"),s=l.querySelector("#register-form");o.addEventListener("click",w),l.addEventListener("click",V),window.addEventListener("keydown",_),s.addEventListener("submit",ge)}function w(){l.classList.remove("is-open"),D.classList.remove("no-scroll"),l.innerHTML="",window.removeEventListener("keydown",_),l.removeEventListener("click",V)}function V(e){e.target===l&&w()}function _(e){e.key==="Escape"&&w()}function ge(e){e.preventDefault();const t=e.target,o=t.elements.name,s=t.elements.email,n=o.value.trim(),r=s.value.trim();t.querySelectorAll("input, textarea").forEach(c=>pe(c)),t.querySelectorAll(".error-text").forEach(c=>c.remove());let a=!1;n||(C(o,"Error text"),a=!0),r?fe(r)||(C(s,"Invalid email"),a=!0):(C(s,"Error text"),a=!0),!a&&(g.success({message:"Registration successful!",position:"topRight",timeout:2500}),setTimeout(()=>w(),2500))}function C(e,t){e.classList.add("error"),e.dataset.originalPlaceholder||(e.dataset.originalPlaceholder=e.placeholder),e.placeholder=t;const o=document.createElement("p");o.classList.add("error-text"),o.textContent=t,e.insertAdjacentElement("afterend",o)}function pe(e){e.classList.remove("error"),e.dataset.originalPlaceholder&&(e.placeholder=e.dataset.originalPlaceholder)}function fe(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=index.js.map
