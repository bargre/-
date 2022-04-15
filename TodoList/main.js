$(function(){
//1.할일추가 팝업에 내용 입력하고 '추가하기버튼'누르면 날짜에 해당하는 목록에 추가됨.(오늘, 내일 할일만 해당)
//2. 할일목록(todo-list)을 체크하면 회색으로 색상변경(.todo-list li.on)

$(".check-list").click(function(){
  $(this).parent("li").toggleClass("on");
});

$(".btn-add").click(function(){
  $(".popup").addClass("active");
});

$(".popup-bg, .btn-cancle").click(function(){
  $(".popup").removeClass("active");
});


});//end
