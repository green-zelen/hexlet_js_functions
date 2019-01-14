// Реализуйте и экспортируйте по умолчанию функцию substr, которая возвращает подстроку 
// из переданной строки. Подстрокой называется любая выбранная часть строки. 
// Например для строки hello можно выделить следующие подстроки: ello, llo, o, el 
// и множество других. Функция принимает на вход три параметра:

// Строка.
// Начальный индекс. Значение по умолчанию: 0.
// Длина подстроки. Значение по умолчанию: длина всей строки.
export const substr = (str, sFirst = 0, sLength = str.length) => {
    if (sLength < 0) {
        sLength = 1;
    }
    if(sFirst < 0){
        sFirst = 0;
    }
    if (sLength === 0) {
        console.log('');
        return '';
    }
    let res = '';
    if((sLength + sFirst - 1) > str.length - 1) {
        for (let i = sFirst; i < str.length; i++) {
            res += str[i];
        }
        return res;
    }
    if(sFirst > (str.length)) {
        console.log('');
        return '';
    }
    let substrContent = '';
    for (let i = sFirst; i < sFirst + sLength; i++){
        substrContent += str[i];
    }
    console.log(sFirst + ':' + str[sFirst] + ', ' + sLength + ':' + str[sLength] + ', ' + substrContent);
    return substrContent;
};
