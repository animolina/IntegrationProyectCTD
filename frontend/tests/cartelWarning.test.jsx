import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import CartelWarning from "../src/components/CartelWarning";

describe("CartelWarning", () => {
  afterEach(cleanup);
  const requiredText = "Para realizar una reserva necesitas estar logueado";
  const component = render(<CartelWarning text={requiredText} />);

  it("should render required text in CartelWarning", () => {
    component.getByText(requiredText);
  });
});
