function documentCreate() {

  // Header form

  var testHeader = '<header class="test-header"><h2>Тест по программированию</h2></header>';

  // Call li items

  var variantText = 'Вариант ответа №';

  var variantAnswerItem = '';

  var input = '<input type="checkbox" class="main__checkbox" id="a';

  var button = '<button class="review btn-lg btn-success">Проверить мои результаты</button>'

  for (var i = 1; i <= 3; i++) {    
    variantAnswerItem += '<li class="main__li">' + input + i + '">' + '<p class="main__p">' + variantText + i + '</p>' + '</li>';
  }

  // Call ul

  var questionText = '. Вопрос №';

	var questionsList = '';

	for (var i = 1; i <= 3; i++) {
		questionsList += '<h3>' + i + questionText + i + '</h3>' + '<ul class="main__ul">' + variantAnswerItem + '</ul>';
	}

  var result = '<div class="wrapper">' + testHeader + '<main class="main">' + questionsList + '</main>' + button + '</div>';

  return result;
}

document.body.insertAdjacentHTML('afterBegin', documentCreate());