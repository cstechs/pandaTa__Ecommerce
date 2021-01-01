import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Login from "../auth/login";
import { logout } from "../../../redux/_actions/authAction";
import Register from "../auth/register";
import Sidebar from "./sidebar";
import { getCart } from "../../../redux/_actions/cartAction";
import UserImage from "../../../assets/images/admin/users/user-2.jpg";
import { getProduct } from "../../../redux/_actions/productAction";
import Loader from "./loader";
const Header = () => {
  const toggle = () => {
    document.getElementById("sideBar").classList.toggle("Toggleshow");
  };
  const search = () => {
    document.getElementById("SeachBox").classList.toggle("Searchshow");
    document.getElementById("SeachField").focus();
  };

  const [isPreviewShown, setPreviewShown] = useState(false);
  const [loginView, setLoginView] = useState(false);
  const [RegisterView, setRegisterView] = useState(false);
  const [SellerRegisterView, setSellerRegisterView] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const state = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const cartItem = useSelector((state) => state.cart.cartItems);
  //const history = useHistory();
  //console.log(cart?.cartItems?.data?.items?.length);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [searchProduct, setSearchProduct] = useState([]);

  const wishList = JSON.parse(localStorage.getItem("WishList"));

  const handleChange = (e) => {
    let temp = product?.products?.data?.filter((item) =>
      item.productName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (e.target.value === "") {
      temp = [];
    }
    setSearchProduct(temp);
  };
  useEffect(() => {
    dispatch(getCart());
  }, []);
  if (user) {
    var userCart = cartItem?.data?.find((x) => x.createdBy === user._id);
  }

  const LoginHandler = () => {
    setLoginView(!loginView);
  };
  const RegisterHandler = () => {
    setRegisterView(!RegisterView);
  };

  if (state.loading === false) {
    window.location.reload();
  }

  useEffect(() => {}, [wishList?.length]);

  useEffect(() => {
    if (user) {
      {
        user.isVerified && setPreviewShown(true);
      }
    } else {
      setPreviewShown(false);
    }

    dispatch(getProduct());
    window.onclick = function (event) {
      if (!event.target.matches(".searc")) {
        var dropdowns = document.getElementsByClassName("SearchBox");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("Searchshow")) {
            openDropdown.classList.remove("Searchshow");
          }
        }
      }
    };
  }, [user]);
  return (
    <>
      {product ? (
        <div>
          <div className="SearchBox" id="SeachBox">
            <input
              type="text"
              id="SeachField"
              autoFocus
              placeholder="Search Here ..."
            />
            <i className="fa fa-search"></i>
          </div>
          <header>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3 col-6">
                  <Link to="/">
                    <div className="logo">PANDA / TA</div>
                  </Link>
                </div>
                <div className="col-md-4">
                  <div className="searchbox">
                    <input
                      type="text"
                      placeholder="Search for Products"
                      onChange={(e) => handleChange(e)}
                    />
                    <button className="ripple">Search</button>
                  </div>
                  <div className="searchDropdown">
                    {searchProduct?.map(
                      ({
                        _id,
                        productName,
                        productPrice,
                        productImage,
                        productSubCategory,
                      }) => (
                        <Link to={`/product/${_id}`} key={_id}>
                          <span>{productName}</span>
                        </Link>
                      )
                    )}
                  </div>
                </div>
                <div className="col-md-5 col-6">
                  {!isPreviewShown && (
                    <>
                      <button
                        className="ripple button-base"
                        onClick={() => setLoginView(!loginView)}
                      >
                        Log in
                      </button>
                      <button
                        className="ripple button-base"
                        onClick={() => setRegisterView(!RegisterView)}
                      >
                        Sign up
                      </button>
                      <Link to="/sellerapplication">
                        <button className="ripple button-base">
                          Sign up as seller
                        </button>
                      </Link>

                      <i className="fa fa-search searc" onClick={search}></i>
                      <Link to="/wishlist">
                        <i className="fa fa-heart"></i>
                      </Link>
                      <Link to="/cart">
                        <i className="fa fa-shopping-cart"></i>
                        <span className="badge-darkpurple rounded-circle notification-icon-badge">
                          0
                        </span>
                      </Link>
                      <i className="fa fa-bars" onClick={toggle}></i>
                    </>
                  )}
                  {isPreviewShown && (
                    <>
                      {((user && user.role === "seller") ||
                        (user && user.role === "admin")) && (
                        <Link to="/admin">
                          <button className="ripple button-base px-4">
                            Dashboard
                          </button>
                        </Link>
                      )}
                      <i className="fa fa-search searc" onClick={search}></i>
                      <Link to="/wishlist">
                        <i className="fa fa-heart"></i>
                        <span className="badge-darkpurple rounded-circle notification-icon-badge">
                          {wishList?.length || 0}
                        </span>
                      </Link>
                      <Link to="/cart">
                        <i className="fa fa-shopping-cart"></i>
                        <span className="badge-darkpurple rounded-circle notification-icon-badge">
                          {(product && userCart?.items?.length) || 0}
                        </span>
                      </Link>
                      <div className="btn-group">
                        <span
                          type="button"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <img
                            src={UserImage}
                            alt="user-image"
                            className="rounded-circle"
                          />
                          <label>{user.userName}</label>
                        </span>
                        <div className="dropdown-menu">
                          <div>
                            <span className="dropdown-item">
                              <i className="fa fa-user"></i>
                              Profile
                            </span>
                          </div>
                          <div>
                            <span
                              className="dropdown-item"
                              onClick={() => {
                                dispatch(logout());
                                window.location.reload();
                              }}
                            >
                              <i className="fas fa-sign-out-alt"></i>
                              LogOut
                            </span>
                          </div>
                        </div>
                      </div>
                      <i className="fa fa-bars" onClick={toggle}></i>
                    </>
                  )}
                </div>
              </div>
            </div>
          </header>
          {loginView && (
            <div className="modal" role="dialog">
              <Login loginHandler={LoginHandler} />
            </div>
          )}
          {RegisterView && (
            <div className="modal" role="dialog">
              <Register registerHandler={RegisterHandler} />
            </div>
          )}
          <div className="Side_Bar" id="sideBar">
            <Sidebar
              LoginHandler={LoginHandler}
              RegisterHandler={RegisterHandler}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default Header;
