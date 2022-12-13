import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import DetailsCard from "../src/components/DetailsCard";

describe("DetailsCard", () => {
    afterEach(cleanup);
    const component = render(<DetailsCard/>);

    it("should render detailsCardTitle text in DetailsCard", () => {
        const detailsCardTitle = "Detalle de la reserva";

        component.getByText(detailsCardTitle);
    });


});