const apply = (count, foo, arg) => {
    if (count === 0) {
      return arg;
    }
    let res = arg;
      while (count > 0) {
        res = foo(res);
        count--;
      }
      return res;
  }
  export default apply;