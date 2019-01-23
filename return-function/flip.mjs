// Во многих языках программирования существует интересная функция flip. 
// Её необычность заключается в том, что единственная цель этой функции — 
// это преобразовать другую функцию так, чтобы порядок её аргументов был обратным.

// Например, у нас может быть функция pow, которая возводит первый аргумент в степень
//второго. flip вернет нам новую функцию, у которой первый аргумент — это степень, 
//а второй — это число, которое нужно возводить в эту степень.

// Эта функция бывает очень полезна при активной работе с функциями высшего порядка, 
// она часто упрощает возможность комбинировать функции между собой.

// Реализуйте и экспортируйте по умолчанию функцию flip. Данная версия flip работает 
// только с функциями от двух аргументов.

const flip = (foo) => {
    const reverseArg = (a, b) => {
        return foo(b, a);
    };
    return reverseArg;
};

export default flip;


