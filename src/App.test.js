import React from "react";

import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const initialState = {
  productData: {},
  isLoading: true,
  isError: "",
};

const store = mockStore(initialState);

describe("App component Testing", () => {
  beforeEach(() => {
    store.clearActions();
  });

  
  test("Testing Text while Rendering", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const linkElement = screen.getByText(/GIT REPO APP/i);
    expect(linkElement).toBeInTheDocument();
  });
});
