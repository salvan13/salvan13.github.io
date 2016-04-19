window.addEventListener('load', function() {
  var main = document.querySelector('main');
  var deg = 0;
  var update = function() {
    deg += 10;
    if(CSS.supports("filter", "hue-rotate(1deg)")) {
      main.style.filter = "hue-rotate(" + deg + "deg)";
    } else if(CSS.supports("-webkit-filter", "hue-rotate(1deg)")) {
      main.style.webkitFilter = "hue-rotate(" + deg + "deg)";
    }
  };
  update();
  setInterval(update, 200);
});
