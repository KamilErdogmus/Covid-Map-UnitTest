import { render, screen } from "@testing-library/react";
import Loader from "./../components/Loader/Loader";

describe("Loader Component", () => {
  test("renders header loader when type is 'header'", () => {
    render(<Loader type="header" />);

    // Header loader'ının ekranda olduğundan emin olun
    expect(screen.getByTestId("header-loader")).toBeInTheDocument();
  });

  test("renders DNA loader when type is not 'header'", () => {
    render(<Loader type="default" />);

    // DNA loader'ının ekranda olduğundan emin olun
    expect(
      screen.getByRole("progressbar", { name: /dna-loading/i })
    ).toBeInTheDocument();
  });

  test("renders DNA loader by default when type is not provided", () => {
    render(<Loader />);

    // DNA loader'ının ekranda olduğundan emin olun
    expect(
      screen.getByRole("progressbar", { name: /dna-loading/i })
    ).toBeInTheDocument();
  });
});
