import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Login from "../auth/login";
import { logout } from "../../../redux/_actions/authAction";
import Register from "../auth/register";
import Sidebar from "./sidebar";
import { getCart } from "../../../redux/_actions/cartAction";
import { getProduct } from "../../../redux/_actions/productAction";
import { setAlert } from "../../../redux/_actions/alertAction";
import { SET_ALERT } from "../../../redux/types";
import Loader from "./loader";
const Header = () => {
  const toggle = () => {
    document.getElementById("sideBar").classList.toggle("Toggleshow");
  };
  const search = () => {
    document.getElementById("SeachBox").classList.toggle("Searchshow");
    document.getElementById("SeachField").focus();
  };

  const history = useHistory();
  const [isPreviewShown, setPreviewShown] = useState(false);
  const [MobileSearchView, setMobileSearchView] = useState(false);
  const [loginView, setLoginView] = useState(false);
  const [RegisterView, setRegisterView] = useState(false);

  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const state = useSelector((state) => state.auth);

  const cartItem = useSelector((state) => state.cart.cartItems);

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
  }, [dispatch]);
  if (user) {
    var userCart = cartItem?.data?.find((x) => x.createdBy === user._id);
  }
  var cartLength = userCart?.items?.length;

  if (cartLength === undefined) {
    cartLength = 0;
  }

  const SearchBoxHandler = () => {
    setMobileSearchView(!MobileSearchView);
  };
  const LoginHandler = () => {
    setLoginView(!loginView);
  };
  const RegisterHandler = () => {
    setRegisterView(!RegisterView);
  };

  if (state.loading === false) {
    window.location.reload();
  }

  useEffect(() => {}, [wishList]);

  useEffect(() => {
    if (user) {
      {
        user.isVerified && setPreviewShown(true);
      }
    } else {
      setPreviewShown(false);
    }
    dispatch(getProduct());
  }, [user]);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <>
      {product ? (
        <div>
          {MobileSearchView && (
            <div className="SearchBox">
              <input
                type="text"
                autoFocus
                placeholder="Search Here ..."
                onChange={(e) => handleChange(e)}
              />
              <i className="fa fa-times" onClick={SearchBoxHandler} />
              <div className="searchDropdown">
                {searchProduct?.map(({ _id, productName }) => (
                  <Link to={`/product/${_id}`} key={_id}>
                    <span>{productName}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
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
                    {searchProduct?.map(({ _id, productName }) => (
                      <Link to={`/product/${_id}`} key={_id}>
                        <span>{productName}</span>
                      </Link>
                    ))}
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
                      <i
                        className="fa fa-search"
                        onClick={SearchBoxHandler}
                      ></i>
                      <Link to="/wishlist">
                        <i className="fa fa-heart"></i>
                        <span className="badge-darkpurple rounded-circle notification-icon-badge">
                          {wishList?.length || 0}
                        </span>
                      </Link>
                      <Link to="/cart">
                        <i className="fa fa-shopping-cart"></i>
                        <span className="badge-darkpurple rounded-circle notification-icon-badge">
                          {product && cartLength}
                        </span>
                      </Link>
                      <div className="btn-group">
                        <span type="button" data-toggle="dropdown">
                          {user.role === "seller" ? (
                            <img
                              src={`/${user.userImage}`}
                              alt={user.userName}
                              className="rounded-circle"
                            />
                          ) : (
                            <i className="fa fa-user-circle" />
                          )}
                          <i className="fe-chevron-down" />
                        </span>
                        <div className="dropdown-menu dropdown-menu-right">
                          <div>
                            {user.role === "seller" ? (
                              <Link
                                to="/admin/setting"
                                className="dropdown-item"
                              >
                                <i className="fa fa-user" />
                                {user.userName}
                              </Link>
                            ) : (
                              <Link to="/profile" className="dropdown-item">
                                <i className="fa fa-user" />
                                {user.userName}
                              </Link>
                            )}
                          </div>
                          <div>
                            {user.role === "seller" ? (
                              <Link
                                to="/admin/orders"
                                className="dropdown-item"
                              >
                                <i className="fas fa-box-open" />
                                Orders
                              </Link>
                            ) : (
                              <Link to="/orders" className="dropdown-item">
                                <i className="fas fa-box-open" />
                                Orders
                              </Link>
                            )}
                          </div>
                          <div>
                            <span
                              className="dropdown-item"
                              onClick={() => {
                                dispatch(logout());
                                window.location.reload();
                                dispatch(
                                  setAlert(SET_ALERT, {
                                    message: "Logout Successfully.",
                                    alertType: "danger",
                                  })
                                );
                              }}
                            >
                              <i className="fas fa-sign-out-alt" />
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
              <Login
                loginHandler={LoginHandler}
                registerHandler={RegisterHandler}
              />
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
