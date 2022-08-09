const assessment_text = {
  text_1: "החומר- כתבו מהי רמת החומר, האם יש ידע מקדים הנדרש להבנתו, קשיים אפשריים של החניכים וכדומה.<br>המידע יעזור לכם להתכונן לשיעור (לדוגמה, אם אתם יודעים שיש הרבה חומר, תכינו אותו יותר זמן מראש).",
  text_2: "הלומד- כתבו את מאפייני הלומד (למשל גיל וסוג אוכלוסייה), קשיי למידה, השלב בו הוא נמצא בהכשרה, נקודות חוזק, חולשה וכדומה.<br>המידע יעזור להתאים את רמת השיעור לקהל היעד (לדוגמה, תדעו להשתמש בעזרים חזותיים ובמשלב לשוני נמוך יותר בשיעורים שמועברים לעולים חדשים).",
  text_3: "המלמד- כתבו מהי רמת השליטה שלכם בחומר, מידת ההיכרות עם החיילים, נקודות חוזק, חולשה וכדומה.<br>המידע יעזור להתאים את עצמכם להשגת מטרת השיעור (לדוגמה, אם קשה לכם ללמד ברצף הרבה חומר, תוכלו לנסות לשלב משחקים או למידה עצמית במהלך השיעור)."
}

const rules_text = {
  text_1: "נכון: החניך יפרט את חלקי הנשק.<br> לא נכון: המדריך יפרט את חלקי הנשק.",
  text_2: "נכון: החניך ירוץ 2000 מטר ב-10 דקות.<br> לא נכון: החניך ירוץ 2000 מטר.",
  text_3: "נכון: החניך יכתוב מערך על פי הכללים שנלמדו.<br> לא נכון: החניך יכתוב מערך היטב.",
  text_4: "נכון: החניך יסביר את מנגנון ה-M16.<br> לא נכון: החניך יבין את מנגנון ה-M16.",
  text_5: "נכון: החניך יפרק נשק על פי העקרונות שנלמדו.<br> לא נכון: החניך יתרגל פירוק נשק על פי העקרונות שנלמדו.",
  text_6: 'נכון:<br> 1. החניך יפרט סד"פ נשק.<br>2. החניך יתפעל נשק על פי העקרונות שלמד.<br> לא נכון: החניך יפרט סד"פ ויתפעל נשק.'
}

const texonomy_text = {
  text_1: "ידע- היכולת לשלוף מהזכירון מידע רלוונטי.<br>בכתיבת המטרה נשתמש בפעלים: יפרט, יגדיר, יציין, יזהה, ידקלם וכו'.",
  text_2: "הבנה- היכולת להסביר ולתרגם ידע.<br>בכתיבת המטרה נשתמש בפעלים: יסביר, יפרש, יגדיר במילים שלו, יתרגם וכו'.",
  text_3: "יישום- היכולת להשתמש בידע פשוט במצבים שונים, הדומים במידה רבה לאלו שנלמדו.<br>בכתיבת המטרה נשתמש בפעלים: יבצע, יתפעל, ישתמש וכו'.",
  text_4: "אנליזה- היכולת לראות את הפרטים כמכלול, לנתחם ולהפיק משמעויות.<br>בכתיבת המטרה נשתמש בפעלים: יאתר, יפריד, יסווג, יבדיל וכו'.",
  text_5: "סינתזה- היכולת ליצור מכלול שלם והגיוני מפרטים רבים, ולגבש פתרון/תוכנית מקורית.<br>בכתיבת המטרה נשתמש בפעלים: ירכיב, ימציא, יכתוב ,יתכנן, יבנה, ינסח וכו'.",
  text_6: "הערכה- היכולת לשפוט ולבחור בין אלטרנטיבות.<br>בכתיבת המטרה נשתמש בפעלים: יבחר, יעריך, ישפוט, ייתן ציון, יחליט, ישווה וכו'."
}

let clicked_items = 0;

// function pop_changeTriangle() {
//   // disable moving page
//   disabledButton($(".control-button"), "none");
//   $(".click-triangle").on("click", function() {
//     let triangle_num = $(event.target).attr("id").slice(-1);
//     // the triangle is colored (only once for each)
//     if ($("#triangle-" + triangle_num).css("opacity") !== "1") {
//       $("#triangle-" + triangle_num).css("opacity", "1");
//       clicked_items++;
//     }
//     // switch text from the array
//     $("#assessment .speech-bubble").html(triangle_text["triangle_" + triangle_num]);
//     // if all the three triangles are colored
//       if(clicked_items === Object.keys(triangle_text).length) {
//         disabledButton($(".control-button"), "auto");
//         ArrPages[nPage].robinText = 'כיאה ללוחם אמיץ כמוני, אני משתמש במשולש לח"מ- לומד, חומר ומלמד.<br>לחצו על כל אחד מהמשולשים שמרכיבים את החץ כדי לקרוא עליו.';
//         // add to the num of the triangles so it won't enter the condition again
//         clicked_items++;
//         console.log("loteh");
//       }
//   });
// }

function pop_speechBubble() {
  // disable moving page
  if (ArrPages[nPage].divName[0] !== "rules") {
    disabledButton($(".control-button"), "none");
    clicked_items = 0;
  }
  $("#" + ArrPages[nPage].divName[0] + " .change-speech-bubble").on("click", function() {

    let text_num = $(event.target).attr("id").slice(-1);
      // the triangle is colored (only once for each)
      if ($("#" + ArrPages[nPage].divName[0] +" .triangle-" + text_num).css("opacity") !== "1") {
        $("#" + ArrPages[nPage].divName[0] + " .triangle-" + text_num).css("opacity", "1");
        clicked_items++;
      }
    // switch text from the array
    $("#" + ArrPages[nPage].divName[0] + " .speech-bubble").html(eval(ArrPages[nPage].divName[0] + "_text")["text_" + text_num]);
    // if all the three triangles are colored
      if(clicked_items === Object.keys(eval(ArrPages[nPage].divName[0] + "_text")).length) {
        disabledButton($(".control-button"), "auto");
        // add to the num of the triangles so it won't enter the condition again
        clicked_items++;
      }
  });
}

function fixZindex() {
  $(".arrow-head").css("z-index", "0");
  $(".triangle").css("z-index", "2");
}
