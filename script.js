// Vars i will use
var currentDayEl = $("#currentDay");
var presentTime = dayjs()


//saves button to local storage
$(".saveBtn").click(function () {
var userInput = $(this).siblings("textarea").val();
var timeBlockId = $(this).parent().attr("id");
localStorage.setItem(timeBlockId, userInput);
console.log();
});


//changes block color
$(".time-block").each(function (i, obj) {
   var elementTime = parseInt($(obj).data());
   var presentTimeInt = parseInt(presentTime);
   if (elementTime === presentTimeInt) {
      $(obj).addClass("present");
      $(obj).removeClass("future");
      $(obj).removeClass("past");
   }
   else if (elementTime < presentTime) {
   $(obj).addClass("past");
   $(obj).removeClass("future");
   $(obj).removeClass("present");
   }
   else {
      $(obj).addClass("future");
      $(obj).removeClass("future");
      $(obj).removeClass("past");
   }
});



// Adds time to page
   var today = dayjs();
$("#currentDay").text(today.format('dddd, MMMM D YYYY'));
  console.log(today)


  Start()