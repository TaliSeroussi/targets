// represents the exerType number in the array
var curr_bow = 0;
var arr_bow = [
    {
        number: 1,
        bowTitle: "לא מנוסחת כביצוע של הלומד"
    },
    {
        number: 2, 
        bowTitle: "לא מכילה מדד כמותי"
    },
    {
        number: 3, 
        bowTitle: "לא מכילה מדד איכותי"
    },
    {
        number: 4,
        bowTitle: "הביצוע לא ניתן למדידה ותצפית"
    },
    {
        number: 5, 
        bowTitle: "לא מגדירה את עצם הלמידה"
    },
    {
        number: 6, 
        bowTitle: "לא מפרידה בין רמות חשיבה"
    },
];

var curr_quiver = 0;
var arr_quiver = [
    {
        number: 1,
    },
    {
        number: 2, 
    },
    {
        number: 3, 
    },
    {
        number: 4,
    }
];

const arrDropDown = ["מטרת העל", "מטרות ביניים", "חניך", "יסביר", "חניך", "3", "יחבוש"];
var currDropDown = 0;

// function that activates the drop-downs and shows the check button
dropDownInit = () => {
    for (let i = 1; i <= arrDropDown.length; i++) {
        $(`#drop-down-${i}`).selectmenu();
    }
    $("#prev").css("display", "none");
    $("#next").css("display", "none");
    $("#check").css("display", "block");
    $("#check").on("click", checkDropDown);
}

checkDropDown = () => {
    for (let i = 1; i <= arrDropDown.length; i++) {
        // if the border is not green
        if ($(`#drop-down-${i}-button.ui-button`).css("border-color") !== "rgb(52, 240, 93)") {
            if ($(`#drop-down-${i}-button .ui-selectmenu-text`).text() === arrDropDown[i-1]) {
                $(`#drop-down-${i}-button.ui-button`).css("border-color", "rgb(52, 240, 93)");
                currDropDown++;
                $(`#drop-down-${i}`).selectmenu("disable");
                $(`#drop-down-${i}-button.ui-button`).css("opacity", "1");
            } else if ($(`#drop-down-${i}-button .ui-selectmenu-text`).text() !== "בחר/י...") {
                $(`#drop-down-${i}-button.ui-button`).css("border-color", "rgb(255, 113, 132)");
            } 
        }
    }
        feedbackDropDown();
}

feedbackDropDown = () => {
    if (currDropDown === arrDropDown.length) {
        $("#prev").css("display", "block");
        $("#next").css("display", "block");
        $("#check").css("display", "none");
        $("#dropdown-exer .speech-bubble").text("דייקתם!");
        $("#dropdown-exer .speech-bubble").css("font-size", "4rem");
        ArrPages[nPage-1].functions.push('pop_removeExer(1)');
    } else {
        $("#dropdown-exer .speech-bubble").text("לא דייקתם... נסו שוב!");
        $("#dropdown-exer .speech-bubble").css("font-size", "3rem");
    }
}
