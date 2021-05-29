$(document).ready(function(){
	
	// Radio btn form
	$('.form__label-radio').on('click', function() {
		
		let $this = $(this),
			$formLabel = $('.form__radio-group');

		$formLabel.removeClass('active');

		if (!$this.closest($formLabel).hasClass('active')) {
			$this.closest($formLabel).addClass('active');
		}
	});
});