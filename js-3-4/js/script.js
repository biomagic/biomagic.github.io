function documentCreate() {

  // Header form

  var testHeader = '<header class="test-header"><p>Тест по программированию</p></header>';

  // Count of li elements

  var variantText = 'Вариант ответа №';

  var variantAnswerItem = '';

  var input = '<input type="checkbox" class="checkbox"';

  for (var i = 1; i <= 3; i++) {    
    variantAnswerItem += '<li class="main__li">' + input + '<p>' + variantText + i + '</p>' + '</li>';
  }

  // Count of ul elements

  var questionText = '. Вопрос №';

	var questionsList = '';

	for (var i = 1; i <= 3; i++) {
		questionsList += '<p>' + i + questionText + i + '</p>' + '<ul class="main__ul">' + variantAnswerItem + '</ul>';
	}

  var result = '<div class="wrapper">' + testHeader + '<main>' + questionsList + '</main>' + '</div>';

  return result;
}

document.body.insertAdjacentHTML('afterBegin', documentCreate());