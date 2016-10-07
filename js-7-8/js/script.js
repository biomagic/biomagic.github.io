$(document).ready(function() {

// View selected tab

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

// View tooltips

var $inputs = $(".input-box__input");
var $pEl;
var $title;
var $button = $(".input-box__button");

$inputs.on('mouseover', function() {
	$title = $(this).attr("title");
	$(this).attr("title", "");	
	$pEl = $(this).next();
	$pEl.text($title);

})

$inputs.on('mouseleave', function() {
	$pEl.empty();
	$(this).attr("title", $title);
})

$button.on('click', function(e) {
	e.preventDefault();
	for(var i in $inputs) {
		$title = $($inputs[i]).attr("title");
		$pEl = $($inputs[i]).next();
		console.log(i);
		$pEl.text($title);
		console.log('i', i);
		console.log('inputs', $inputs.length)
		if (i == $inputs.length - 1) {
			return;
		}
	}
})


});