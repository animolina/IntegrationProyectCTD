import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import CategoryBlock from "../src/components/CategoryBlock";

describe("CategoryBlock", () => {
    afterEach(cleanup);
    const component = render(<CategoryBlock />);

    it("should render title text in CategoryBlock", () => {
        const title = "Buscar por tipo de alojamiento";

        component.getByText(title);
    });
});
