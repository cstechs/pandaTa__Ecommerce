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
  // const orders = useSelector((state) => state.order.orders);
  // let placedOrder = cartItem?.data?.find((cart) =>
  //   orders?.find((order) => order.cartId === cart._id)
  // );

  const history = useHistory();
  let userCart = cartItem?.data?.find((x) => x.createdBy === user?._id);
  const [quantity, setQuantity] = useState([]);
  const dispatch = useDispatch();
  if (!user) {
    history.push("/");
    dispatch(
      setAlert(SET_ALERT, {
        message: "Login now to go on this page",
        alertType: "danger",
      })
    );
  }
  useEffect(() => {
    dispatch(getUser());
    dispatch(getOrder());
  }, [dispatch]);

  useEffect(() => {
    setQuantity(() =>
      cartItem?.data?.items?.map((item) => {
        return {
          itemQuantity: item.quantity,
          itemId: item.productId._id,
          itemTotal: item.total,
        };
      })
    );
  }, [cartItem]);
  useEffect(() => {}, [addItemToCart]);
  //   const CartIncrement = () => {
  //     setQuantity(quantity + 1);
  //     // dispatch(cartIncrement(_id,quantity))
  //   };

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
          <div className="PageTitle">Cart</div>
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
                    {
                      userCart?.items?.map((item, index) => {
                        return (
                          <tbody key={item._id}>
                            <tr>
                              <td>
                                <i
                                  className="ti-close"
                                  onClick={() =>
                                    RemoveCart(item?.productId?._id)
                                  }
                                ></i>
                              </td>
                              <td>
                                <div className="float-left">
                                  <div className="imageBox">
                                    <img
                                      src={item?.productId?.productImage}
                                      alt="ProductImage"
                                    />
                                  </div>
                                </div>
                                <div className="float-left">
                                  <h4>{item?.productId?.productName}</h4>
                                  <span></span>
                                </div>
                              </td>
                              <td>{item?.productId?.productPrice} </td>
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
                                          // index,
                                          // quantity[index]?.itemQuantity,
                                          item?.productId?._id
                                          // item.total
                                        )
                                      }
                                    />
                                    <i
                                      className="fa fa-minus"
                                      onClick={() =>
                                        handleRemoveQuantity(
                                          // index,
                                          // quantity[index].itemQuantity,
                                          // item?.productId?._id,
                                          // item.total
                                          item?.productId?._id,
                                          item?.quantity
                                        )
                                      }
                                    />
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p>{item.total}</p>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })
                      // ) : (
                      //   null
                      // )
                    }
                  </table>
                  <div className="detail">
                    <div className="float-right">
                      <p>
                        Subtotal
                        <span>{userCart?.subTotal || 0}</span>
                      </p>

                      <p>
                        Shipping<span>$0.00</span>
                      </p>
                      <p>
                        Total Amount
                        <span>{userCart?.subTotal || 0}</span>
                      </p>
                    </div>
                  </div>
                  {userCart && userCart.items.length > 0 && (
                    <Link to={`/checkout/${userCart?._id}`}>
                      <button className="btn btn-purple float-right font-13 ripple button-base">
                        PROCEED TO CHECKOUT
                      </button>
                    </Link>
                  )}
                </div>
                <div className="col-lg-3 banner">
                  <img src={Banner} />
                  <img src={Banner} />
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
