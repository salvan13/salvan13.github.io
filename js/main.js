window.addEventListener('load', function() {
  var main = document.querySelector('main');
  var deg = 0;
  var update = function() {
    deg += 10;
    main.style.filter = "hue-rotate(" + deg + "deg)";
  };
  update();
  setInterval(update, 200);
});
