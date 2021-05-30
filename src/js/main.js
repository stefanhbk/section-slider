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
	$('.subs-wrapper').each(function() {

		let $input = $(this).find('input'),
			$dropDown = $(this).find('ul');
	
		$(this).on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();

			$dropDown.stop().slideToggle();
		});
	
		$dropDown.on('click', 'li', function() {
			$input.val($(this).text());
		});
	});

	$('body').on('click', function(e) {

		if(!$(e.target).is('.subs-wrapper') && !$('.subs-wrapper__list').is(':hidden')) {
			$('.subs-wrapper').find('ul').slideToggle();
		}
	})

	// Add to cart
	let $counter = $('.add-to-cart .counter__value'),
		$counterValue = parseInt($counter.val()),
		$decreaseValue = $('.add-to-cart .counter__decrease'),
		$increaseValue = $('.add-to-cart .counter__increase');

	$decreaseValue.on('click', function() {
		if($counterValue == 0) {
			return;
		} else {
			$counterValue--;
			$counter.val($counterValue);
		}
	});

	$increaseValue.on('click', function() {
		$counterValue++;
		$counter.val($counterValue);
	});

	// Flickity slider config
	$('.slider-section').flickity({
		// options
		cellAlign: 'left',
		contain: true,
		pageDots: false
	});
});