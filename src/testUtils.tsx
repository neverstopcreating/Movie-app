import {
  render as testingLibraryRender,
  RenderOptions,
} from "@testing-library/react";
import * as React from "react";
import { PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { AppStore, RootState, setupStore } from "@/store/store.ts";
import { BrowserRouter } from "react-router-dom";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function render(
  ui: React.ReactNode,
  extendedRenderOptions: ExtendedRenderOptions = {},
) {
  const {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <BrowserRouter>
      <MantineProvider>
        <Provider store={store}>{children}</Provider>
      </MantineProvider>
    </BrowserRouter>
  );

  return {
    store,
    ...testingLibraryRender(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
