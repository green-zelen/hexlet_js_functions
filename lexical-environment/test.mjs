import reverse from "./lexical-environment.mjs";
import * as assert from "assert";

assert.equal(reverse('мама'), 'амам'); 
assert.equal(reverse('111000'), '000111');
assert.equal(reverse('abcd'), 'dcba');
assert.equal(reverse('самокат'), 'такомас');
