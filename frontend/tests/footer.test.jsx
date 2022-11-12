import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Footer from "../src/components/Footer";

describe("Footer", () => {
    afterEach(cleanup);
    const component = render(<Footer />);

    it("should render copyright text in footer", () => {
        const copyrightText = "©2022 Digital Booking";

        component.getByText(copyrightText);

        /* expect(screen.getByText("sarasa")).toBe(); */
    });
});
