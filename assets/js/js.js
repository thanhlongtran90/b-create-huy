$(document).ready(function(){
  $('.content-slider').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  infinite: true,
	  // autoplay: true,
	  // autoplaySpeed: 2000,
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		      	centerMode: false,
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
$('.menu-btn').click(function(event) {
	$(this).parent().toggleClass('active');
	// $(this).parent().addClass('active');
});


});