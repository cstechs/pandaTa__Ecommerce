import React from "react";
import productimg from "../../../assets/images/user/product.png";
import { Link } from "react-router-dom";

const HomeRight = ({ product }) => {
  return (
    <div className="col-md-6">
      <div className="container-fluid">
        <div className="row">
          {product.products.data?.map((item, index) => {
            return (
              <React.Fragment key={item._id}>
                {" "}
                {index > 6 && index < 11 && (
                  <div className="col-6">
                    <Link to={`/product/${item._id}`}>
                      <div className="product">
                        <img src={item.productImage} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              {item.productName}
                            </span>
                            <span className="product_price">
                              ${item.productPrice}
                            </span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
                {index === 11 && (
                  <div className="col-12">
                    <Link to={`/product/${item._id}`}>
                      <div className="product">
                        <img src={item.productImage} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              {item.productName}
                            </span>
                            <span className="product_price">
                              ${item.productPrice}
                            </span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
                {index > 11 && index < 14 && (
                  <div className="col-6">
                    <Link to={`/product/${item._id}`}>
                      <div className="product">
                        <img src={item.productImage} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              {item.productName}
                            </span>
                            <span className="product_price">
                              ${item.productPrice}
                            </span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
