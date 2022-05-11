import { render, screen } from "@testing-library/react";
import App from ".";

test("renders react", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
