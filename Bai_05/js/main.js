$(document).ready(function(){
	
  new WOW().init(); //Khởi tạo wow JS

  //Kiem tra xem co bao nhiu anh 
  var SoLuongAnh = $('.slideanh img').length;
  
  // them mot the html vao vi tri bat ky
  $('.slideanh').append("<img src='' class='anh' >");
  // xu ly click vao nut dieu huong
  var dem  = 0;

  $('.phai').click(function(){
  	
  	$(this).parent().prev().children('.anh').attr({src:$('.slideanh img:nth-child('+dem+')').attr('src')});

  	if(dem == SoLuongAnh) { dem = 0; };
  	dem++;	
  });

  $('.trai').click(function(){
  	
  	$(this).parent().prev().children('.anh').attr({src:$('.slideanh img:nth-child('+dem+')').attr('src')});

  	if(dem == SoLuongAnh) { dem = 0; };
  	dem++;
  });


  //Click vao nut quickviewto
  $('.quickview').click(function(){
     $(this).parent().parent().next().next().addClass('hienlen');
     $('.den').addClass('hienlen');
  });

  $('.nutx, .den').click(function(){
  	$('.quickviewto').removeClass('hienlen');
    $('.den').removeClass('hienlen');
  });

  //click vao nut esc tren ban phim  
  $(document).keyup(function(e) {
    if (e.keyCode === 27){
    	$('.quickviewto').removeClass('hienlen');
    	$('.den').removeClass('hienlen');
 	}
  });

});