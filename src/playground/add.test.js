const add = (a,b) => {
    return a+b;
};

const generateGreeting = (name="Anon") => `Hello, ${name}.`

test('should add 2 numbers', () => {
    const result = add(3,4);

    /* if (result !== 7) {
        throw new Error(`You added 4 and 3. The result was ${result}.`)
    } */
    expect(result).toBe(7);
});

test('generate greeting', () => {
    const result = generateGreeting('Haine');
    expect(result).toBe('Hello, Haine.')
})

test('generate greeting', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello, Anon.')
})