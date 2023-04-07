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
   
   $("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
  $("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
  $("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
  $("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
  $("#hour-13").children(".description").val(localStorage.getItem("hour-13"));
  $("#hour-14").children(".description").val(localStorage.getItem("hour-14"));
  $("#hour-15").children(".description").val(localStorage.getItem("hour-15"));
  $("#hour-16").children(".description").val(localStorage.getItem("hour-16"));
  $("#hour-17").children(".description").val(localStorage.getItem("hour-17"));
;


});



// Adds time to page
   var today = dayjs();
$("#currentDay").text(today.format('dddd, MMMM D YYYY'));
  console.log(today)


