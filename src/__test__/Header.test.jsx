// src/__test__/Header.test.jsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header/Header";

test("Form bileşeni render ediliyor mu?", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  // Form bileşeninin ekranda olduğundan emin olun
  expect(screen.getByTestId("form")).toBeInTheDocument();
});

test("Link bileşeni doğru şekilde render ediliyor mu?", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  // Link bileşeninin doğru yere yönlendirdiğinden emin olun
  const linkElement = screen.getByRole("link", { name: /Covid Tracking/i });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "/");
});

test("İkonlar render ediliyor mu?", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  // İkonların render edilip edilmediğini kontrol edin
  expect(screen.getByTestId("virus-icon")).toBeInTheDocument();
  expect(screen.getByTestId("vaccine-icon")).toBeInTheDocument();
});
