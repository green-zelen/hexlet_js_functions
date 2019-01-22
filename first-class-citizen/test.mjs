import apply from "./first-class-citizen";
import * as assert from "assert";

assert.equal(apply(0, Math.sqrt, 4), 4); 
assert.equal(apply(1, Math.sqrt, 4), 2);
assert.equal(apply(2, Math.sqrt, 16), 2); 
assert.equal(apply(1, v => v ** 2, 3), 9);
assert.equal(apply(5, v => v + 10, 3), 53);