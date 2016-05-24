$(function() {
	//flickity plugin (homepage)
	$('.banner-slider').flickity({
		wrapAround: true,
		imagesLoaded: true
	});

	//shopping cart counter
	$('.btn-buy').on('click', function() {
		$(this).toggleClass('add-to-cart');

		var buyingCount = $('.btn-buy.add-to-cart').length;
		$('.num').text(buyingCount);
	})
	
    //add .appear (opacity:1;) to img.overlay-image
    $('.fa-eye, div.featured-item.active::before').on('click', function(){
  		$('img.overlay-image').toggleClass('appear');
    });

    //smoothScroll Plugin
    $('nav.main a').smoothScroll({
    	speed: 400
    });

}); 