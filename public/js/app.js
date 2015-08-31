/*========================================
              CRUD FUNCTIONS
========================================*/
$(function() {
    pageLoad();
});

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

/*========================================
              BOOTSTRAP JS
========================================*/
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
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

/*========================================
              CARDS JS
========================================*/
$(function() {
  var cards = document.querySelectorAll(".card.effect__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }

  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})

/*========================================
              SHUFFLE JS
========================================*/
$(function () {
    var parent = $("#shuffle");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});

 $("#reset").click(function(){
    location.reload();
})