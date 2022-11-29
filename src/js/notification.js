/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */
const NOTIFICATION_DELAY = 3000;

const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);

showNotification();

/*
 * Функции
 */
function onNotificationClick() {
  hideNotification();
}

function showNotification() {
  refs.notification.classList.add('is-visible');

  setTimeout(() => {
    console.log('закривеємот алерт');
    // hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
}
