import { Link } from "react-router-dom";
import React from "react";
function ErrorPage({ error }) {
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p className="error-status">{error.status}</p> */}
      <p className="error-status-text">{/* <i>{error.statusText}</i> */}</p>
      <p>
        Go to{" "}
        <Link to="/">
          <b>Home page</b>
        </Link>
      </p>
    </div>
  );
}

export default ErrorPage;