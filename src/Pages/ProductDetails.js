import React from "react";
import Button from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";


const ShowHeader = () => {
    return (
      <div className="title">
        <h1>Git Details</h1>
      </div>
    );
  };
  


const ProductDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Button  name="Go Back" isDisabled={false} onClick={() => navigate(-1)} />
      <ShowHeader />
    </div>
  );
};

export default ProductDetails;

