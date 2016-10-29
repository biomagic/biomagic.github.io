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

$('.dropdown')
	.append('<span class="caret"></span>')
	.hover(function() {
	
		$(this)
		.removeClass('caret-right')
		.children('.sub-menu')
		.show()
		.animate({
		  height: $(this)
		  .children('ul')
		  .contents('li').length * parseInt($('.sub-menu > li').css('height')) + 'px'
		}, 150);

	}, function() {

		$(this)
		.addClass('caret-right')
		.children('.sub-menu')
		.animate({
		  height: '0'
		}, 150);

	});

});


