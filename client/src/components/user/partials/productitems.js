import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct } from "../../../redux/_actions/productAction";

const Productitems = ({ product, proId }) => {
  const [check, setCheck] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    setCheck(proId);
  }, [proId]);

  return (
    <>
      {product.products.data?.map(
        ({
          _id,
          productName,
          productPrice,
          productImage,
          productSubCategory,
        }) => (
          <>
            {check.length == 0 && (
              <div className="col-md-4 col-6" key={_id}>
                <Link to={`/product/${_id}`}>
                  <div className="product">
                    <div className="productimgPortion">
                      <img src={`/${productImage}`} alt={productName} />
                    </div>
                    <div className="content">
                      <div className="content-left">
                        <span className="vendor">Supplier’s Name Here</span>
                        <span className="product_name">{productName}</span>
                        <span className="product_price">${productPrice}</span>
                      </div>
                      <div className="content-right">
                        <i className="fa fa-caret-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
            {check != [] &&
              check.find((val) => val === productSubCategory.toString()) && (
                <div className="col-md-4 col-6" key={_id}>
                  <Link to={`/product/${_id}`}>
                    <div className="product">
                      <div className="productimgPortion">
                        <img src={`/${productImage}`} alt={productName} />
                      </div>
                      <div className="content">
                        <div className="content-left">
                          <span className="vendor">Supplier’s Name Here</span>
                          <span className="product_name">{productName}</span>
                          <span className="product_price">${productPrice}</span>
                        </div>
                        <div className="content-right">
                          <i className="fa fa-caret-right"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
          </>
        )
      )}
    </>
  );
};

export default Productitems;
