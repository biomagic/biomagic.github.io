$(document).ready(function() {

var $elements = $("input[name='tabs'] + label");
var $tab = $('.tab');;

$elements.on('click', function() {
	for(var i in $elements) {
		if ($elements[i] == this) {
			$tab.removeClass("visible");
			$(".tab:eq(" + i + ")").addClass("visible");
		}
	}
});

});