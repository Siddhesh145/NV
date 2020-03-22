$('.navbar-toggler').click(function(){
		$(this).parent().toggleClass('menuopen');
	 })
     $('.slick-slider').bxSlider({
          pager:true,
          controls:false
     });
     $(".sideribbon img").click(function(e){
     	e.stopPropagation();
     	$(this).parent().toggleClass('open');
     	//$(".ribbonform").toggle();
     });