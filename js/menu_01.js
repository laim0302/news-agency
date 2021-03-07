 $(function() {

 	$('.mobil-pagination-btn').click(function() {
		$('.mobil-pagination-btn').toggleClass('close-btn');
		
	 	$('.pagination__list').toggleClass('pagination__list_mobile');

  		// alert('HELLO');	
  	})
	
	$('.pagination__item').click(function() {
		$('.mobil-pagination-btn').toggleClass('close-btn');
		
	 	$('.pagination__list').toggleClass('pagination__list_mobile');

  		// alert('HELLO');	
  	})

});	
