import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import Invoice from "../partials/invoice";
import { Link, useHistory, useParams } from "react-router-dom";
import { getCart } from "../../../redux/_actions/cartAction";
import { createOrder } from "../../../redux/_actions/orderAction";
import { deleteCart } from "../../../redux/_actions/cartAction";
import { setAlert } from "../../../redux/_actions/alertAction";
import { SET_ALERT } from "../../../redux/types";

const CheckOut = () => {
  const [shippingShown, setshippingShown] = useState(true);
  const [paymentShown, setpaymentShown] = useState(false);
  const [invoiceShown, setinvoiceShown] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const cartItem = useSelector((state) => state.cart.cartItems);
  let userCart = cartItem?.data?.find((x) => x.createdBy === user?._id);
  let cartsellers = userCart?.items.map((user) => user.sellerId);
  console.log("seller", cartsellers);
  const { cartid } = useParams();
  const history = useHistory();

  if (!user) {
    history.push("/");
  }
  const [userProfile, setUserProfile] = useState({
    orderNumber: 2,
    cartItems: userCart,
    cartSeller: cartsellers,
    firstName: user?.firstName,
    lastName: user?.lastName,
    companyName: "",
    country: "",
    city: "",
    postalCode: "",
    address: "",
    email: user?.email,
    phone: "",
    cartId: cartid,
    createdBy: user?._id,
    updatedBy: user?._id,
  });

  const {
    firstName,
    lastName,
    companyName,
    country,
    city,
    postalCode,
    address,
    email,
    phone,
  } = userProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const HandleChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  const shippingPaymentSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      country === "" ||
      city === "" ||
      postalCode === "" ||
      address === "" ||
      email === "" ||
      phone === ""
    ) {
      dispatch(
        setAlert(SET_ALERT, {
          message: "Please Enter Required Fields",
          alertType: "danger",
        })
      );
    } else {
      setshippingShown(false);
      setpaymentShown(true);
    }
  };
  const paymentSubmit = () => {
    setpaymentShown(false);
    dispatch(createOrder(userProfile));
    dispatch(deleteCart(cartid));
    setinvoiceShown(true);
  };
  const paymentBack = () => {
    setpaymentShown(false);
    setshippingShown(true);
  };

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
          <Link to="/cart">Cart</Link>
        </li>
        <li className="breadcrumb-item active">Checkout</li>
      </ol>
      <div className="checkout">
        {shippingShown && (
          <>
            <div className="head">
              <span className="hd1 active">Shipping Address</span>

              <span className="hd3">Payment</span>
            </div>
            <div className="checkoutBox">
              <form onSubmit={(e) => shippingPaymentSubmit(e)}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">
                        First Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Jhone"
                        value={firstName}
                        onChange={(e) => HandleChange(e)}
                      />
                    </div>
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">
                        Last Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Smith"
                        value={lastName}
                        onChange={(e) => HandleChange(e)}
                      />
                    </div>
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Rosuson Industries"
                        value={companyName}
                        onChange={(e) => HandleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">
                        Country<span className="text-danger">*</span>
                      </label>
                      <select
                        name="country"
                        value={country}
                        onChange={(e) => HandleChange(e)}
                      >
                        <option value="">Select Country</option>
                        <option value="United Kingdom (UK)">
                          United Kingdom (UK)
                        </option>
                        <option value="United State">United State</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Iran">Iran</option>
                        <option value="Turkey">Turkey</option>
                      </select>
                    </div>
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">
                        Town / City<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="eg. New york"
                        value={city}
                        onChange={(e) => HandleChange(e)}
                      />
                    </div>
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">
                        Postcode<span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        name="postalCode"
                        placeholder="eg. 358745"
                        value={postalCode}
                        onChange={(e) => HandleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mt-3">
                      <label htmlFor="">
                        Address<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="eg. 2nd steer, Costrica, Uk 354548"
                        name="address"
                        value={address}
                        onChange={(e) => HandleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">
                        Email Address<span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="abc@xyz.com"
                        value={email}
                        onChange={(e) => HandleChange(e)}
                      />
                    </div>
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">
                        Phone<span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        name="phone"
                        placeholder="eg. 94 788 1221"
                        value={phone}
                        onChange={(e) => HandleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 mt-4">
                      <div className="float-left">
                        <Link
                          to="/cart"
                          className="button ripple button-base bck cursor-pointer"
                        >
                          BACK
                        </Link>
                      </div>
                      <div className="float-right">
                        <button
                          type="submit"
                          className="button ripple button-base nxt"
                        >
                          NEXT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </>
        )}
        {/* PAYMENT PORTION */}

        {paymentShown && (
          <>
            <div className="head">
              <span className="hd1">Shipping Address</span>

              <span className="hd3 active">Payment</span>
            </div>
            <div className="checkoutBox">
              <form onSubmit={paymentSubmit}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-7 mt-3">
                      <h6>Your Order</h6>
                      <table>
                        <tbody>
                          {userCart?.items.map((item) => (
                            <tr key={item._id}>
                              <td>
                                <div className="imageBox">
                                  <img
                                    src={`/${item.productId.productImage}`}
                                    alt={item.productId.productName}
                                  />
                                </div>
                              </td>
                              <td>{item.productId.productName}</td>
                              <td>
                                <span className="price">{item.quantity}</span>
                              </td>
                              <td>${item.productId.productPrice} </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="totalPriceCharge mt-3 pt-2">
                        <div className="float-left">Total Amount</div>
                        <div className="float-right">
                          <p>
                            $
                            {userCart?.subTotal.toLocaleString(
                              navigator.language,
                              {
                                minimumFractionDigits: 0,
                              }
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 mt-1">
                      <div className="paymentMethod">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12">
                              <label className="addCard">
                                Credit Card / Debit Card
                                <input type="radio" name="payOption" />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            <div className="col-12 mt-2">
                              <label htmlFor="card-name">Name on Card</label>
                              <input
                                type="text"
                                id="card-name"
                                placeholder="Daniel Hecker"
                              />
                            </div>
                            <div className="col-12 mt-2">
                              <label htmlFor="card-number">Card Number</label>
                              <input
                                type="number"
                                id="card-number"
                                placeholder="4121 4411 1414 9754"
                              />
                            </div>
                            <div className="col-md-6 mt-2">
                              <label htmlFor="card-valid">Valid Trough</label>
                              <input
                                type="date"
                                id="card-valid"
                                placeholder="4121 4411 1414 9754"
                              />
                            </div>
                            <div className="col-md-6 mt-2">
                              <label htmlFor="card-valid">Cvv</label>
                              <input
                                type="number"
                                id="card-valid"
                                placeholder="eg. 201"
                              />
                            </div>
                            <div className="col-12 mt-3">
                              <label className="addCard">
                                Paypal
                                <input type="radio" name="payOption" />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            <div className="col-12 mt-3">
                              <label htmlFor="paypal-email">
                                Email Address
                              </label>
                              <input
                                type="email"
                                id="paypal-email"
                                placeholder="abc@xyz.com"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2 mb-3">
                    <div className="col-12 mt-4">
                      <div className="float-left">
                        <span
                          className="button ripple button-base bck cursor-pointer"
                          onClick={paymentBack}
                        >
                          BACK
                        </span>
                      </div>
                      <div className="float-right">
                        <button
                          type="submit"
                          className="button ripple button-base px-5 mr-3 nxt"
                        >
                          Pay $
                          {userCart?.subTotal.toLocaleString(
                            navigator.language,
                            {
                              minimumFractionDigits: 0,
                            }
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </>
        )}
      </div>

      {invoiceShown && (
        <>
          <div className="orderPlaced">
            <Link to="/product">
              <button className="ripple button-base font-14 px-4">
                BACK TO SHOPPING
              </button>
            </Link>
          </div>
          <Invoice userCart={userCart} />
        </>
      )}
      <div className="component">
        <Footer />
      </div>
    </>
  );
};

export default CheckOut;
