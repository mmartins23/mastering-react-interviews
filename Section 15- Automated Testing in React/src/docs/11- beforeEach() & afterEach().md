### Explanation of `beforeEach()` and `afterEach()` in Jest

#### beforeEach()
`beforeEach()` is a function provided by Jest that allows you to run some setup code before each test case within a `describe` block. It's commonly used to initialize variables, set up mocks, or perform actions that need to happen before each individual test runs. This ensures that each test starts with a clean slate and reduces code duplication.

#### Usage:
- **Setup for Tests:** You can use `beforeEach()` to render a component, initialize variables, or set up any necessary state that your tests depend on.
- **Avoiding Duplication:** Instead of repeating the same setup code in each test, `beforeEach()` helps centralize setup logic and makes tests more maintainable.

#### Example:
```javascript
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

beforeEach(() => {
    render(<Counter />);
});

test('Initial value of counter should be 0', () => {
    const counterEl = screen.getByTestId("cnt");
    expect(counterEl).toBeInTheDocument();
    expect(counterEl.textContent).toBe("0");
});
```
In this example, `beforeEach()` ensures that `<Counter />` is rendered before each test, so each test starts with the initial state of the counter component.

#### afterEach()
`afterEach()` is another function provided by Jest that runs after each test case in a `describe` block. It's used for cleanup tasks such as resetting global variables or cleaning up resources that were allocated during the tests.

#### Usage:
- **Cleanup:** Use `afterEach()` to clean up after tests, reset state, or clear mocks.
- **Avoid Side Effects:** Ensures that each test is isolated from others by cleaning up any changes made during the test.

#### Example:
```javascript
import { cleanup, render, screen } from '@testing-library/react';
import Counter from './Counter';

beforeEach(() => {
    render(<Counter />);
});

afterEach(() => {
    cleanup(); // Ensures cleanup after each test
});

test('Initial value of counter should be 0', () => {
    const counterEl = screen.getByTestId("cnt");
    expect(counterEl).toBeInTheDocument();
    expect(counterEl.textContent).toBe("0");
});
```
In this example, `cleanup()` inside `afterEach()` ensures that any cleanup needed after each test (such as unmounting components or clearing DOM) is performed consistently.

### Answering the Provided Question

In your example, `beforeEach()` is used to render the `<Counter />` component before each test case. This ensures that each test starts with the component in its initial state, reducing redundancy and ensuring consistency across tests.

Here’s the breakdown of your test file:

```javascript
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

beforeEach(() => {
    render(<Counter />);
});

test('Initial value of counter should be 0', () => {
    const counterEl = screen.getByTestId("cnt");
    expect(counterEl).toBeInTheDocument();
    expect(counterEl.textContent).toBe("0");
});

test('On click, it should increment by 1 using userEvent', async () => {
    const btnEl = screen.getByTestId("btn");
    const counterEl = screen.getByTestId("cnt");
    expect(counterEl.textContent).toBe("0");
    userEvent.click(btnEl);
    await waitFor(() => expect(counterEl.textContent).toBe("1"));
});

test("Input should have 10 as initial value", () => {
    const inputEl = screen.getByTestId("input");
    expect(inputEl.value).toBe("10");
});

test("Entering value in input works", () => {
    const inputEl = screen.getByTestId("input");
    fireEvent.change(inputEl, {
        target: {
            value: "11"
        }
    });
    expect(inputEl.value).toBe("11");
});
```

- **`beforeEach(() => { render(<Counter />); })`:** This renders the `<Counter />` component before each test case, ensuring a clean starting point for each test.
- **`test('Initial value of counter should be 0', () => { ... })`:** Verifies that the counter initially displays '0' after rendering.
- **`test('On click, it should increment by 1 using userEvent', async () => { ... })`:** Uses `userEvent` to simulate a click on a button and verifies that the counter increments correctly.
- **`test("Input should have 10 as initial value", () => { ... })`:** Checks that an input field initially displays '10'.
- **`test("Entering value in input works", () => { ... })`:** Tests that changing the input value updates it correctly.

By using `beforeEach()` to render `<Counter />` before each test, you ensure that each test starts from the same initial state of the component, making your tests more reliable and easier to maintain.