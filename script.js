var currentHour = dayjs().hour()
console.log(currentHour)

$(function () {
$("#currentDay").text("The Date is:  " + dayjs().format("DD-MMM-YY"))

$(".saveBtn").on("click",function(){
  var BtnData = $(this).siblings(".description").val()
  var pikachu = $(this).parent().attr("id").split("-")[1]
  console.log(BtnData,pikachu)
  localStorage.setItem(pikachu,userData)
})
for(let i=8; i<=17; i++){
  var dataValue = localStorage.getItem(i) 
  $("#hour-"+i).children(".description").val(dataValue)
  if(i<currentHour){
    $("#hour-"+i).children(".description").addClass("past")
  }else if(i == currentHour){
    $("#hour-"+i).children(".description").addClass("present")
  }else{
    $("#hour-"+i).children(".description").addClass("future")
  }
}
});
$(".saveBtn").on("click",function(){
var BtnData = $(this).siblings(".description").val()
var pikachu = $(this).parent().attr("id").split("-")[1]
console.log(BtnData,pikachu)
localStorage.setItem(pikachu,BtnData)
});

