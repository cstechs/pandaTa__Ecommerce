import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import ProductSideBar from "../partials/productSideBar";
import productimg from "../../../assets/images/user/product.png";
import businessimg from "../../../assets/images/user/businessLogo.png";
import UserImage from "../../../assets/images/admin/users/user-2.jpg";
import { getCategory } from "../../../redux/_actions/categoryAction";

const Category = () => {
  function categoryDropDownToggle() {
    document.getElementById("categoryShowIcon").classList.toggle("show");
    document.getElementById("categoryHideIcon").classList.toggle("hide");
    document.getElementById("categoryDropDown").classList.toggle("hide");
  }

  function materialDropDownToggle() {
    document.getElementById("materialShowIcon").classList.toggle("show");
    document.getElementById("materialHideIcon").classList.toggle("hide");
    document.getElementById("materialDropDown").classList.toggle("hide");
  }

  function finishDropDownToggle() {
    document.getElementById("finishShowIcon").classList.toggle("show");
    document.getElementById("finishHideIcon").classList.toggle("hide");
    document.getElementById("finishDropDown").classList.toggle("hide");
  }

  function styleDropDownToggle() {
    document.getElementById("styleShowIcon").classList.toggle("show");
    document.getElementById("styleHideIcon").classList.toggle("hide");
    document.getElementById("styleDropDown").classList.toggle("hide");
  }

  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  return (
    <>
      <div className="component">
        <Header />
        <NavBar />
      </div>
      <ol className="breadcrumb m-0">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/">Sellers</Link>
        </li>
        <li className="breadcrumb-item active">Jena & Jeel</li>
      </ol>
      <div className="seller">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="SideBar">
                <ProductSideBar />
              </div>
            </div>
            <div className="col-md-9">
              <div className="products">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product">
                        <img src={productimg} alt="" />
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">Supplier’s Name Here</span>
                            <span className="product_name">
                              Product Name Here
                            </span>
                            <span className="product_price">$29,354.75</span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="component">
        <Footer />
      </div>
    </>
  );
};

export default Category;
