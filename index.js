import{S as z,N as U,P as W,i as f,A as J,a as X}from"./assets/vendor-BqCDThHa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".events-swiper");e&&new z(e,{modules:[U,W],slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},pagination:{el:".ev-pagination",clickable:!0,renderBullet:(t,o)=>`<li class="${o}" aria-label="Go to slide ${t+1}"></li>`,bulletClass:"ev-dot",bulletActiveClass:"ev-dot--active"},navigation:{nextEl:".events-swiper-btn-next",prevEl:".events-swiper-btn-prev"},watchOverflow:!0})});const p=document.getElementById("modal-backdrop");function Z(e){let t=document.querySelector(".modal");t?t.querySelector(".event-title").textContent=e:(t=document.createElement("div"),t.classList.add("modal"),t.innerHTML=`
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
        `,p.appendChild(t),t.querySelector(".modal-close").addEventListener("click",R)),p.classList.add("is-open"),document.body.classList.add("no-scroll"),p.addEventListener("click",function o(s){s.target===p&&R(),p.removeEventListener("click",o)})}function R(){p.classList.remove("is-open"),document.body.classList.remove("no-scroll")}const ee=document.querySelectorAll(".event-register-btn");ee.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.event;Z(t)})});(function(){const e=document.querySelector(".form");if(!e)return;const t=e.querySelector(".join-input"),o=e.querySelector(".join-btn");if(!t||!o)return;let s=t.closest(".input-wrap");s||(s=document.createElement("div"),s.className="input-wrap",t.parentNode.insertBefore(s,t),s.appendChild(t));let n=s.querySelector(".join-error");n||(n=document.createElement("p"),n.className="join-error",n.textContent="Error text",s.appendChild(n)),o.addEventListener("click",r=>{r.preventDefault(),s.classList.add("validated"),t.checkValidity()?(t.setAttribute("aria-invalid","false"),s.classList.remove("validated")):(t.setAttribute("aria-invalid","true"),t.reportValidity&&t.reportValidity(),t.focus())}),t.addEventListener("input",()=>{(t.value.trim()===""||t.checkValidity())&&(t.setAttribute("aria-invalid","false"),s.classList.remove("validated"))})})();const u=document.querySelector("#modal-backdrop"),H=document.body;async function te(e){try{let a=function(){u.classList.remove("is-open"),H.classList.remove("no-scroll"),u.innerHTML="",window.removeEventListener("keydown",O),u.removeEventListener("click",d)},d=function(g){g.target===u&&a()},O=function(g){g.key==="Escape"&&a()};const o=await(await fetch(`https://books-backend.p.goit.global/books/${e}`)).json(),s=`
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
    `;u.innerHTML=s,u.classList.add("is-open"),H.classList.add("no-scroll");const n=u.querySelector(".modal");n.querySelector(".modal-close").addEventListener("click",a),u.addEventListener("click",d),window.addEventListener("keydown",O);const m=n.querySelector(".bookQty");n.querySelector(".increaseQty").addEventListener("click",()=>{m.value=parseInt(m.value)+1}),n.querySelector(".decreaseQty").addEventListener("click",()=>{parseInt(m.value)>1&&(m.value=parseInt(m.value)-1)}),n.querySelector(".addToCart").addEventListener("click",()=>{console.log(`Додано до кошика: ${m.value} шт.`),f.success({title:"Успіх",message:`Додано до кошика: ${m.value} шт.`,position:"topRight",timeout:2500})}),n.querySelector(".buyNow").addEventListener("click",g=>{g.preventDefault(),f.info({title:"Покупка",message:"Дякуємо за покупку",position:"topRight",timeout:2500}),setTimeout(()=>{a()},2500)}),new J(n.querySelector(".accordion"),{duration:300,showMultiple:!1}),n.querySelector(".accordion").addEventListener("click",g=>{const B=g.target.closest(".accordion-header");if(!B)return;const I=B.querySelector(".accordion-icon use"),N=B.nextElementSibling;setTimeout(()=>{N&&N.offsetHeight>0?I.setAttribute("href","./src/img/icons-modal.svg#icon-above"):I.setAttribute("href","./src/img/icons-modal.svg#icon-down")},310)})}catch(t){console.error("Error fetching book:",t),f.error({title:"Помилка",message:"Не вдалося завантажити книгу",position:"topRight",timeout:2500})}}const T="https://books-backend.p.goit.global",oe="/books/category-list",se="/books/top-books",ne="/books/category",re=10,ie=24,i={categoryToggleBtn:document.querySelector("[data-category-list-toggle]"),categoryMenuContainer:document.querySelector("[data-category-list]"),categoryListElement:document.querySelector(".books-categories-list"),booksContainer:document.querySelector(".js-books-list"),showMoreBtn:document.querySelector(".books-show-more-btn"),booksShowingCount:document.querySelector(".books-showing-count")};let y=[],v="All categories",b=[],E=0,h=0;function q(){return window.innerWidth<768?re:ie}async function $(e,t={}){try{const{data:o}=await X(e,t);return o}catch(o){throw f.error({title:"Error",titleColor:"#ffffff",message:`Request failed: <u>${o.message}</u>`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3,animateInside:!0,progressBar:!1,close:!1,closeOnClick:!0}),o}}async function ae(){return(await $(`${T}${oe}`)).map(t=>t.list_name)}async function le(){return(await $(`${T}${se}`)).flatMap(t=>t.books)}async function ce(e){const t={category:e};return await $(`${T}${ne}`,{params:t})}function de(e){const t=`
    <li class="books-categories-item">
      <a href="#" class="books-categories-list-link ${v==="All categories"?"active":""}">All categories</a>
    </li>
  `,o=e.filter(s=>s!=="All categories").map(s=>`
        <li class="books-categories-item">
          <a href="#" class="books-categories-list-link ${s===v?"active":""}">${s}</a>
        </li>
      `).join("");return t+o}function ue(e){return e.length===0?'<li class="no-books-message">No books found for this category.</li>':e.map(({book_image:t,title:o,author:s,price:n,_id:r})=>`
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
    `).join("")}function V(){i.categoryListElement.innerHTML=de(y),i.categoryListElement.querySelectorAll(".books-categories-list-link").forEach(e=>{e.addEventListener("click",ge)})}async function _(){i.booksContainer.innerHTML="",i.showMoreBtn.classList.add("show-more-hidden"),v==="All categories"?b=await le():b=await ce(v),E=0,h=0,A()}function A(e=q()){const t=E*e,o=Math.min(t+e,b.length),s=b.slice(t,o);i.booksContainer.insertAdjacentHTML("beforeend",ue(s)),h=o,i.booksShowingCount.textContent=`Showing ${h} of ${b.length}`,E++,h<b.length?i.showMoreBtn.classList.remove("show-more-hidden"):i.showMoreBtn.classList.add("show-more-hidden")}function me(){const e=i.categoryMenuContainer.classList.toggle("is-open");i.categoryToggleBtn.classList.toggle("is-open"),e&&w()}async function ge(e){e.preventDefault();const t=e.target.textContent;if(v===t){i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open");return}v=t,V(),await _(),i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open")}async function fe(e){const t=e.target.closest(".learn-more-btn");if(!t)return;const o=t.dataset.bookId;if(o)try{await te(o)}catch(s){f.error({title:"Error",message:"Failed to load book details. Please try again later.",position:"topRight",timeout:2500}),console.error("Failed to open book modal:",s)}finally{t.disabled=!1}}async function pe(){i.showMoreBtn.disabled=!0;try{A(4)}catch(e){f.error({title:"Error",message:`Failed to load books: ${e.message}`,backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}finally{i.showMoreBtn.disabled=!1}}async function be(){y=await ae(),y.includes("All categories")||(y=["All categories",...y]),V(),i.categoryToggleBtn.firstChild.textContent="Categories ",await _();let e=q();window.addEventListener("resize",()=>{const t=q();t!==e&&(e=t,i.booksContainer.innerHTML="",E=0,h=0,A(t))})}const L=i.categoryListElement,S=document.querySelector(".books-categories-scrollbar-thumb");function w(){const{scrollTop:e,scrollHeight:t,clientHeight:o}=L,s=o/t,n=Math.max(s*o,24),r=o-n,a=e/(t-o)*r||0;S.style.height=n+"px",S.style.top=a+"px"}L.addEventListener("scroll",w);window.addEventListener("resize",w);w();let x=!1,j=0,Y=0;S.addEventListener("mousedown",e=>{x=!0,j=e.clientY,Y=L.scrollTop,document.body.style.userSelect="none"});document.addEventListener("mousemove",e=>{if(!x)return;const{scrollHeight:t,clientHeight:o}=L,s=t-o,n=S.offsetHeight,r=o-n,d=(e.clientY-j)/r*s;L.scrollTop=Y+d,w()});document.addEventListener("mouseup",()=>{x=!1,document.body.style.userSelect=""});i.categoryToggleBtn.addEventListener("click",me);i.booksContainer.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");t&&(t.blur(),fe(e))});i.showMoreBtn.addEventListener("click",pe);window.addEventListener("click",function(e){!i.categoryToggleBtn.contains(e.target)&&!i.categoryMenuContainer.contains(e.target)&&(i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open"))});document.addEventListener("DOMContentLoaded",be);document.addEventListener("DOMContentLoaded",()=>{const e=new Swiper("#feedbacks-slider",{slidesPerView:1,spaceBetween:24,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},watchOverflow:!0,navigation:{nextEl:".btn-next",prevEl:".btn-prev",disabledClass:"is-disabled",lockClass:"is-locked"},pagination:{el:".slider-dots",clickable:!0,bulletClass:"dot",bulletActiveClass:"dot--active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}}),t=document.querySelector(".btn-prev"),o=document.querySelector(".btn-next");function s(){if(t){const r=t.classList.contains("is-disabled");t.toggleAttribute("disabled",r),t.setAttribute("aria-disabled",String(r))}if(o){const r=o.classList.contains("is-disabled");o.toggleAttribute("disabled",r),o.setAttribute("aria-disabled",String(r))}}e.on("init",s),e.on("slideChange",s),e.on("reachBeginning",s),e.on("reachEnd",s),e.on("fromEdge",s),s();function n(r){r.key==="ArrowLeft"&&(r.preventDefault(),t?.click()),r.key==="ArrowRight"&&(r.preventDefault(),o?.click())}t?.addEventListener("keydown",n),o?.addEventListener("keydown",n)});new Swiper(".hero-swiper",{loop:!1,speed:400,slidesPerView:1,wrapperClass:"hero-swiper-wrapper",slideClass:"hero-slide",navigation:{nextEl:".hero-right-btn",prevEl:".hero-left-btn"}});const c=document.querySelector("[data-menu]"),k=document.querySelector("[data-menu-open]"),D=document.querySelector("[data-menu-close]"),ve=document.querySelectorAll(".menu-nav-link"),K=e=>{document.body&&(document.body.style.overflow=e?"hidden":"")};k&&c&&k.addEventListener("click",()=>{c.classList.add("is-open"),c.removeAttribute("hidden"),K(!0),k.style.display="none"});const P=()=>{c&&(c.classList.remove("is-open"),c.setAttribute("hidden",""),K(!1),k&&(k.style.display="flex"))};D&&D.addEventListener("click",P);c&&c.addEventListener("click",e=>{e.target===c&&P()});ve.forEach(e=>{e.addEventListener("click",P)});const ye=document.querySelectorAll(".event-btn"),l=document.querySelector("#modal-backdrop"),Q=document.body;ye.forEach(e=>{e.addEventListener("click",()=>he(e.dataset.event))});function he(e){const t=`
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
  `;l.innerHTML=t,l.classList.add("is-open"),Q.classList.add("no-scroll");const o=l.querySelector(".modal-close"),s=l.querySelector("#register-form");o.addEventListener("click",C),l.addEventListener("click",F),window.addEventListener("keydown",G),s.addEventListener("submit",ke)}function C(){l.classList.remove("is-open"),Q.classList.remove("no-scroll"),l.innerHTML="",window.removeEventListener("keydown",G),l.removeEventListener("click",F)}function F(e){e.target===l&&C()}function G(e){e.key==="Escape"&&C()}function ke(e){e.preventDefault();const t=e.target,o=t.elements.name,s=t.elements.email,n=o.value.trim(),r=s.value.trim();t.querySelectorAll("input, textarea").forEach(d=>Le(d)),t.querySelectorAll(".error-text").forEach(d=>d.remove());let a=!1;n||(M(o,"Error text"),a=!0),r?we(r)||(M(s,"Invalid email"),a=!0):(M(s,"Error text"),a=!0),!a&&(f.success({message:"Registration successful!",position:"topRight",timeout:2500}),setTimeout(()=>C(),2500))}function M(e,t){e.classList.add("error"),e.dataset.originalPlaceholder||(e.dataset.originalPlaceholder=e.placeholder),e.placeholder=t;const o=document.createElement("p");o.classList.add("error-text"),o.textContent=t,e.insertAdjacentElement("afterend",o)}function Le(e){e.classList.remove("error"),e.dataset.originalPlaceholder&&(e.placeholder=e.dataset.originalPlaceholder)}function we(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=index.js.map
