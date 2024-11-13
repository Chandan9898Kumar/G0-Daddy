import React, { useEffect } from "react";
import Button from "../Components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetails } from "../Redux/ProductRedux/ProductDetailsRedux";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Components/Loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";
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

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div className="container">
      <Button name="Go Back" isDisabled={false} onClick={() => navigate(-1)} />
      <ShowHeader />

      {isLoading ? (
        <Spinner />
      ) : (
        <ShowProductsDetails productDetailsData={productDetailsData} id={id} />
      )}
    </div>
  );
};

export default ProductDetails;

const ShowProductsDetails = ({ productDetailsData, id }) => {
  return (
    <>
      <div className="title">
        <h1>ID : {id}</h1>
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
        <div className="cocktail-infos">
          <div className="row">
            <h3 className="label">Name: </h3>
            <p className="text">{productDetailsData?.name ?? "N / A"}</p>
          </div>
          <div className="row">
            <h3 className="label">Description: </h3>
            <p className="text">{productDetailsData.description ?? "N / A"}</p>
          </div>
          <div className="row">
            <h3 className="label">Watchers: </h3>
            <p className="text">{productDetailsData.watchers ?? "N / A"}</p>
          </div>
          <div className="row">
            <h3 className="label">Forks: </h3>
            <p className="text">{productDetailsData.forks ?? "N / A"}</p>
          </div>
          <div className="row">
            <h3 className="label">Open Issues: </h3>
            <p className="text">{productDetailsData.open_issues ?? "N / A"}</p>
          </div>
          <div className="row">
            <h3 className="label">Language: </h3>
            <p className="text">{productDetailsData.language ?? "N / A"}</p>
          </div>
          <div className="row">
            <h3 className="label">Link To Repo : </h3>
            <p className="text">
              <a
                href={productDetailsData?.owner?.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
