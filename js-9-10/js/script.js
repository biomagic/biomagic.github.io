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

// Checkboxes



});


