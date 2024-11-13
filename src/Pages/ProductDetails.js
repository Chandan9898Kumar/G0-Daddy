import React, { useEffect } from "react";
import Button from "../Components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetails } from "../Redux/ProductRedux/ProductDetailsRedux";
import { useSelector, useDispatch } from "react-redux";
const URL = "https://api.github.com/orgs/godaddy/repos";
const ShowHeader = () => {
  return (
    <div className="header">
      <h1>Product Details</h1>
    </div>
  );
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { productDetailsData, isLoading, isError } = useSelector(
    (state) => state?.ProductDetails
  );

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        let response = await fetch(URL);
        if (response.status !== 200) {
          throw new Error("Something went wrong...");
        }
        let result = await response.json();

        dispatch(
          fetchProductDetails({
            productDetailsData: result
              .filter((itemId) => Number(itemId.id) === Number(id))
              .reduce((acc, curr) => curr, {}),
            isLoading: false,
            isError: "",
          })
        );
      } catch ({ message }) {
        dispatch(
          fetchProductDetails({
            productDetailsData: [],
            isLoading: false,
            isError: message,
          })
        );
      }
    };

    fetchDetails();
  }, [dispatch, id]);

  return (
    <div className="container">
      <Button name="Go Back" isDisabled={false} onClick={() => navigate(-1)} />
      <ShowHeader />
      <ShowProductsDetails productDetailsData={productDetailsData} id={id} />
    </div>
  );
};

export default ProductDetails;

const ShowProductsDetails = ({ productDetailsData, id }) => {
  console.log(productDetailsData, "productDetailsData");
  return (
    <>
      <div className="flex-container">
        <div>
          <div className="title">
            <h1>
              {productDetailsData?.name} : {id}
            </h1>
          </div>
          <div className="flex-container">
            {productDetailsData?.owner?.avatar_url && (
              <img
                src={productDetailsData.owner.avatar_url}
                alt={productDetailsData.name}
                className="cocktail-img"
                loading="lazy"
              />
            )}
            {/* <div className="cocktail-infos">
						<div className="row">
							<h3 className="label">Name: </h3>
							<p className="text">{product.name}</p>
						</div>
						<div className="row">
							<h3 className="label">Category: </h3>
							<p className="text">{product.category}</p>
						</div>
						<div className="row">
							<h3 className="label">Info: </h3>
							<p className="text">{product.info}</p>
						</div>
						<div className="row">
							<h3 className="label">Instructions: </h3>
							<p className="text">{product.instructions}</p>
						</div>
						<div className="row">
							<h3 className="label">Ingredients: </h3>
							<p className="text">{product.ingredients}</p>
						</div>
					</div> */}
          </div>
        </div>
      </div>
    </>
  );
};
