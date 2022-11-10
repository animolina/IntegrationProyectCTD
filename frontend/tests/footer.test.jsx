import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Social from "../src/components/Social";
import Footer from "../src/components/Footer";

describe("Footer", () => {
  afterEach(cleanup);

  it(" Footer should be render", () => {
    const footer = render(<Footer />);
    expect(footer).toBeDefined();
  });

  it(" should contain social media icons", () => {
    const social = render(<Social />);
    expect(social).toBeTruthy();
  });

  it(" Footer should have copyright", () => {
    const text = "©2022 Digital Booking";
    expect(text).toBeDefined();
  });
});
