setTimeout(() => {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A1e01fcb9e2d8c07c526bb53341fe31b72de6b512a0f40072987b74fc0b1c7dca&source=constructor';
  iframe.width = '1440';
  iframe.height = '400';
  iframe.allowFullscreen = true;
  iframe.loading = 'lazy';
  iframe.title = 'Карта с нашим местоположением';
  iframe.className = 'map__frame';
  document.getElementById('map-placeholder').appendChild(iframe);
}, 5000); // Загрузка iframe начнется через 5 секунд
