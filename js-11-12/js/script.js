$(function() {			

// Selectator

	$('#activate_selectator1').click(function () {

		if ($('#select1').data('selectator') === undefined) {
			$('#select1').selectator({
				labels: {
					search: 'Search here...'
				}
			});
			$('#activate_selectator1').val('Cancel');
			$('#selectator_select1').click();
		} else {
			$('#select1').selectator('destroy');
			$('#activate_selectator1').val('Search');
		}
	});

// Dropdown

$('.dropdown').append('<span class="caret"></span>');

$('.dropdown').hover(function() {

	$(this).children('.sub-menu').show();

	var $liHeight = $(this).children('ul').contents('li').length * parseInt($('.sub-menu > li').css('height'));

	$(this).children('.sub-menu').css({
		height: 0
	});

	$(this).removeClass('caret-right');
	
	$(this).children('.sub-menu').animate({
	  height:  $liHeight + 'px'
	}, 150);


	}, function() {
	
	$(this).addClass('caret-right');
	
	$(this).children('.sub-menu').animate({
	  height: '0'
	}, 150);

	$(this).children('.sub-menu').css({
		overflow: 'hidden'
	});

	});


});


