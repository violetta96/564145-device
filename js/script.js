  var btn = document.querySelector(".info-btn-contacts");
  var popup = document.querySelector(".modal");
  var overlay = document.querySelector(".modal-overlay");
  var close = popup.querySelector(".modal-close");
  var mapLink = document.querySelector(".info-map-link");
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-map-close");

  btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-overlay-show");
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-overlay-show");
  });

  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-map-show");
    overlay.classList.add("modal-overlay-show");
  });

  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-map-show");
    overlay.classList.remove("modal-overlay-show");
  });
