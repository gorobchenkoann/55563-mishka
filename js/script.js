// карта
function init() {

  var coordinates = {lat: 59.9387942, lng: 30.3230833};

  var map = new google.maps.Map(document.querySelector(".contacts__map"), {
    center: coordinates,
    zoom: 17
  });

  var image = {
    url: "img/icon-map-pin.svg",
    size: new google.maps.Size(67, 100)
  }

  var marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image
  });

}

// меню
// var menu = document.querySelector(".top-menu");
// var button = document.querySelector(".page-header__toggle");

// document.addEventListener("DOMContentLoaded", function(){
//   menu.classList.add("top-menu--closed");
//   button.classList.add("page-header__toggle--open");
// });

// button.addEventListener("click", function(e) {
//   button.classList.toggle("page-header__toggle--open");
//   button.classList.toggle("page-header__toggle--close");
//   menu.classList.toggle("top-menu--closed");
//   menu.classList.toggle("top-menu--opened");
// });
