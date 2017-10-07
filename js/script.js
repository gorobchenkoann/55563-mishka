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
var menu = document.querySelector(".top-menu");
var button = document.querySelector(".top-menu__toggle");


document.addEventListener("DOMContentLoaded", function(){
  menu.classList.remove("nojs");
  menu.classList.add("top-menu--closed");
  button.classList.add("top-menu__toggle--open");
});

button.addEventListener("click", function(e) {
  e.preventDefault();
  if (menu.classList.contains("top-menu--closed")) {
    menu.classList.remove("top-menu--closed");
    menu.classList.add("top-menu--opened");
  } else {
    menu.classList.remove("top-menu--opened");
    menu.classList.add("top-menu--closed");
  }
});

// всплывающая форма
var modal = document.querySelector(".modal");
var modal_form = document.querySelector(".modal__form");
var modal_button = document.querySelectorAll(".modal-button");
console.log(modal_button);

Array.from(document.querySelectorAll(".modal-button")).forEach(function(item){
  item.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "flex";
  });
});

modal.addEventListener("click", function(e) {
  modal.style.display = "none";
});

modal_form.addEventListener("click", function(e) {
  e.stopPropagation();
})
