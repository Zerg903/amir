
(function () {

  var options = {
    history: false,
    focus: false,
    bgOpacity: 0.9,
    showAnimationDuration: 0,
    hideAnimationDuration: 0
  };

  window.openPhotoSwipe = function (items) {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

}());
