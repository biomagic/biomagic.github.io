function pow() {
    var x = prompt('Enter number', '');
    var y = prompt('enter pow', '');

    if (x == 0) {
        console.log(x);
        return;
    } else if (y == 0) {
        console.log(1);
        return;
    } else if (y == Infinity) {
        console.log(Infinity);
        return;
    }

    var z = x;

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

    console.log(z);
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

