import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import ProductDetailsMap from "../src/components/ProductDetailsMap";

describe("ProductDetailsMap", () => {
    afterEach(cleanup);
    const component = render(<ProductDetailsMap />);

    it("should render mapTitle text in ProductDetailsMap", () => {
        const mapTitle = "¿Dónde vas a estar?";

        component.getByText(mapTitle);
    });
});

