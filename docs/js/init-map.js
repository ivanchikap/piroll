// initMap() - функция инициализации карты
function initMap() {
// Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
    let centerLatLng = new google.maps.LatLng(50.454613, 30.530709);
// Обязательные опции с которыми будет проинициализированна карта
    let mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 14               // Зум по умолчанию. Возможные значения от 0 до 21
    };
// Создаем карту внутри элемента #map
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);