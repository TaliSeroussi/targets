var numCorrectAns = 0;
var arrCorrectAns = [
    {
        correctAns: 4,
        right: '<span class="right">נכון!</span> דף רץ הוא דף עזר לשיעור שבו כתובות נקודות עיקריות, ואין חובה להשתמש בו',
        wrong: '<span class="wrong">לא נכון!</span> דף רץ הוא דף עזר לשיעור שבו כתובות נקודות עיקריות, ואין חובה להשתמש בו'
    }, 
    {
        correctAns: 3,
        right: '<span class="right">נכון!</span> אתם לוחמי חוד משובחים!',
        wrong: '<span class="wrong">לא נכון!</span> אולי לימוד ומידע הם לא חלק מהחוזקות שלכם...'
    }, 
    {
        correctAns: 1,
        right: '<span class="right">נכון!</span> מטרה תמיד מנוסחת כביצוע של הלומד ולא של המדריך',
        wrong: '<span class="wrong">לא נכון!</span> מטרה תמיד מנוסחת כביצוע של הלומד ולא של המדריך'
    }, 
    {
        correctAns: 4,
        right: '<span class="right">נכון!</span> גוף הוא החלק המרכזי בשיעור, פתיחה וסיכום יימשכו כ-5-10 דקות',
        wrong: '<span class="wrong">לא נכון!</span> גוף הוא החלק המרכזי בשיעור, פתיחה וסיכום יימשכו כ-5-10 דקות'
    }, 
    {
        correctAns: 1,
        right: '<span class="right">נכון!</span> לא כל שיעור מכיל תרגול/בחינה של החומר, ופעילות יצירתית היא מומלצת אך גם כן לא חובה',
        wrong: '<span class="wrong">לא נכון!</span> לא כל שיעור מכיל תרגול/בחינה של החומר, ופעילות יצירתית היא מומלצת אך גם כן לא חובה'
    }];

pop_americanQuestion = () => {
    // disabledButton($("#next"), "none");
    // lesson map
    if (Number(ArrPages[nPage].divName[0].slice(-1)) === 1) {
        $(`#topic-4 img`).attr("src", "assets/media/map_finish.svg"); 
    }
    $(`#${ArrPages[nPage].divName[0]} .flex-question`).on("click", function() { 
        $(`#${ArrPages[nPage].divName[0]} .speech-bubble`).css("display", "block");
        // if the user's answer is correct
        if ($(this).hasClass(`ans-${arrCorrectAns[Number(ArrPages[nPage].divName[0].slice(-1)) - 1].correctAns}`)) {
            // correct answer
            $(this).css({"border-color":"rgba(105,255,160)", "filter": "drop-shadow(0 0 4.25vw white)"});
            jQuery(this).find("img").attr("src", "assets/media/10תרגול מסכם/americ_right_select.svg");
            numCorrectAns++;
            $(`#${ArrPages[nPage].divName[0]} .flex-question`);
            $(`#${ArrPages[nPage].divName[0]} .speech-bubble`).html(arrCorrectAns[Number(ArrPages[nPage].divName[0].slice(-1)) - 1].right);
            ArrPages[nPage].robinText = arrCorrectAns[Number(ArrPages[nPage].divName[0].slice(-1)) - 1].right;
        } else {
            // wrong answer
            $(this).css("border-color", "rgba(255,123,123)"); 
            jQuery(this).find("img").attr("src", "assets/media/10תרגול מסכם/americ_wrong_select.svg");
            $(`#${ArrPages[nPage].divName[0]} .speech-bubble`).html(arrCorrectAns[Number(ArrPages[nPage].divName[0].slice(-1)) - 1].wrong);
            ArrPages[nPage].robinText = arrCorrectAns[Number(ArrPages[nPage].divName[0].slice(-1)) - 1].wrong;
            // correct answer
            $(`#${ArrPages[nPage].divName[0]} .ans-${arrCorrectAns[Number(ArrPages[nPage].divName[0].slice(-1)) - 1].correctAns}`).css({"border-color":"rgba(105,255,160)", "filter": "drop-shadow(0 0 4.25vw white)"});
            $(`#${ArrPages[nPage].divName[0]} .ans-${arrCorrectAns[Number(ArrPages[nPage].divName[0].slice(-1)) - 1].correctAns}`).find("img").attr("src", "assets/media/10תרגול מסכם/americ_right.svg");
        }
        $(`#${ArrPages[nPage].divName[0]} .flex-question`).off();
        disabledButton($("#next"), "auto");
        ArrPages[nPage].functions.pop();
        ArrPages[nPage].functions.push('disabledButton($("#next"), "auto")');
    });
}

disabledButton = (button, state) => {
    button.css("pointer-events", state);
    if (state === "none") {
        button.addClass("disabled");
    } else if (state === "auto") {
        button.removeClass("disabled");
    }  
}

theEnd = () => {
    $("#ending .speech-bubble").html(`<div class="big-font">סיימתם את הלומדה עם ${numCorrectAns}/5 תשובות נכונות.<div class="scape"></div><div class="text-align bigger-font">כל הכבוד!</div></div>`);
}
