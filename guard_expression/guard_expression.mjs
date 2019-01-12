// Реализуйте и экспортируйте по умолчанию функцию isPalindrome 
// с использованием рекурсии.

const isPalindrome = (str) => {
    if (str.length < 2) return true;

    if (str[0] === str[str.length - 1]) {
        let t = '';
        for (let i = 1; i < str.length - 1; i++) {
            t += str[i];
        }
        return isPalindrome(t);
    }
    return false;
};

export default isPalindrome;