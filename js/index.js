			AOS.init();
			
			$('[data-aos]').each(function(){ $(this).addClass("aos-init"); });
		
			$(document).ready(function() {
				$("#fullpage").fullpage({
					anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage', '8thPage'],
					navigation: true,
					navigationPosition: 'right',
					navigationTooltips: ['First page', 'Second page', 'Third and last page'],
					onLeave: function(){
						$('.section [data-aos]').each(function(){
							$(this).removeClass("aos-animate")
						});
					},
					onSlideLeave: function(){
						$('.slide [data-aos]').each(function(){
							$(this).removeClass("aos-animate")
						});
					},
					afterSlideLoad: function(){
						$('.slide.active [data-aos]').each(function(){
							$(this).addClass("aos-animate")
						});
					},
					afterLoad: function(){
						$('.section.active [data-aos]').each(function(){
							$(this).addClass("aos-animate")
						});
					}
				});
			});