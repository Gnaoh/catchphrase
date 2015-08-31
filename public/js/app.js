//JAVSCRIPT FOR CRUD//
$(function() {
    pageLoad();
});

//Functions//

function pageLoad() {
  getWords();
  $("#new-word-form").on("submit", function(e){
    e.preventDefault();
    $.post("/phrases", $(this).serialize())
      .done(function(res){
        getWords();
        $("#new-word-form")[0].reset();
      });
  });
}

function getWords() {
  $.get("/phrases", function(res){
    var words = res.reverse();
    renderWords(words)
  });
}

function renderWords(words) {
  template = _.template($("#words-template").html());
  catchPhrases = words.map(function(word) {
    return template(word);
  });
  $("#phrase-ul").html("");
  $("#phrase-ul").append(catchPhrases);
}

function deleteWord(context) {
  var wordId = $(context).data()._id;
  $.ajax({
    url: '/phrases/' + wordId,
    type: 'DELETE',
    success: function(res) {
      getWords();
    }
  });
}

function updateWord(){
    $('#update-word').click(function(e){
        e.preventDefault();
    });
    var updatePhrase = $('#phrase-word-input').val();
    var updateDef = $('#phrase-definition-input').val();
    var updatedWord = {word: updatePhrase, definition: updateDef};

    $.ajax({
        url: "/phrases/",
        type: "PUT",
        data: updatedWord,
        success: function(){
            window.location.reload();
        }
    })
}

// JAVASCRIPT CARD //
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//CARDS//
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


