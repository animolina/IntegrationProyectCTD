import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import ProductBlock from "../src/components/ProductBlock";
import { RouterProvider } from "react-router-dom";

describe("ProductBlock", () => {
    afterEach(cleanup);
    const component = render(
    <RouterProvider>
    <ProductBlock/>;
    </RouterProvider>
    )

    it("should render title text in ProductBlock", () => {
        const title = "Recomendaciones";

        component.getByText(title);
    });
});