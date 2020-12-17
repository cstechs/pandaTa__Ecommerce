import React, { useState } from "react";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import { Link } from "react-router-dom";

import productimg from "../../../assets/images/user/product.png";
import { useSelector } from "react-redux";

const Product = () => {
  const wish = useSelector((state) => state.wishlist);
  console.log("wish", wish.wishLists);
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
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
        <li className="breadcrumb-item active">Wishlist</li>
      </ol>
      <div className="PageTitle">WishList</div>
      <div className="wishList">
        <div className="container-fluid">
          <div className="row">
            {wish.wishLists.map((item) => (
              <div className="col-md-3 col-6">
                <div className="product">
                  <i className="fa fa-heart"></i>
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
            ))}
          </div>
        </div>
      </div>
      <div className="component">
        <Footer />
      </div>
    </>
  );
};

export default Product;
