import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * The `lazyWithRetry` function asynchronously imports a component and retries with a page reload on
 * error.
 * @param componentImport - The `componentImport` parameter is a function that imports a component
 * asynchronously. The `lazyWithRetry` function wraps this import in a lazy loading function with a
 * retry mechanism. If an error occurs during the component import, the function will log the error to
 * the console and then reload the window.
 */
const lazyWithRetry = (componentImport) =>
  lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      console.error(error);
      return window.location.reload();
    }
  });

const Products = lazyWithRetry(() => import("./Pages/Products"));
const ProductDetails = lazyWithRetry(() => import("./Pages/ProductDetails"));
const ErrorPage = lazyWithRetry(() => import("./ErrorPage/ErrorPage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/">
              <Route index element={<Products />} />
              <Route path=":id" element={<ProductDetails />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
