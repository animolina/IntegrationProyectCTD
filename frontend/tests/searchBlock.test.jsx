import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import SearchBlock from "../src/components/SearchBlock";

describe("SearchBlock", () => {
    afterEach(cleanup);
    const component = render(<SearchBlock />);

    it("should render title text in SearchBlock", () => {
        const title = "Buscá ofertas en hoteles, casas y mucho más";

        component.getByText(title);
    });
});





