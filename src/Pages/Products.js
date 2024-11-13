import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductData } from "../Redux/ProductRedux/ProductRedux";
import Spinner from "../Components/Loader/Loader";
const URL = "https://api.github.com/orgs/godaddy/repos";
const ShowHeader = () => {
  return (
    <div className="title">
      <h1>Git Repositories</h1>
    </div>
  );
};

const Products = () => {
  const { productData, isLoading, isError } = useSelector(
    (state) => state?.Product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await fetch(URL);
        if (response.status !== 200) {
          throw new Error("Something went wrong...");
        }
        let result = await response.json();

        dispatch(
          fetchProductData({
            productData: result,
            isLoading: false,
            isError: "",
          })
        );
      } catch ({ message }) {
        dispatch(
          fetchProductData({
            productData: [],
            isLoading: false,
            isError: message,
          })
        );
      }
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="container">
      <ShowHeader />
      {isLoading ? <Spinner /> : <ShowProducts productData={productData} />}
    </div>
  );
};

export default Products;

const ShowProducts = ({ productData }) => {
  return (
    <div className="cocktails-container">
      {!!productData?.length &&
        productData?.map((product) => (
          <div key={product.id} className="cocktail-card">
            <img
              src={product.owner.avatar_url}
              alt={product.name}
              className="cocktail-img"
              loading="lazy"
            />
            <div className="cocktail-info">
              <div className="content-text">
                <h2 className="cocktail-name">
                  {product.name.slice(0, 8) + "..."}
                </h2>
                <span className="info">{product.owner.type}</span>
              </div>
              <Link to={`/${product.id}`}>
                <div className="btn">View Details</div>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};
