(() => {
  //console.log("SEAF fired");

  //variables
  var TopBtn = document.querySelector('#backToTop');

  //functions
  function trackScroll() {
    //console.log( 'top: '  + (window.pageYOffset || document.documentElement.scrollTop) + ' ' + 'left: ' + (window.pageXOffset || document.documentElement.scrollLeft) );
    var scrolled = window.pageYOffset;
    if (scrolled > 40) {
      TopBtn.style.display = ("block");
    }
    if (scrolled < 40) {
      TopBtn.style.display = ("none");
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -20);
      setTimeout(backToTop, 0);
    }
  }

  //event listeners
  window.addEventListener('scroll', trackScroll);
  TopBtn.addEventListener('click', backToTop);


  document.getElementById(id).style.property
})();
