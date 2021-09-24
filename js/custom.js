/* slobal $, jquery, alert */

$(document).ready(function () {
	$('.carousel').carousel({
		interval: 3000
	});
	// Show color Option Div When Click On The Gear
	$('.gear-check').click(function () {
		$('.color-option').fadeToggle () ; 
	});
	
	// Cahnge Theme Color on Click
	
	var colorLi= $(".color-option ul li");
     
	 colorLi
	.eq(0).css("backgroundColor","#e41b17").end()
	.eq(1).css("backgroundColor","#e426d5").end()
	.eq(2).css("backgroundColor","#009aff").end()
	.eq(3).css("backgroundColor","#ffd500") ;
 colorLi.click(function ()
			   {
				$("link[href*='theme']").attr("href", $(this).attr("data-value"));
			   });
	// scroll To TOP

});

// Loading Screen
		$(window).load(function ()
		{
																
		$(".loading-overlay .sk-cube-grid").fadeOut(2000,
	function()
			{
        $("body").css("overflow","auto");
		$(this).parent().fadeOut(2000,
	  function()
			{															

		$(this).remove();
			});

	     });
		});
// scroll To TOP
	var scrollButton = $('#scroll-top');
	$(window).scroll(function ()
         {
if($(this).scrollTop() >= 600)
        {
scrollButton.fadeIn();
	}
else{
	scrollButton.fadeOut();
	}
												
    });
scrollButton.click(function ()
{
$("html,body").animate({scrollTop:0},600);
		});
