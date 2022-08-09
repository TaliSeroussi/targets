var setIntervalExplanation = null;

// the game of dragging arrow at the opening
function openingGame() {
    // arrow draggable
    $("#opening-game .drag-arrow").draggable({
      revert: "invalid",
      revertDuration: 200,
      containment: "parent"
    });
    // for more then one time
    $("#opening-game .drag-arrow").draggable("enable");
    // grass dropabble
    $("#opening-game .drop-grass").droppable({
      tolerance: "touch",
      drop: function(e,ui) {
        ui.draggable.draggable("disable");
        // animation to put the arrow in place
        ui.draggable.animate({top: "45vw", left: "-66vw"}, 200, function() {
          // in the end of the animation moving to the next page
          setTimeout(function(){
            $("#opening-game .drag-arrow").css({"left": "-2vw","top": "36.6vw"});
            $("#opening-game").css("display", "none");
            nPage++;
            movePage();
            }, 1000);
        });
      }
    });
  }
  
  // bubble speech animation at question of the game
  function pop_openingGameQuestion() {
    // the user won't be able to move page until the animation is done
    $(".control-button").css("pointer-events", "none");
    setTimeout(function(){
      $("#general-opening-game .speech-bubble").html("כל הכבוד! עזרתם לי לפתור את החידה!<br>רגע... איזו חידה?");
    }, 1000);
    setTimeout(function(){
      $("#general-opening-game .speech-bubble").html("כל הכבוד! עזרתם לי לפתור את החידה!<br>רגע... איזו חידה?<br>האם הרגשתם שהזזת החץ הייתה פעולה <b>חסרת תועלת<b>?");
      // the user may move page
      $(".control-button").css("pointer-events", "auto");
    }, 2000);
    // next time the user will return to the page, the text will be the text after animation
    ArrPages[nPage].robinText = "כל הכבוד! עזרתם לי לפתור את החידה!<br>רגע... איזו חידה?<br>האם הרגשתם שהזזת החץ הייתה פעולה <b>חסרת תועלת<b>?";
  }
  
  function clearIntervalExplanation(){
    if (setIntervalExplanation !== null) {
      // end animation so it won't keep moving
      $("#opening-game-explanation .drag-arrow").finish();
      $("#arrows-numbers").finish();
      clearInterval(setIntervalExplanation);
    }
  }
  
  // animation of arrow moving to explain the math exer
  function openingGameExplanation() {
    // arrow
    $("#opening-game-explanation .drag-arrow").delay(300).animate({top: "45vw", left: "-66vw"}, 1000).delay(300).animate({top: "36.6vw", left: "-2vw"}, 1000);
    // numbers
    $("#arrows-numbers").delay(300).fadeToggle(500, function() {
      $("#arrows-numbers").text("1+0 = 1");
    }).fadeToggle(500).delay(300).fadeToggle(500, function() {
      $("#arrows-numbers").text("110 = 7");
  }).fadeToggle(500);
  }
  
  // the animation of opening page
  function pop_opening() {
    $("#play").animate({left: "15vw"}, 600, "swing");
    $("#about-button").delay(500).animate({opacity: "10"}, 1000, "swing");
  }

// about-button
// prev button usually takes one page back
// but on the first content page we don't want the user to see the "about" page if he comes backwards
// so the prev button needs to take the user 2 pages back and not only 1
// this function changes the amount of pages the user goes back in accordance with parameter "page"
function goTwoBack(page) {
    $("#prev").off("click");
    pop_buttons($("#prev"), page, "add");
}

// in the first time the user reaches the opening page, the amount of pages that "prev" goes back has never changed (1)
// but after the user reaches the first content page, it changes to 2 (because of the "about" page).
// therefore only after it changes it needs to be changed back.
function pop_goTwoBack_opening() {
    ArrPages[nPage-2].functions.push('goTwoBack(-1)');
}
