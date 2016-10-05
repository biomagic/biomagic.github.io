var testObj = {
    wrapperItem: '<div class="wrapper"></div>',
    mainItem: '<main class="main"></main>',
    headerItem: '<header class="test-header"><h2>Тест по программированию</h2></header>',
    buttonItem:'<button class="review btn-lg btn-success">Проверить мои результаты</button>',
    listAdd: function(ul, li) {

    // li items

    var variantText = 'Вариант ответа №';
    var variantAnswerItem = '';
    var input = '<input type="checkbox" class="main__checkbox" id="a';    

    for (var i = 1; i <= li; i++) {    
      variantAnswerItem += '<li class="main__li">' + input + i + '">' + '<p class="main__p">' + variantText + i + '</p>' + '</li>';
    }

    // ul items

    var questionText = '. Вопрос №';
    var questionsList = '';

    for (var i = 1; i <= ul; i++) {
      questionsList += '<h3>' + i + questionText + i + '</h3>' + '<ul class="main__ul">' + variantAnswerItem + '</ul>';
    }

    var result = questionsList;

    return result;
  }  
};

// Add wrapper element

document.body.insertAdjacentHTML('afterBegin', testObj.wrapperItem);
var wrapperEl = document.body.querySelector(".wrapper");

// Add main element

wrapperEl.insertAdjacentHTML('afterBegin', testObj.mainItem);
var mainEl = document.body.querySelector(".main");

// Add header

wrapperEl.insertAdjacentHTML('afterBegin', testObj.headerItem);

// Add list

mainEl.insertAdjacentHTML('beforeEnd', testObj.listAdd(3, 3));

// Add button

wrapperEl.insertAdjacentHTML('beforeEnd', testObj.buttonItem);

