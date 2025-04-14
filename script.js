const globe = Globe()
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
  .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
  .pointAltitude(0.01)
  .pointColor(() => 'red')
  .pointRadius(0.15)
  .pointsData([]);

document.getElementById('globeViz').appendChild(globe());

// 🔄 Автоматическое обновление точек с сервера
async function fetchData() {
  try {
    const res = await fetch('http://localhost:5000/data');  // Адрес API
    const data = await res.json();

    const coords = data.map(item => ({
      lat: item.lat,
      lng: item.lon
    }));

    globe.pointsData(coords);
  } catch (err) {
    console.error('Ошибка при загрузке данных:', err);
  }
}

// Обновляем каждые 2 секунды
setInterval(fetchData, 2000);
fetchData();  // первичная загрузка
