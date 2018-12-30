  var btn = document.querySelector(".info-btn-contacts");
  var popup = document.querySelector(".modal");
  var overlay = document.querySelector(".modal-overlay");
  var close = popup.querySelector(".modal-close");
  var mapLink = document.querySelector(".info-map-link");
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-map-close");
  var feedbackText = popup.querySelector(".feedback-text");
  var feedbackForm = popup.querySelector(".feedback-form");
  var feedbackEmail = popup.querySelector(".feedback-email");
  var commentArea = popup.querySelector(".comment-area");

  btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-overlay-show");
    feedbackText.focus();
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

  feedbackForm.addEventListener("submit", function (evt) {
    if (!commentArea.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      mapPopup.classList.remove("modal-map-show");
      popup.classList.remove("modal-show");
      overlay.classList.remove("modal-overlay-show");
    }
  });
