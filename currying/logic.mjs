const True = (one) => (two) => one;
const False = (one) => (two) => two;
const If = (func) => (one) => (two) => func(one)(two);

console.log(If(True)('fo')('bar'));
console.log(If(False)('foo')('ba'));
console.log(True()());

// export const True = function(a) {
//     return (b) => {
//         return a;
//     };
// };

// export const False = function(a) {
//     return (b) => {
//         return b;
//     };
// }

// export const If = function(f) {
//     return (a) => {
//         return (b) => {
//             return f(a)(b);
//         };
//     };
// };
