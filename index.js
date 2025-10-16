import{S as _,N as j,P as Y,i as m,A as K,a as Q}from"./assets/vendor-BqCDThHa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".events-swiper");e&&new _(e,{modules:[j,Y],slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},pagination:{el:".ev-pagination",clickable:!0,renderBullet:(t,o)=>`<li class="${o}" aria-label="Go to slide ${t+1}"></li>`,bulletClass:"ev-dot",bulletActiveClass:"ev-dot--active"},navigation:{nextEl:".events-swiper-btn-next",prevEl:".events-swiper-btn-prev"},watchOverflow:!0})});const p=document.getElementById("modal-backdrop");function F(e){let t=document.querySelector(".modal");t?t.querySelector(".event-title").textContent=e:(t=document.createElement("div"),t.classList.add("modal"),t.innerHTML=`
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
        `,p.appendChild(t),t.querySelector(".modal-close").addEventListener("click",$)),p.classList.add("is-open"),document.body.classList.add("no-scroll"),p.addEventListener("click",function o(s){s.target===p&&$(),p.removeEventListener("click",o)})}function $(){p.classList.remove("is-open"),document.body.classList.remove("no-scroll")}const G=document.querySelectorAll(".event-register-btn");G.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.event;F(t)})});(function(){const e=document.querySelector(".form");if(!e)return;const t=e.querySelector(".join-input"),o=e.querySelector(".join-btn");if(!t||!o)return;let s=t.closest(".input-wrap");s||(s=document.createElement("div"),s.className="input-wrap",t.parentNode.insertBefore(s,t),s.appendChild(t));let n=s.querySelector(".join-error");n||(n=document.createElement("p"),n.className="join-error",n.textContent="Error text",s.appendChild(n)),o.addEventListener("click",r=>{r.preventDefault(),s.classList.add("validated"),t.checkValidity()?(t.setAttribute("aria-invalid","false"),s.classList.remove("validated")):(t.setAttribute("aria-invalid","true"),t.reportValidity&&t.reportValidity(),t.focus())}),t.addEventListener("input",()=>{(t.value.trim()===""||t.checkValidity())&&(t.setAttribute("aria-invalid","false"),s.classList.remove("validated"))})})();const u=document.querySelector("#books-modal-backdrop"),A=document.body;async function z(e){try{let a=function(){u.classList.remove("is-open"),A.classList.remove("no-scroll"),u.innerHTML="",window.removeEventListener("keydown",T),u.removeEventListener("click",c)},c=function(d){d.target===u&&a()},T=function(d){d.key==="Escape"&&a()};const o=await(await fetch(`https://books-backend.p.goit.global/books/${e}`)).json(),s=`
      <div class="modal">
        <button type="button" class="close-btn" aria-label="Close modal">
          <svg width="16" height="16">
            <use href="./img/icons-modal.svg#icon-close"></use>
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
        </div>
      </div>
    `;u.innerHTML=s,u.classList.add("is-open"),A.classList.add("no-scroll");const n=u.querySelector(".modal");n.querySelector(".close-btn").addEventListener("click",a),u.addEventListener("click",c),window.addEventListener("keydown",T);const g=n.querySelector(".bookQty");g.value=1;const H=n.querySelector(".increaseQty"),V=n.querySelector(".decreaseQty");H.addEventListener("click",()=>{g.value=Number(g.value)+1}),V.addEventListener("click",()=>{const d=Number(g.value);d>1&&(g.value=d-1)}),n.querySelector(".addToCart").addEventListener("click",()=>{m.success({title:"Успіх",message:`Додано до кошика: ${g.value} шт.`,position:"topRight",timeout:2500})}),n.querySelector(".buyNow").addEventListener("click",d=>{d.preventDefault(),m.info({title:"Покупка",message:"Дякуємо за покупку!",position:"topRight",timeout:2500}),setTimeout(a,2500)}),new K(n.querySelector(".accordion-container"),{duration:300,showMultiple:!0})}catch(t){console.error("Error fetching book:",t),m.error({title:"Помилка",message:"Не вдалося завантажити книгу",position:"topRight",timeout:2500})}}const S="https://books-backend.p.goit.global",U="/books/category-list",W="/books/top-books",J="/books/category",X=10,Z=24,i={categoryToggleBtn:document.querySelector("[data-category-list-toggle]"),categoryMenuContainer:document.querySelector("[data-category-list]"),categoryListElement:document.querySelector(".books-categories-list"),booksContainer:document.querySelector(".js-books-list"),showMoreBtn:document.querySelector(".books-show-more-btn"),booksShowingCount:document.querySelector(".books-showing-count")};let y=[],v="All categories",b=[],f=0;function C(){return window.innerWidth<768?X:Z}async function B(e,t={}){try{const{data:o}=await Q(e,t);return o}catch(o){throw m.error({title:"Error",titleColor:"#ffffff",message:`Request failed: <u>${o.message}</u>`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3,animateInside:!0,progressBar:!1,close:!1,closeOnClick:!0}),o}}async function ee(){return(await B(`${S}${U}`)).map(t=>t.list_name)}async function te(){return(await B(`${S}${W}`)).flatMap(t=>t.books)}async function oe(e){const t={category:e};return await B(`${S}${J}`,{params:t})}function se(e){const t=`
    <li class="books-categories-item">
      <a href="#" class="books-categories-list-link ${v==="All categories"?"active":""}">All categories</a>
    </li>
  `,o=e.filter(s=>s!=="All categories").map(s=>`
        <li class="books-categories-item">
          <a href="#" class="books-categories-list-link ${s===v?"active":""}">${s}</a>
        </li>
      `).join("");return t+o}function ne(e){return e.length===0?'<li class="no-books-message">No books found for this category.</li>':e.map(({book_image:t,title:o,author:s,price:n,_id:r})=>`
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
    `).join("")}function x(){i.categoryListElement.innerHTML=se(y),i.categoryListElement.querySelectorAll(".books-categories-list-link").forEach(e=>{e.addEventListener("click",ie)})}async function P(){i.booksContainer.innerHTML="",i.showMoreBtn.classList.add("show-more-hidden"),v==="All categories"?b=await te():b=await oe(v),f=0,M()}function M(e=C()){const t=f,o=Math.min(t+e,b.length),s=b.slice(t,o);i.booksContainer.insertAdjacentHTML("beforeend",ne(s)),f=o,i.booksShowingCount.textContent=`Showing ${f} of ${b.length}`,f<b.length?i.showMoreBtn.classList.remove("show-more-hidden"):i.showMoreBtn.classList.add("show-more-hidden")}function re(){const e=i.categoryMenuContainer.classList.toggle("is-open");i.categoryToggleBtn.classList.toggle("is-open"),e&&k()}async function ie(e){e.preventDefault();const t=e.target.textContent;if(v===t){i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open");return}v=t,x(),await P(),i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open")}async function ae(e){const t=e.target.closest(".learn-more-btn");if(!t)return;const o=t.dataset.bookId;if(o)try{await z(o)}catch(s){m.error({title:"Error",message:"Failed to load book details. Please try again later.",position:"topRight",timeout:2500}),console.error("Failed to open book modal:",s)}finally{t.disabled=!1}}async function le(){i.showMoreBtn.disabled=!0;try{M(4)}catch(e){m.error({title:"Error",message:`Failed to load books: ${e.message}`,backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}finally{i.showMoreBtn.disabled=!1}}async function ce(){y=await ee(),y.includes("All categories")||(y=["All categories",...y]),x(),i.categoryToggleBtn.firstChild.textContent="Categories ",await P();let e=C();window.addEventListener("resize",()=>{const t=C();t!==e&&(e=t,i.booksContainer.innerHTML="",f=0,M(t))})}const h=i.categoryListElement,L=document.querySelector(".books-categories-scrollbar-thumb");function k(){const{scrollTop:e,scrollHeight:t,clientHeight:o}=h,s=o/t,n=Math.max(s*o,24),r=o-n,a=e/(t-o)*r||0;L.style.height=n+"px",L.style.top=a+"px"}h.addEventListener("scroll",k);window.addEventListener("resize",k);k();let q=!1,N=0,O=0;L.addEventListener("mousedown",e=>{q=!0,N=e.clientY,O=h.scrollTop,document.body.style.userSelect="none"});document.addEventListener("mousemove",e=>{if(!q)return;const{scrollHeight:t,clientHeight:o}=h,s=t-o,n=L.offsetHeight,r=o-n,c=(e.clientY-N)/r*s;h.scrollTop=O+c,k()});document.addEventListener("mouseup",()=>{q=!1,document.body.style.userSelect=""});i.categoryToggleBtn.addEventListener("click",re);i.booksContainer.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");t&&(t.blur(),ae(e))});i.showMoreBtn.addEventListener("click",le);window.addEventListener("click",function(e){!i.categoryToggleBtn.contains(e.target)&&!i.categoryMenuContainer.contains(e.target)&&(i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open"))});document.addEventListener("DOMContentLoaded",ce);document.addEventListener("DOMContentLoaded",()=>{const e=new Swiper("#feedbacks-slider",{slidesPerView:1,spaceBetween:24,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},watchOverflow:!0,navigation:{nextEl:".btn-next",prevEl:".btn-prev",disabledClass:"is-disabled",lockClass:"is-locked"},pagination:{el:".slider-dots",clickable:!0,bulletClass:"dot",bulletActiveClass:"dot--active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}}),t=document.querySelector(".btn-prev"),o=document.querySelector(".btn-next");function s(){if(t){const r=t.classList.contains("is-disabled");t.toggleAttribute("disabled",r),t.setAttribute("aria-disabled",String(r))}if(o){const r=o.classList.contains("is-disabled");o.toggleAttribute("disabled",r),o.setAttribute("aria-disabled",String(r))}}e.on("init",s),e.on("slideChange",s),e.on("reachBeginning",s),e.on("reachEnd",s),e.on("fromEdge",s),s();function n(r){r.key==="ArrowLeft"&&(r.preventDefault(),t?.click()),r.key==="ArrowRight"&&(r.preventDefault(),o?.click())}t?.addEventListener("keydown",n),o?.addEventListener("keydown",n)});new Swiper(".hero-swiper",{loop:!1,speed:400,slidesPerView:1,wrapperClass:"hero-swiper-wrapper",slideClass:"hero-slide",navigation:{nextEl:".hero-right-btn",prevEl:".hero-left-btn"}});(()=>{const e={menu:document.querySelector("[data-menu]"),openBtn:document.querySelector("[data-menu-open]"),closeBtn:document.querySelector("[data-menu-close]")},t=()=>{const o=e.menu.classList.toggle("is-open");document.body.style.overflow=o?"hidden":""};e.openBtn&&e.openBtn.addEventListener("click",t),e.closeBtn&&e.closeBtn.addEventListener("click",t),e.menu.addEventListener("click",o=>{o.target.closest("a")&&(e.menu.classList.remove("is-open"),document.body.style.overflow="")})})();const de=document.querySelectorAll(".event-btn"),l=document.querySelector("#modal-backdrop"),R=document.body;de.forEach(e=>{e.addEventListener("click",()=>ue(e.dataset.event))});function ue(e){const t=`
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
  `;l.innerHTML=t,l.classList.add("is-open"),R.classList.add("no-scroll");const o=l.querySelector(".modal-close"),s=l.querySelector("#register-form");o.addEventListener("click",w),l.addEventListener("click",I),window.addEventListener("keydown",D),s.addEventListener("submit",me)}function w(){l.classList.remove("is-open"),R.classList.remove("no-scroll"),l.innerHTML="",window.removeEventListener("keydown",D),l.removeEventListener("click",I)}function I(e){e.target===l&&w()}function D(e){e.key==="Escape"&&w()}function me(e){e.preventDefault();const t=e.target,o=t.elements.name,s=t.elements.email,n=o.value.trim(),r=s.value.trim();t.querySelectorAll("input, textarea").forEach(c=>ge(c)),t.querySelectorAll(".error-text").forEach(c=>c.remove());let a=!1;n||(E(o,"Name is required"),a=!0),r?pe(r)||(E(s,"Please enter a valid email"),a=!0):(E(s,"Email is required"),a=!0),!a&&(m.success({message:"Registration successful!",position:"topRight",timeout:2500}),setTimeout(()=>w(),2500))}function E(e,t){e.classList.add("error"),e.dataset.originalPlaceholder||(e.dataset.originalPlaceholder=e.placeholder);const o=document.createElement("p");o.classList.add("error-text"),o.textContent=t,e.insertAdjacentElement("afterend",o)}function ge(e){e.classList.remove("error"),e.dataset.originalPlaceholder&&(e.placeholder=e.dataset.originalPlaceholder)}function pe(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=index.js.map
