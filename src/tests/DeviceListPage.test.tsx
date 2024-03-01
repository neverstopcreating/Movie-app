import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import {DeviceListPage} from "@/App/DeviceList/DeviceListPage.tsx";

vi.mock("@/api/api.ts", () => ({
    useDevices: vi.fn(() => []),
}));

vi.mock("./DevicesViewTypeSwitcher.tsx", () => ({
    DevicesViewTypeSwitcher: () => <div>DevicesViewTypeSwitcher</div>,
}));

vi.mock("./Views/DevicesTable.tsx", () => ({
    DevicesTable: () => <div>DevicesTable</div>,
}));

vi.mock("./Views/DevicesGrid.tsx", () => ({
    DevicesGrid: () => <div>DevicesGrid</div>,
}));

vi.mock("@/App/DeviceList/DevicesFilter.tsx", () => ({
    DevicesFilter: () => <div>DevicesFilter</div>,
}));

vi.mock("@/App/DeviceList/DevicesSearch.tsx", () => ({
    DevicesSearch: () => <div>DevicesSearch</div>,
}));

describe('DeviceListPage', () => {
    it('renders the grid view by default', () => {
        render(<DeviceListPage />);
        expect(screen.getByText('DevicesGrid')).toBeInTheDocument();
    });
});
