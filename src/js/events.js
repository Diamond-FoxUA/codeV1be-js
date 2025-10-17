import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const swiperEl = document.querySelector('.events-swiper');
  if (!swiperEl) return;

  new Swiper(swiperEl, {
    modules: [Navigation, Pagination, Keyboard],
    slidesPerView: 1,
    spaceBetween: 24,

    breakpoints: {
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 3 },
    },

    pagination: {
      el: '.ev-pagination',
      clickable: true,
      renderBullet: (index, className) =>
        `<li class="${className}" aria-label="Go to slide ${index + 1}"></li>`,
      bulletClass: 'ev-dot',
      bulletActiveClass: 'ev-dot--active',
    },

    navigation: {
      nextEl: '.events-swiper-btn-next',
      prevEl: '.events-swiper-btn-prev',
    },

    keyboard: {
      enabled: true,
    },

    watchOverflow: true,
  });
});

// =================== modal open ===================

const backdrop = document.getElementById('modal-backdrop');

function openModal(eventTitle) {
  let modal = document.querySelector('.modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.classList.add('modal');

    modal.innerHTML = `
            <button class="modal-close" aria-label="Close modal">&times;</button>
            <h2 class="modal-title">Register for Event</h2>
            <p class="event-title">${eventTitle}</p>
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
        `;
    backdrop.appendChild(modal);

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
  } else {
    modal.querySelector('.event-title').textContent = eventTitle;
  }

  backdrop.classList.add('is-open');
  document.body.classList.add('no-scroll');

  // Закриття по кліку на бекдроп поза модалкою
  backdrop.addEventListener('click', function handler(e) {
    if (e.target === backdrop) closeModal();
    backdrop.removeEventListener('click', handler);
  });
}

function closeModal() {
  backdrop.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

// Прив'язуємо кнопки
const registerButtons = document.querySelectorAll('.event-register-btn');
registerButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const eventTitle = btn.dataset.event;
    openModal(eventTitle);
  });
});
