(function ($) {
	"use strict";

    jQuery(document).ready(function($){
	
	$('.project-tittle li').on('click', function(){
		
		$(".project-tittle li").removeClass("active");
		$(this).addClass("active");
		
		var selector =$(this).attr('data-filter');
		$('.project-list').isotope({
			
			filter:selector
		});
	});
	//code for popup
	 $(".pop-up").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
     


    jQuery(window).load(function(){

       jQuery(".project-list").isotope();
	   
    });


}(jQuery));	