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

	// Custom select dropdown
	$('.subs-wrapper').each(function(){

		let $input = $(this).find('input'),
			$dropDown = $(this).find('ul');
	
		$(this).on('click', function() {
			$dropDown.stop().slideToggle();
		});
	
		$dropDown.on('click', 'li', function() {
			$input.val($(this).text());
		});
	});
});