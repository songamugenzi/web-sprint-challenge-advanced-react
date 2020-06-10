import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    act(() => {
        render(<CheckoutForm />)
    });

    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    act(() => {
        render(<CheckoutForm />)
    });

    const checkoutButton = screen.getByTestId(/checkoutButton/i)
    fireEvent.click(checkoutButton)
    expect(checkoutButton).toBeInTheDocument()

    const successMessage = await screen.findByTestId(/successMessage/i)
    expect(successMessage.className).toBe('success-message')
});
