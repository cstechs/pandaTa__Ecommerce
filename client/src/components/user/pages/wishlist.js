import React, { useEffect, useState } from "react";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../redux/_actions/userAction";

const Product = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [wishList] = useState(JSON.parse(localStorage.getItem("WishList")));

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

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
      <div className="wishList">
        <div className="container-fluid">
          <div className="row">
            {wishList ? (
              wishList?.map((item) => (
                <div className="col-md-3 col-6">
                  <Link to={`/product/${item._id}`}>
                    <div className="product">
                      <div
                        className="image-portion"
                        style={{
                          backgroundImage: `url(${item.productImage})`,
                        }}
                      ></div>
                      <div className="content">
                        <div className="content-left">
                          <span className="vendor">
                            {
                              users.find((x) => x._id === item.createdBy)
                                ?.userName
                            }
                          </span>
                          <span className="product_name">
                            {item.productName}
                          </span>
                          <span className="product_price">
                            {item.productPrice}
                          </span>
                        </div>
                        <div className="content-right">
                          <i className="fa fa-caret-right"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="NoItem">
                <p> No items In wishlist </p>
                <Link to="/product" className="btn btn-purple">
                  Add Item
                </Link>
              </div>
            )}
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
