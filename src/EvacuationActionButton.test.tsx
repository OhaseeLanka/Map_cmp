import { act } from "react-dom/test-utils";
import { createRoot } from "react-dom/client";
import { describe, expect, it, vi } from "vitest";
import { EvacuationActionButton } from "./EvacuationActionButton";

describe("EvacuationActionButton", () => {
  it("fires the evacuation route navigation with the selected area details", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    const onNavigate = vi.fn();

    act(() => {
      root.render(
        <EvacuationActionButton
          areaName="Kotmale Valley"
          district="Nuwara Eliya"
          division="Kotmale"
          onNavigate={onNavigate}
        />,
      );
    });

    const button = container.querySelector("button");
    expect(button).not.toBeNull();
    expect(button?.textContent).toContain("Open evacuation route map");

    act(() => {
      button?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onNavigate).toHaveBeenCalledWith({
      areaName: "Kotmale Valley",
      district: "Nuwara Eliya",
      division: "Kotmale",
    });

    root.unmount();
  });
});
