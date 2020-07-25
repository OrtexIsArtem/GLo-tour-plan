const init = () => {
  const myMap = new ymaps.Map('map', {
    center: [55.75430380, 37.62418725],
    zoom: 14
  })
  // создание метки
  const myPlacemark = new ymaps.Placemark([55.75399400, 37.62209300], {}, {
    preset: 'islands#redIcon'
  })
  // Добавление метки на карту
  myMap.geoObjects.add(myPlacemark)
}
ymaps.ready(init);