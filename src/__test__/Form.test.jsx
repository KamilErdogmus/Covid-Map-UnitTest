import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "../components/Header/Form";

// useNavigate'i mock'la
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Form Component", () => {
  test("renders the form", () => {
    render(
      <Router>
        <Form />
      </Router>
    );
    const formElement = screen.getByTestId("form");
    expect(formElement).toBeInTheDocument();
  });

  test("allows input to be typed", async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Form />
      </Router>
    );
    const inputElement = screen.getByPlaceholderText(
      "Search a country..."
    );
    await user.type(inputElement, "Russia");
    expect(inputElement.value).toBe("Russia");
  });

  test("navigates on form submission", async () => {
    const user = userEvent.setup();

    const mockNavigate = jest.fn();
    useNavigate.mockImplementation(() => mockNavigate);

    render(
      <Router>
        <Form />
      </Router>
    );

    const inputElement = screen.getByPlaceholderText(
      "Search a country..."
    );
    const formElement = screen.getByTestId("form");

    await user.type(inputElement, "Russia");
    fireEvent.submit(formElement);

    expect(mockNavigate).toHaveBeenCalledWith("detail?q=Russia");
  });
});
