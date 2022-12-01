import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import ProductDetailsFeature from "../src/components/ProductDetailsFeature";
import Store from "../src/context/Store";

describe("ProductDetailsFeature", () => {
    afterEach(cleanup);
    const component = render(
        <Store>
            <ProductDetailsFeature />
        </Store>
    );

    it("should render required text in ProductDetailsFeature", () => {
        const requiredText = "¿Qué ofrece este lugar?";

        component.getByText(requiredText);
    });
});
