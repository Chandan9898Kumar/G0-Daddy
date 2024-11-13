import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const ShowHeader = () => {
  return (
    <div className="title">
      <h1>Git Repositories</h1>
    </div>
  );
};

const Products = () => {
  return (
    <div className="container">
      <ShowHeader />
    </div>
  );
};

export default Products;
