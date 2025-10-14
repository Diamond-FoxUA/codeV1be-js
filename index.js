import{i as b,S as G,N as z,P as U,A as W,a as J}from"./assets/vendor-BqCDThHa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const X=document.querySelectorAll(".event-btn"),c=document.querySelector("#modal-backdrop"),R=document.body;X.forEach(e=>{e.addEventListener("click",()=>H(e.dataset.event))});function H(e){const t=`
    <div class="modal">
      <button type="button" class="modal-close" aria-label="Close modal">
        <svg width="16" height="16">
         <use href="./src/img/icons.svg#icon-close"></use>
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
  `;c.innerHTML=t,c.classList.add("is-open"),R.classList.add("no-scroll");const o=c.querySelector(".modal-close"),s=c.querySelector("#register-form");o.addEventListener("click",S),c.addEventListener("click",_),window.addEventListener("keydown",V),s.addEventListener("submit",Z)}function S(){c.classList.remove("is-open"),R.classList.remove("no-scroll"),c.innerHTML="",window.removeEventListener("keydown",V),c.removeEventListener("click",_)}function _(e){e.target===c&&S()}function V(e){e.key==="Escape"&&S()}function Z(e){e.preventDefault();const t=e.target,o=t.elements.name,s=t.elements.email,n=o.value.trim(),r=s.value.trim();t.querySelectorAll("input, textarea").forEach(d=>ee(d)),t.querySelectorAll(".error-text").forEach(d=>d.remove());let a=!1;n||(T(o,"Error text"),a=!0),r?te(r)||(T(s,"Invalid email"),a=!0):(T(s,"Error text"),a=!0),!a&&(b.success({message:"Registration successful!",position:"topRight",timeout:2500}),setTimeout(()=>S(),2500))}function T(e,t){e.classList.add("error"),e.dataset.originalPlaceholder||(e.dataset.originalPlaceholder=e.placeholder),e.placeholder=t;const o=document.createElement("p");o.classList.add("error-text"),o.textContent=t,e.insertAdjacentElement("afterend",o)}function ee(e){e.classList.remove("error"),e.dataset.originalPlaceholder&&(e.placeholder=e.dataset.originalPlaceholder)}function te(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".events-swiper");e&&new G(e,{modules:[z,U],slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},pagination:{el:".ev-pagination",clickable:!0,renderBullet:(t,o)=>`<li class="${o}" aria-label="Go to slide ${t+1}"></li>`,bulletClass:"ev-dot",bulletActiveClass:"ev-dot--active"},navigation:{nextEl:".events-swiper-btn-next",prevEl:".events-swiper-btn-prev"},watchOverflow:!0})});const oe=document.querySelectorAll(".event-btn");oe.forEach(e=>{e.addEventListener("click",()=>H(e.dataset.event))});(function(){const e=document.querySelector(".form");if(!e)return;const t=e.querySelector(".join-input"),o=e.querySelector(".join-btn");if(!t||!o)return;let s=t.closest(".input-wrap");s||(s=document.createElement("div"),s.className="input-wrap",t.parentNode.insertBefore(s,t),s.appendChild(t));let n=s.querySelector(".join-error");n||(n=document.createElement("p"),n.className="join-error",n.textContent="Error text",s.appendChild(n)),o.addEventListener("click",r=>{r.preventDefault(),s.classList.add("validated"),t.checkValidity()?(t.setAttribute("aria-invalid","false"),s.classList.remove("validated")):(t.setAttribute("aria-invalid","true"),t.reportValidity&&t.reportValidity(),t.focus())}),t.addEventListener("input",()=>{(t.value.trim()===""||t.checkValidity())&&(t.setAttribute("aria-invalid","false"),s.classList.remove("validated"))})})();const u=document.querySelector("#modal-backdrop"),D=document.body;async function se(e){try{let a=function(){u.classList.remove("is-open"),D.classList.remove("no-scroll"),u.innerHTML="",window.removeEventListener("keydown",P),u.removeEventListener("click",d)},d=function(g){g.target===u&&a()},P=function(g){g.key==="Escape"&&a()};const o=await(await fetch(`https://books-backend.p.goit.global/books/${e}`)).json(),s=`
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
    `;u.innerHTML=s,u.classList.add("is-open"),D.classList.add("no-scroll");const n=u.querySelector(".modal");n.querySelector(".modal-close").addEventListener("click",a),u.addEventListener("click",d),window.addEventListener("keydown",P);const m=n.querySelector(".bookQty");n.querySelector(".increaseQty").addEventListener("click",()=>{m.value=parseInt(m.value)+1}),n.querySelector(".decreaseQty").addEventListener("click",()=>{parseInt(m.value)>1&&(m.value=parseInt(m.value)-1)}),n.querySelector(".addToCart").addEventListener("click",()=>{console.log(`Додано до кошика: ${m.value} шт.`),b.success({title:"Успіх",message:`Додано до кошика: ${m.value} шт.`,position:"topRight",timeout:2500})}),n.querySelector(".buyNow").addEventListener("click",g=>{g.preventDefault(),b.info({title:"Покупка",message:"Дякуємо за покупку",position:"topRight",timeout:2500}),setTimeout(()=>{a()},2500)}),new W(n.querySelector(".accordion"),{duration:300,showMultiple:!1}),n.querySelector(".accordion").addEventListener("click",g=>{const M=g.target.closest(".accordion-header");if(!M)return;const O=M.querySelector(".accordion-icon use"),I=M.nextElementSibling;setTimeout(()=>{I&&I.offsetHeight>0?O.setAttribute("href","./src/img/icons-modal.svg#icon-above"):O.setAttribute("href","./src/img/icons-modal.svg#icon-down")},310)})}catch(t){console.error("Error fetching book:",t),b.error({title:"Помилка",message:"Не вдалося завантажити книгу",position:"topRight",timeout:2500})}}const C="https://books-backend.p.goit.global",ne="/books/category-list",re="/books/top-books",ie="/books/category",ae="/books/",ce=10,le=24,i={categoryToggleBtn:document.querySelector("[data-category-list-toggle]"),categoryMenuContainer:document.querySelector("[data-category-list]"),categoryListElement:document.querySelector(".books-categories-list"),booksContainer:document.querySelector(".js-books-list"),showMoreBtn:document.querySelector(".books-show-more-btn"),booksShowingCount:document.querySelector(".books-showing-count")};let v=[],p="All categories",f=[],L=0,y=0;function $(){return window.innerWidth<768?ce:le}async function B(e,t={}){try{const{data:o}=await J(e,t);return o}catch(o){throw b.error({title:"Error",titleColor:"#ffffff",message:`Request failed: <u>${o.message}</u>`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3,animateInside:!0,progressBar:!1,close:!1,closeOnClick:!0}),o}}async function de(){return(await B(`${C}${ne}`)).map(t=>t.list_name)}async function ue(){return(await B(`${C}${re}`)).flatMap(t=>t.books)}async function me(e){const t={category:e};return await B(`${C}${ie}`,{params:t})}async function ge(e){const t=await B(`${C}${ae}${e}`);return console.log(`Book details for ID ${e}:`,t),t}function fe(e){const t=`
    <li class="books-categories-item">
      <a href="#" class="books-categories-list-link ${p==="All categories"?"active":""}">All categories</a>
    </li>
  `,o=e.filter(s=>s!=="All categories").map(s=>`
        <li class="books-categories-item">
          <a href="#" class="books-categories-list-link ${s===p?"active":""}">${s}</a>
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
    `).join("")}function j(){i.categoryListElement.innerHTML=fe(v),i.categoryListElement.querySelectorAll(".books-categories-list-link").forEach(e=>{e.addEventListener("click",ve)})}async function K(){i.booksContainer.innerHTML="",i.showMoreBtn.classList.add("show-more-hidden"),p==="All categories"?f=await ue():f=await me(p),L=0,y=0,A()}function A(e=$()){const t=L*e,o=Math.min(t+e,f.length),s=f.slice(t,o);i.booksContainer.insertAdjacentHTML("beforeend",be(s)),y=o,i.booksShowingCount.textContent=`Showing ${y} of ${f.length}`,L++,y<f.length?i.showMoreBtn.classList.remove("show-more-hidden"):i.showMoreBtn.classList.add("show-more-hidden")}function pe(){const e=i.categoryMenuContainer.classList.toggle("is-open");i.categoryToggleBtn.classList.toggle("is-open"),e&&w()}async function ve(e){e.preventDefault();const t=e.target.textContent;if(p===t){i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open");return}p=t,j(),await K(),i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open")}async function ye(e){const t=e.target.closest(".learn-more-btn");if(t){const o=t.dataset.bookId;if(o)try{const s=await ge(o);se(s)}catch(s){alert("Failed to load book details. Please try again later."),console.error("Failed to show book details:",s)}}}async function he(){i.showMoreBtn.disabled=!0;try{A(4)}catch(e){b.error({title:"Error",message:`Failed to load books: ${e.message}`,backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}finally{i.showMoreBtn.disabled=!1}}async function ke(){v=await de(),v.includes("All categories")||(v=["All categories",...v]),j(),i.categoryToggleBtn.firstChild.textContent="Categories ",await K();let e=$();window.addEventListener("resize",()=>{const t=$();t!==e&&(e=t,i.booksContainer.innerHTML="",L=0,y=0,A(t))})}const k=i.categoryListElement,E=document.querySelector(".books-categories-scrollbar-thumb");function w(){const{scrollTop:e,scrollHeight:t,clientHeight:o}=k,s=o/t,n=Math.max(s*o,24),r=o-n,a=e/(t-o)*r||0;E.style.height=n+"px",E.style.top=a+"px"}k.addEventListener("scroll",w);window.addEventListener("resize",w);w();let q=!1,Y=0,Q=0;E.addEventListener("mousedown",e=>{q=!0,Y=e.clientY,Q=k.scrollTop,document.body.style.userSelect="none"});document.addEventListener("mousemove",e=>{if(!q)return;const{scrollHeight:t,clientHeight:o}=k,s=t-o,n=E.offsetHeight,r=o-n,d=(e.clientY-Y)/r*s;k.scrollTop=Q+d,w()});document.addEventListener("mouseup",()=>{q=!1,document.body.style.userSelect=""});i.categoryToggleBtn.addEventListener("click",pe);i.booksContainer.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");t&&(t.blur(),ye(e))});i.showMoreBtn.addEventListener("click",he);window.addEventListener("click",function(e){!i.categoryToggleBtn.contains(e.target)&&!i.categoryMenuContainer.contains(e.target)&&(i.categoryMenuContainer.classList.remove("is-open"),i.categoryToggleBtn.classList.remove("is-open"))});document.addEventListener("DOMContentLoaded",ke);document.addEventListener("DOMContentLoaded",()=>{const e=new Swiper("#feedbacks-slider",{slidesPerView:1,spaceBetween:24,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},watchOverflow:!0,navigation:{nextEl:".btn-next",prevEl:".btn-prev",disabledClass:"is-disabled",lockClass:"is-locked"},pagination:{el:".slider-dots",clickable:!0,bulletClass:"dot",bulletActiveClass:"dot--active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}}),t=document.querySelector(".btn-prev"),o=document.querySelector(".btn-next");function s(){if(t){const r=t.classList.contains("is-disabled");t.toggleAttribute("disabled",r),t.setAttribute("aria-disabled",String(r))}if(o){const r=o.classList.contains("is-disabled");o.toggleAttribute("disabled",r),o.setAttribute("aria-disabled",String(r))}}e.on("init",s),e.on("slideChange",s),e.on("reachBeginning",s),e.on("reachEnd",s),e.on("fromEdge",s),s();function n(r){r.key==="ArrowLeft"&&(r.preventDefault(),t?.click()),r.key==="ArrowRight"&&(r.preventDefault(),o?.click())}t?.addEventListener("keydown",n),o?.addEventListener("keydown",n)});new Swiper(".hero-swiper",{loop:!1,speed:400,slidesPerView:1,wrapperClass:"hero-swiper-wrapper",slideClass:"hero-slide",navigation:{nextEl:".hero-right-btn",prevEl:".hero-left-btn"}});const l=document.querySelector("[data-menu]"),h=document.querySelector("[data-menu-open]"),N=document.querySelector("[data-menu-close]"),we=document.querySelectorAll(".menu-nav-link"),F=e=>{document.body&&(document.body.style.overflow=e?"hidden":"")};h&&l&&h.addEventListener("click",()=>{l.classList.add("is-open"),l.removeAttribute("hidden"),F(!0),h.style.display="none"});const x=()=>{l&&(l.classList.remove("is-open"),l.setAttribute("hidden",""),F(!1),h&&(h.style.display="flex"))};N&&N.addEventListener("click",x);l&&l.addEventListener("click",e=>{e.target===l&&x()});we.forEach(e=>{e.addEventListener("click",x)});
//# sourceMappingURL=index.js.map
