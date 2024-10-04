import Welcome from "@/components/Welcome";
import { render, screen } from "@testing-library/react-native";
import { it, expect, describe } from "vitest";

describe("WelcomeTest", () => {
  it("should render Welcome with the name when the name is provided", () => {
    render(<Welcome name="ahmed" />);

    screen.debug();
  });
});
