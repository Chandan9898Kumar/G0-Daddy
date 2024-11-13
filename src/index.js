import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./ErrorBoundary";
import IESupport from "./InternetSupport";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * The function `isIE()` checks if the user's browser is Internet Explorer.
 * @returns The function `isIE()` returns a boolean value indicating whether the user agent is Internet
 * Explorer (IE) or not.
 */

function isIE() {
  const ua = navigator.userAgent;
  /* MSIE used to detect old browsers and Trident used to newer ones*/
  const isInternetExplorer =
    ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return isInternetExplorer;
}
const IS_IE = isIE();

root.render(
  <React.StrictMode>
    <ErrorBoundary fallback="Something Went Wrong Please Refresh The Page.">
      <Provider store={Store}>{IS_IE ? <IESupport /> : <App />}</Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
