import { cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";
import { server } from '@/mocks/node';

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => {
    cleanup();
    vi.clearAllMocks();
    server.resetHandlers()
});

// Begin: Mantine testing setup.
// https://mantine.dev/guides/vitest/
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

window.ResizeObserver = ResizeObserver;
// End: Mantine testing setup.
