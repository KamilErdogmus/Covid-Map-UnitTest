// src/__test__/Header.test.jsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header/Header";

test("Is the Form component being rendered", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  // Form bileşeninin ekranda olduğundan emin olun
  expect(screen.getByTestId("form")).toBeInTheDocument();
});

test("Is the Link component rendering correctly?", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  // Link bileşeninin doğru yere yönlendirdiğinden emin olun
  const linkElement = screen.getByRole("link", {
    name: /Covid Tracking/i,
  });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "/");
});

test("Are the icons being rendered?", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  // İkonların render edilip edilmediğini kontrol edin
  expect(screen.getByTestId("virus-icon")).toBeInTheDocument();
  expect(screen.getByTestId("vaccine-icon")).toBeInTheDocument();
});
