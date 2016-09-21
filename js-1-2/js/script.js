function pow() {
  var x = prompt('Enter number', '');
  var y = prompt('enter pow', '');
  var z = x;

  if (x == 0 && y < 0 || y == Infinity) {
      return Infinity;
  } else if (isNaN(y)) {
      return NaN;
  } else if (x == 0) {
      return +x;
  } else if (y == 0) {
      return 1;
  }

  x = parseInt(x);
  y = parseInt(y);

  console.log(typeof x);
  console.log(typeof y);

  for (var i = y - 2; i >= 0; i--) {
    z = z * x;
    if (x < 0 && z > 0) {
      z = z * -1;
    }
  }

  for (var i = y; i <= 0; i++) {
    z = z / x;
    if (x < 0 && z > 0) {
      z = z * -1;
    }
  }

  return z;
}

function names() {

  var namesArr = [];
  var nameVal;

  for (var i = 0; i < 5; i++) {
    namesArr[i] = prompt('Заполните имя пользователя ' + (1 + i),'');
    if (namesArr[i] == null) {
      return;
    }
  }

  nameVal = prompt('Введите имя пользователя для входа','');

  for (var i = namesArr.length - 1; i >= 0; i--) {
      if (namesArr[i] == nameVal ) {
          alert(nameVal + ', Вы успешно вошли!');
          return;
      } else if (i == 0) {
          alert('Ошибка! Пользователь не найден! Повторите ещё раз!');
          nameVal = prompt('Введите имя пользователя для входа','');
          i = namesArr.length;
      } else if (nameVal == null) {
          return;
      }
  }
}


var str = parseInt('12');
      console.log(str)
