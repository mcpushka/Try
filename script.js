const globe = Globe()
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
  .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
  .pointAltitude(0.01)
  .pointColor(() => 'red')
  .pointRadius(0.15)
  .pointsData([
    { lat: 51.5, lng: -0.1 },  // Лондон
    { lat: 40.7, lng: -74.0 }, // Нью-Йорк
    { lat: 55.75, lng: 37.6 }, // Москва
  ]);

document.getElementById('globeViz').appendChild(globe());
