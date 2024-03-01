import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { DevicesFilter } from "@/App/DeviceList/DevicesFilter.tsx";
import {Device} from "@/api/api.ts";

vi.mock("@mantine/core", () => ({
  ActionIcon: vi.fn(() => <div>ActionIcon</div>),
  Button: vi.fn(() => <button>Filter</button>),
  Checkbox: vi.fn(() => <div>Checkbox</div>),
  Divider: vi.fn(() => <div>Divider</div>),
  Group: vi.fn(() => <div>Group</div>),
  Image: vi.fn(() => <div>Image</div>),
  Popover: vi.fn(({ children }) => <div>{children}</div>),
  Text: vi.fn(() => <div>Text</div>),
}));

vi.mock("@/api/api.ts", () => ({}));

vi.mock("@/Assets/Close-icon.svg", () => "CloseIcon");
const mockDevices: Device[] = [
    {
        guids: ['guid1'],
        icon: {
            id: 'icon-id-1',
            resolutions: [[25, 25], [50, 50]],
        },
        id: 'device-id-1',
        line: {
            id: 'line-id-1',
            name: 'Line1',
        },
        product: {
            abbrev: 'Prod1',
            name: 'Product1',
        },
        shortnames: ['shortname1'],
        sysids: [1],
        triplets: ['triplet1'],
    },
    {
        guids: ['guid12'],
        icon: {
            id: 'icon-id-12',
            resolutions: [[25, 25], [50, 50]],
        },
        id: 'device-id-12',
        line: {
            id: 'line-id-12',
            name: 'Line12',
        },
        product: {
            abbrev: 'Prod12',
            name: 'Product12',
        },
        shortnames: ['shortname12'],
        sysids: [1],
        triplets: ['triplet12'],
    },
];

describe("DevicesFilter", () => {
  let selectedProductLines: string[];
  let mockOnSelectedProductLinesChange: (selected: string[]) => void;

  beforeEach(() => {
    selectedProductLines = ["Line1"];
    mockOnSelectedProductLinesChange = vi.fn();
  });

  it("renders product lines as checkbox options", () => {
    render(
      <DevicesFilter
        devices={mockDevices}
        selectedProductLines={selectedProductLines}
        onSelectedProductLinesChange={mockOnSelectedProductLinesChange}
      />,
    );
    expect(screen.getByText("Line1")).toBeInTheDocument();
    expect(screen.getByText("Line2")).toBeInTheDocument();
  });

  it("calls onSelectedProductLinesChange when a checkbox is clicked", () => {
    render(
      <DevicesFilter
        devices={mockDevices}
        selectedProductLines={selectedProductLines}
        onSelectedProductLinesChange={mockOnSelectedProductLinesChange}
      />,
    );
    fireEvent.click(screen.getByText("Line1"));
    expect(mockOnSelectedProductLinesChange).toHaveBeenCalled();
  });
});
