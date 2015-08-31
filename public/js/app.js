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

