import concat from "./concat.mjs";
import * as assert from "assert";

assert.equal(concat('a')('b')('c'), 'abc'); 
assert.equal(concat('мама ')('папа ')('я'), 'мама папа я'); 
assert.equal(concat('один в ')('поле ')('не воин'), 'один в поле не воин'); 