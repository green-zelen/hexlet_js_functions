const sum = (a, b) => a + b;
const partialApply = (fn, arg2) => (arg1) => fn(arg1, arg2);
const resFn = partialApply(sum, 5);
console.log(resFn(3));

const partialApply2 = (fn, arg2) => {
    return (arg1) => {
        return fn(arg1, arg2);
    }
}
const resFn2 = partialApply2(sum, 5);
console.log(resFn2(3));