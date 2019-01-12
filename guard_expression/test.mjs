import isPalindrome from "./guard_expression.mjs";
import * as assert from "assert";

assert.equal(isPalindrome('a'), true); 
assert.equal(isPalindrome('gh'), false);
assert.equal(isPalindrome('aa'), true);
assert.equal(isPalindrome('аргентинаманитнегра'), true);
assert.equal(isPalindrome('радар'), true);
assert.equal(isPalindrome('радоар'), false);