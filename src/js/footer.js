// feedbacks-footer-form.js
// - Кнопка активна на старті.
// - Якщо щось введено і воно НЕвалідне → інпут стискається до 26px, показуємо "Error text", кнопка disabled.
// - Якщо порожньо або валідно → інпут 48px, помилка ховається, кнопка enabled.
// - Повідомлення стоїть ПІД інпутом завдяки обгортці .input-wrap (створюємо її в JS).

(function () {
  const forms = document.querySelectorAll('.form');
  if (!forms.length) return;

  forms.forEach(formEl => {
    const input = formEl.querySelector('.join-input');
    const btn   = formEl.querySelector('.join-btn');
    if (!input || !btn) return;

    // 1) Створюємо .input-wrap, якщо її немає
    let wrap = input.closest('.input-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'input-wrap';
      // Вставляємо wrap на місце інпута і переносимо сам інпут всередину
      input.parentNode.insertBefore(wrap, input);
      wrap.appendChild(input);
    }

    // 2) Створюємо елемент помилки під інпутом, якщо його ще немає
    let errorEl = wrap.querySelector('.join-error');
    if (!errorEl) {
      errorEl = document.createElement('p');
      errorEl.className = 'join-error';
      errorEl.textContent = 'Error text';
      // Базові стилі (на випадок, якщо в CSS ще не додані)
      errorEl.style.display = 'none';
     
      wrap.appendChild(errorEl);
    }

    // 3) Константи розмірів
    const NORMAL_HEIGHT  = '48px';
    const NORMAL_PADDING = '12px';
    const ERROR_HEIGHT   = '26px';
    const ERROR_PADDING  = '4px 12px';

    // 4) Оновлення стану
    function updateState() {
      const val = input.value.trim();
      const isEmpty = val === '';
      const isValid = input.checkValidity ? input.checkValidity() : true;

      // Кнопка: увімкнена завжди, окрім випадку "щось введено і невалідно"
      btn.disabled = !isEmpty && !isValid;

      // aria
      input.setAttribute('aria-invalid', String(!isEmpty && !isValid));

      if (!isEmpty && !isValid) {
        // Помилка: під інпутом, інпут стискаємо
        input.style.height  = ERROR_HEIGHT;
        input.style.padding = ERROR_PADDING;
        errorEl.style.display = 'block';
      } else {
        input.style.height  = NORMAL_HEIGHT;
        input.style.padding = NORMAL_PADDING;
        errorEl.style.display = 'none';
      }
    }

    // 5) Початкові стани
    btn.disabled = false; // кнопка активна на старті
    // Плавність зміни висоти/падінгів
    input.style.transition = (input.style.transition ? input.style.transition + ', ' : '')
      + 'height .15s ease, padding .15s ease';

    updateState();

    // 6) Обробники
    input.addEventListener('input', updateState);
    input.addEventListener('blur',  updateState);

    const htmlForm = input.closest('form');
    if (htmlForm) {
      htmlForm.addEventListener('submit', (e) => {
        if (!input.checkValidity()) {
          e.preventDefault();
          if (typeof input.reportValidity === 'function') input.reportValidity();
          updateState();
        }
      });
    }
  });
})();
