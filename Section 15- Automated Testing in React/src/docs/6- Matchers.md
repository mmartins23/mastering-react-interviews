### Matchers in Testing

Matchers are functions used in tests to assert that values meet certain conditions. They are essential in writing unit tests as they allow you to compare expected and actual outcomes, ensuring your code behaves as expected.

### Examples of Matchers

1. **Basic Syntax Example**:
    ```javascript
    test('Initial value of counter should be 0', () => {
        render(<Counter />);
        const counterEl = screen.getByTestId("cnt");
        expect(counterEl).toBeInTheDocument();
        expect(counterEl).not.toBeNull();
    });
    ```

    - `expect(counterEl).toBeInTheDocument()`: Asserts that `counterEl` is present in the document.
    - `expect(counterEl).not.toBeNull()`: Asserts that `counterEl` is not `null`.

2. **Example with Click Interaction**:
    ```javascript
    test('On click, it should increment by 1 using userEvent', async () => {
        render(<Counter />);
        const btnEl = screen.getByTestId("btn");
        const counterEl = screen.getByTestId("cnt");
        expect(counterEl.textContent).toBe("0");
        userEvent.click(btnEl);
        await waitFor(() => expect(counterEl.textContent).toBe("1"));
    });
    ```

    - `expect(counterEl.textContent).toBe("0")`: Asserts that the initial text content of `counterEl` is `0`.
    - `await waitFor(() => expect(counterEl.textContent).toBe("1"))`: Waits for the text content to change to `1` after a click.

### Testing for `null` or `not null`

To test if a value is `null` or `not null`, you can use the following matchers:

- **`toBeNull`**: Asserts that a value is `null`.
- **`not.toBeNull`**: Asserts that a value is not `null`.

#### Example:
```javascript
test('Element should not be null', () => {
    render(<Counter />);
    const counterEl = screen.getByTestId("cnt");
    expect(counterEl).not.toBeNull();
});
```

### Greater Than or Equal Matcher

To compare if a value is greater than or equal to another value, you can use the `toBeGreaterThanOrEqual` matcher.

#### Example:
```javascript
test('Counter value should be greater than or equal to 1', async () => {
    render(<Counter />);
    const btnEl = screen.getByTestId("btn");
    const counterEl = screen.getByTestId("cnt");
    userEvent.click(btnEl);
    await waitFor(() => expect(Number(counterEl.textContent)).toBeGreaterThanOrEqual(1));
});
```

### Summary

- **Matchers**: Used to assert conditions in tests, such as `toBeInTheDocument`, `toBeNull`, `not.toBeNull`, `toBe`, `not.toBe`, and `toBeGreaterThanOrEqual`.
- **Testing for `null` or `not null`**: Use `toBeNull` and `not.toBeNull`.
- **Comparing Greater Than or Equal**: Use `toBeGreaterThanOrEqual`.

Matchers are fundamental to writing effective and reliable tests, providing clear and readable assertions that help ensure your code works as expected.