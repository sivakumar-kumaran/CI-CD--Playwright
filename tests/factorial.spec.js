const { test, expect } = require('@playwright/test');
const {factorial}  = require('../factorial.js');

test('Factorial of 5', async () => {
   await expect(factorial(5)).toBe(120);
});

test('Factorial of 0', async () => {
    await expect(factorial(0)).toBe(1);
});

test('Factorial of 1', async() => {
    await expect(factorial(1)).toBe(1);
});

test('Factorial of 6',async () => {
    await expect(factorial(6)).toBe(720);
});

test("Factorial of -1",async()=>{
    await expect(factorial(-1)).toBe('Negative numbers not allowed');
});