if ($("#baraja-el").length ) {
  $(function() {

    var $el = $('#baraja-el'),
      baraja = $el.baraja();

    // navigation
    $('#baraja-prev').on('click', function(event) {
      baraja.previous();
      $('.baraja-container li').each( function(){
        if ($(this).css('z-index') === "1000") {
          $(this).addClass('visited');
        }
      });
    });

    $('#baraja-next').on('click', function(event) {
      baraja.next();
      $('.baraja-container li').each( function(){
        if ($(this).css('z-index') === "1010") {
          $(this).addClass('visited');
        }
      });
    });

    $('.baraja-container').hover(function(event) {

      $(this).toggleClass('open');
      if($(this).hasClass('open')){
        baraja.fan( {
          speed: 400,
          easing: 'ease-out',
          range: 80,
          direction: 'right',
          origin: {x:0, y:0},
          center: true
        });
      }
      else {
        baraja.close();
      }
    });

    $('.baraja-container li').click(function() {
      $(this).addClass('visited');
    });
  });
}

$(document).ready(function(event) {
    baraja.fan( {
    speed: 400,
    easing: 'ease-out',
    range: 80,
    direction: 'right',
    origin: {x:0, y:0},
    center: true
  });
});