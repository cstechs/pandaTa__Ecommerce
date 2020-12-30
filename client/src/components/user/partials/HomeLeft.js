import React from "react";
import { Link } from "react-router-dom";
import productimg from "../../../assets/images/user/product.png";

const HomeLeft = ({ product }) => {
  return (
    <div className="col-md-6">
      <div className="container-fluid">
        <div className="row">
          {product.products.data?.map((item, index) => {
            return (
              <React.Fragment key={item._id}>
                {index === 0 && (
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
                      </div>{" "}
                    </Link>
                  </div>
                )}
                {index < 7 && index > 0 && (
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

          {/* <div className="col-6">
            <div className="product">
              <img src={productimg} alt="" />
              <div className="content">
                <div className="content-left">
                  <span className="vendor">Supplier’s Name Here</span>
                  <span className="product_name">Product Name Here</span>
                  <span className="product_price">$29,354.75</span>
                </div>
                <div className="content-right">
                  <i className="fa fa-caret-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="product">
              <img src={productimg} alt="" />
              <div className="content">
                <div className="content-left">
                  <span className="vendor">Supplier’s Name Here</span>
                  <span className="product_name">Product Name Here</span>
                  <span className="product_price">$29,354.75</span>
                </div>
                <div className="content-right">
                  <i className="fa fa-caret-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="product">
              <img src={productimg} alt="" />
              <div className="content">
                <div className="content-left">
                  <span className="vendor">Supplier’s Name Here</span>
                  <span className="product_name">Product Name Here</span>
                  <span className="product_price">$29,354.75</span>
                </div>
                <div className="content-right">
                  <i className="fa fa-caret-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="product">
              <img src={productimg} alt="" />
              <div className="content">
                <div className="content-left">
                  <span className="vendor">Supplier’s Name Here</span>
                  <span className="product_name">Product Name Here</span>
                  <span className="product_price">$29,354.75</span>
                </div>
                <div className="content-right">
                  <i className="fa fa-caret-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="product">
              <img src={productimg} alt="" />
              <div className="content">
                <div className="content-left">
                  <span className="vendor">Supplier’s Name Here</span>
                  <span className="product_name">Product Name Here</span>
                  <span className="product_price">$29,354.75</span>
                </div>
                <div className="content-right">
                  <i className="fa fa-caret-right"></i>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
