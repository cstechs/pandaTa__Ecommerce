import React, { useEffect, useState } from "react";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import { Link, useHistory } from "react-router-dom";
import Banner from "../../../assets/images/user/banner.PNG";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartQuantity,
  getCart,
  removeCartItem,
  subtractCartQuantity,
} from "../../../redux/_actions/cartAction";
import { addItemToCart } from "../../../redux/_actions/cartAction";
import Loader from "../partials/loader";
import { getUser } from "../../../redux/_actions/userAction";
import { getOrder } from "../../../redux/_actions/orderAction";
import { SET_ALERT } from "../../../redux/types";
import { setAlert } from "../../../redux/_actions/alertAction";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const history = useHistory();
  let userCart = cartItem?.data?.find((x) => x.createdBy === user?._id);
  // const [quantity, setQuantity] = useState([]);
  const dispatch = useDispatch();
  if (!user) {
    history.push("/");
    dispatch(
      setAlert(SET_ALERT, {
        message: "Login now to proceed",
        alertType: "danger",
      })
    );
  }
  useEffect(() => {
    dispatch(getUser());
    dispatch(getOrder());
  }, [dispatch]);

  // useEffect(() => {
  //   setQuantity(() =>
  //     cartItem?.data?.items?.map((item) => {
  //       return {
  //         itemQuantity: item.quantity,
  //         itemId: item.productId._id,
  //         itemTotal: item.total,
  //       };
  //     })
  //   );
  // }, [cartItem]);
  useEffect(() => {}, [addItemToCart]);

  const handleAddQuantity = (id) => {
    dispatch(addCartQuantity(id, userCart?.createdBy));
  };
  const handleRemoveQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch(subtractCartQuantity(id, userCart?.createdBy));
    }
  };
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const RemoveCart = (id) => {
    dispatch(removeCartItem(userCart?.createdBy, id));
    dispatch(
      setAlert(SET_ALERT, {
        message: "Item Successfully Removed",
        alertType: "danger",
      })
    );
  };

  return (
    <>
      {cartItem ? (
        <div>
          {" "}
          <div className="component">
            <Header />
            <NavBar />
          </div>
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Cart</li>
          </ol>
          <div className="cart">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-9">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>ITEM DETAIL</th>
                        <th>PRICE </th>
                        <th>QTY</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {userCart?.items?.length > 0 ? (
                        userCart?.items?.map((item, index) => {
                          return (
                            <tr key={item._id}>
                              <td>
                                <i
                                  className="ti-close"
                                  onClick={() =>
                                    RemoveCart(item?.productId?._id)
                                  }
                                ></i>
                              </td>
                              <td>
                                <Link to={`/product/${item?.productId?._id}`}>
                                  <div className="float-left">
                                    <div
                                      className="imageBox"
                                      style={{
                                        backgroundImage: `url(/${item?.productId?.productImage})`,
                                      }}
                                    ></div>
                                  </div>
                                  <div className="float-left">
                                    <h4>{item?.productId?.productName}</h4>
                                    <span></span>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                $
                                {item?.productId?.productPrice.toLocaleString(
                                  navigator.language,
                                  {
                                    minimumFractionDigits: 0,
                                  }
                                )}
                              </td>
                              <td>
                                <div className="position-relative">
                                  <input
                                    type="number"
                                    value={item?.quantity}
                                    className="border-right-0"
                                    readOnly
                                    //defaultValue={item?.quantity}
                                  />
                                  <div className="AdjustQuantity">
                                    <i
                                      className="fa fa-plus border-bottom-0"
                                      onClick={() =>
                                        handleAddQuantity(
                                          item?.productId?._id,
                                          item?.quantity
                                        )
                                      }
                                    />
                                    <i
                                      className="fa fa-minus"
                                      onClick={() =>
                                        handleRemoveQuantity(
                                          item?.productId?._id,
                                          item?.quantity
                                        )
                                      }
                                    />
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p>
                                  $
                                  {item.total.toLocaleString(
                                    navigator.language,
                                    {
                                      minimumFractionDigits: 0,
                                    }
                                  )}
                                </p>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td />
                          <td />
                          <td>
                            <p className="empty my-5 py-3 text-dark font-16 text-center">
                              NO ITEMS FOUND
                            </p>
                          </td>
                          <td />
                          <td />
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <div className="detail">
                    {userCart?.items?.length > 0 && (
                      <div className="float-right">
                        <p>
                          Total Amount
                          <span>
                            $
                            {userCart?.subTotal.toLocaleString(
                              navigator.language,
                              {
                                minimumFractionDigits: 0,
                              }
                            ) || 0}
                          </span>
                        </p>
                        <Link to={`/checkout/${userCart?._id}`}>
                          <button className="btn btn-purple float-right font-13 ripple button-base mt-2 py-2">
                            PROCEED TO CHECKOUT
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-3 banner">
                  <img src={Banner} alt="banner" />
                  <img src={Banner} alt="banner" />
                </div>
              </div>
            </div>
          </div>
          <div className="component">
            <Footer />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Cart;
