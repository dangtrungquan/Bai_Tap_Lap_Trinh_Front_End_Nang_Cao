$(document).ready(function(){
	
  new WOW().init(); //Khởi tạo wow JS

  $(window).scroll(function(){

  	var scroll = $(window).scrollTop();
  	if(scroll > 100){
  		$(".black").css("background","blue");
  	}else
  	{
  		$(".black").css("background","#000000b3");
  	}
  });


});