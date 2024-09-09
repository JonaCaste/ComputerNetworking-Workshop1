document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    let options = {
        numVisible: 1,
        dist: 0,
        fullWidth: true,
        indicators: true
    }
    M.Carousel.init(elems, options);
  });