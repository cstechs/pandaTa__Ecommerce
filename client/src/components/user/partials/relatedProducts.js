import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { getProductBySubCategoryId } from "../../../redux/_actions/productAction";
import Loader from "./loader";
const RelatedProduct = (props) => {
  const sellers = useSelector((state) => state.seller.sellers);
  const [responsive] = useState({
    0: {
      items: 1,
    },
    450: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  });

  const relatedProduct = useSelector((state) => state.product.relatedProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductBySubCategoryId(props.products));
  }, [dispatch]);
  if (props.products === undefined) {
    return <Loader />;
  }

  return (
    <>
      <OwlCarousel
        responsive={responsive}
        autoplay
        loop
        className="owl-theme"
        navContainer="#customNav"
      >
        {relatedProduct?.data?.map(
          ({ _id, productName, productPrice, productImage, createdBy }) => (
            <div className="item" key={_id}>
              <Link to={`/product/${_id}`}>
                <img src={`/${productImage}`} alt={productName} />
                <div className="content">
                  <h6 className="font-13">
                    {
                      sellers?.find((seller) => seller._id === createdBy)
                        ?.userName
                    }
                  </h6>
                  <h1 className="font-16 mt-2 text-dark">{productName}</h1>
                  <h3 className="font-20 mt-2">${productPrice}</h3>
                </div>
              </Link>
            </div>
          )
        )}
      </OwlCarousel>
    </>
  );
};
export default RelatedProduct;
