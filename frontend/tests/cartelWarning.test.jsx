import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import CartelWarning from "../src/components/CartelWarning";

describe("CartelWarning", () => {
    afterEach(cleanup);
    const component = render(<CartelWarning />);

    it("should render required text in CartelWarning", () => {
        const requiredText =
            "Para realizar una reserva necesitas estar logueado";

        component.getByText(requiredText);
    });
});
