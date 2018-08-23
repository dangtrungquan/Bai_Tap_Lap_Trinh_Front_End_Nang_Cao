$(document).ready(function(){
	
  new WOW().init(); //Khởi tạo wow JS


	var $hieuung = $('.noidung').isotope({
	  itemSelector: '.khoianh',
	  layoutMode: 'masonry'
	});

	// layout Isotope after each image loads
	$hieuung.imagesLoaded().progress( function() {
	  $hieuung.isotope('layout');
	});

	// XU LY NUT DANH MUC
	$('.danhmuc a').click(function(){
		$('.danhmuc a').removeClass('duocchon');
		$(this).addClass('duocchon'); //het phan them class duoc chon

		var tendanhmuc  = $(this).attr('href');
		//console.log(tendanhmuc);
		//Tien hanh loc
		//$grid.isotope({ filter: '.metal' })
		$hieuung.isotope({ filter: tendanhmuc })


		return false;// khong cho href cua the a link sang trang khac
	});

});