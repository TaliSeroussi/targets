var curr_lesson = 0;
var arr_lesson = [
    {
        number: 1
    },
    {
        number: 2
    },
    {
        number: 3 
    },
    {
        number: 4
    },
    {
        number: 5
    },
    {
        number: 6 
    },
    {
        number: 7
    }
];

const table_text = [
    {
        time: "הפתיחה אמורה להיות קצרה ולהימשך כ-5-10 דקות.",
        content: "פתיחה מורכבת מחלק/כל הסעיפים הבאים:<div></div>הצגת הנושאים ומטרות השיעור (למשל באמצעות ניהול דיון/משחק לעירור עניין).<div></div>המחשת/הדגמת הצורך בחומר הנלמד (על מנת לעורר עניין בשיעור).<div></div>קישור לנושאים קודמים שנלמדו (על מנת ליצור רצף הגיוני לחניכים)."
    },
    {
        time: "הגוף הוא החלק המרכזי, ולפיכך יהיה החלק בעל פרק הזמן הארוך ביותר (למשל כ-30 דקות).",
        content: "גוף מורכב מחלק/כל הסעיפים הבאים:<div></div>חלוקה לשלבים (לפי מטרות הביניים)- חלקו את השיעור כולו ליחידות קטנות שלכל אחת מהן פתיחה, גוף וסיכום. בעת כתיבת הגוף הדגישו את הפעלים החשובים במשפטים.<div></div>בדיקת הבנה של כל שלב תוך כדי השיעור.<div></div>קישורים בין השלבים- ליצירת רצף הגיוני ויכולת לראות תמונה כללית של החומר."
    },
    {
        time: "הסיכום הוא החלק הסופי והקצר ביותר בשיעור, הוא מיועד להימשך כ-5 דקות.",
        content: 'סיכום מורכב לפי חלק/כל הסעיפים הבאים:<div></div>חזרה על נקודות עיקריות- נצלו את הקשב הגבוה בסיכום כדי לחזור על נקודות קריטיות להבנת השיעור, או כאלה שהתגלו כבעייתיות במהלכו.<div></div>"אני מאמין"- סכמו את השיעור בנימה אישית שלכם על החומר (בכך תיתנו לחניך "זריקת מוטיבציה" בסוף השיעור).'
    }
];

let colored_parts = 1;


pop_changeTable = () => {
    // disable moving page
    disabledButton($(".control-button"), "none");
    $(".topic").css("pointer-events", "none");
    $(".table-button").on("click", function() {
      // the button had not been selected
      if (!$(event.target).hasClass("selected")) {
        $(event.target).addClass("selected")
        colored_parts++;
      }
      // switch text from the array
      $("#time").html(table_text[Number($(event.target).attr("id").slice(-1))- 1].time);
      $("#content").html(table_text[Number($(event.target).attr("id").slice(-1))- 1].content);
      // if all the three triangles are colored
        if(colored_parts === Object.keys(table_text).length) {
          disabledButton($(".control-button"), "auto");
          $(".topic").css("pointer-events", "auto");
          // add to the num of the parts so it won't enter the condition again
          colored_parts++;
        }
    });
  }
