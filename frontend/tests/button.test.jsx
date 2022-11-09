import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../src/components/Button";

describe("Button", () => {
  afterEach(cleanup);

  it("should render", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeDefined();
  });

  it("should render inner text", () => {
    const innerText = "Texto de prueba";
    render(<Button innerText={innerText} />);
    expect(screen.getByText(innerText).innerHTML).toBe(innerText);
  });

  it("should execute callBack properly", async () => {
    const user = userEvent.setup();
    const mockCallBack = vi.fn(() => {
      console.log("Hello!");
    });
    render(<Button handleClick={mockCallBack} />);
    await user.click(await screen.findByRole("button"));
    expect(mockCallBack).toHaveBeenCalled();
  });
});
