import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Alert from "../src/components/Alert";

describe("Alert", () => {
  afterEach(cleanup);
  const requiredText = "Para realizar una reserva necesitas estar logueado";
  const component = render(<Alert text={requiredText} type={'warning'} />);

  it("should render required text in CartelWarning", () => {
    component.getByText(requiredText);
  });
});
