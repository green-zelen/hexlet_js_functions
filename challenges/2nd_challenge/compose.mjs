const compose = (f1, f2) => {
    return (x) => {
        return f1(f2(x));
    };
};

const f = compose(v => v + 2, v => v);
console.log(f(10));
 // => 2