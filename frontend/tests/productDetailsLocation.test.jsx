import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import ProductDetailsLocation from "../src/components/ProductDetailsLocation";

describe("ProductDetailsLocation", () => {
    afterEach(cleanup);
    const component = render(<ProductDetailsLocation />);

    it("should render scoreOpinion text in ProductDetailsLocation", () => {
        const scoreOpinion = "Muy bueno";

        component.getByText(scoreOpinion);
    });
});