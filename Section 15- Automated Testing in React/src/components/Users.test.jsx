import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from './Users';

test("Checking data retrieval in list item", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async () => {
            return [{ email: 'abc@test.com', username: "abctest" }]
        }
    })

    render(<Users />);
    const liEl = await screen.findAllByRole('listitem');
    expect(liEl).not.toHaveLength(0);
})