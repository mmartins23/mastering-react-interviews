import React from 'react';
import {fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';


test('Initial value of counter should be 0', () => {
    render(<Counter/>);
    const counterEl = screen.getByTestId("cnt");
    expect(counterEl).toBeInTheDocument();
    expect(counterEl).not.toBeNull();
})

// test('On click, it should increment by 1', () => {
//     render(<Counter/>);
//     const btnEl = screen.getByTestId("btn");
//     const counterEl = screen.getByTestId("cnt");
//     expect(counterEl.textContent).toBe("0");
//     fireEvent.click(btnEl);
//     expect(counterEl.textContent).toBe("1");
// })

test('On click, it should increment by 1 using userEvent', async () => {
    render(<Counter />);
    const btnEl = screen.getByTestId("btn");
    const counterEl = screen.getByTestId("cnt");
    expect(counterEl.textContent).toBe("0");
    userEvent.click(btnEl);
    await waitFor(() => expect(counterEl.textContent).not.toBe("1"));
});

test("Input should have 10 as initial value", () => {
    render(<Counter/>);
    const inputEl = screen.getByTestId("input");
    expect(inputEl.value).toBe("10");
})

test("Entering value in input works", () => {
    render(<Counter/>);
    const inputEl = screen.getByTestId("input");
    fireEvent.change(inputEl, {
        target: {
            value: 11
        }
    })
    expect(inputEl.value).toBe("11");
})