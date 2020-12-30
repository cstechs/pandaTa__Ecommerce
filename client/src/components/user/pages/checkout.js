import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import { Link } from "react-router-dom";
import { getCart } from "../../../redux/_actions/cartAction";
import productimg from "../../../assets/images/user/product.png";

const CheckOut = () => {
  const [shippingShown, setshippingShown] = useState(true);
  const [billingShown, setbillingShown] = useState(false);
  const [paymentShown, setpaymentShown] = useState(false);
  const [successShown, setsuccessShown] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const cartItem = useSelector((state) => state.cart.cartItems);
  const [userProfile, setUserProfile] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    town: "",
    postCode: "",
    address: "",
    email: "",
    phoneNum: "",
  });

  const {
    firstName,
    lastName,
    companyName,
    country,
    town,
    postCode,
    address,
    email,
    phoneNum,
  } = userProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const HandleChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  const shippingPaymentSubmit = () => {
    setshippingShown(false);
    setbillingShown(true);
  };
  const billingDetailSubmit = () => {
    setbillingShown(false);
    setpaymentShown(true);
  };
  const paymentSubmit = () => {
    setpaymentShown(false);
    setsuccessShown(true);
  };
  const billingBack = () => {
    setbillingShown(false);
    setshippingShown(true);
  };
  const paymentBack = () => {
    setpaymentShown(false);
    setbillingShown(true);
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
        <div className="PageTitle">Checkout</div>
        {shippingShown && (
          <>
            <div className="head">
              <span className="hd1 active">Shipping Address</span>
              <span className="hd2">Billing Detail </span>
              <span className="hd3">Payment</span>
            </div>
            <div className="checkoutBox">
              <form onSubmit={shippingPaymentSubmit}>
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
                      <select name="country" onChange={(e) => HandleChange(e)}>
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
                        name="town"
                        placeholder="eg. New york"
                        value={town}
                        onChange={(e) => HandleChange(e)}
                      />
                    </div>
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">
                        Postcode<span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        name="postCode"
                        placeholder="eg. 358745"
                        value={postCode}
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
                      <label htmlFor="">Phone</label>
                      <input
                        type="number"
                        name="phoneNum"
                        placeholder="eg. 94 788 1221"
                        value={phoneNum}
                        onChange={(e) => HandleChange(e)}
                      />
                    </div>
                    <div className="col-md-4 mt-3">
                      <div className="createAccount">
                        <label className="check">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <p>Create an Account?</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 mt-4">
                      <div className="float-left">
                        <Link
                          to="/cart"
                          className="button ripple button-base bck"
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
        {/* BILLING DETAIL PORTION */}
        {billingShown && (
          <>
            <div className="head">
              <span className="hd1">Shipping Address</span>
              <span className="hd2 active">Billing Detail </span>
              <span className="hd3">Payment</span>
            </div>
            <div className="checkoutBox">
              <form onSubmit={billingDetailSubmit}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">
                        First Name<span className="text-danger">*</span>
                      </label>
                      <input type="text" placeholder="Jhone" />
                    </div>
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">
                        Last Name<span className="text-danger">*</span>
                      </label>
                      <input type="text" placeholder="Smith" />
                    </div>
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">Company Name</label>
                      <input type="text" placeholder="Rosuson Industries" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">
                        Country<span className="text-danger">*</span>
                      </label>
                      <select>
                        <option value="">Select Country</option>
                        <option value="">United Kingdom (UK)</option>
                        <option value="">United State</option>
                        <option value="">Pakistan</option>
                        <option value="">Iraq</option>
                        <option value="">Iran</option>
                        <option value="">Turkey</option>
                      </select>
                    </div>
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">
                        Town / City<span className="text-danger">*</span>
                      </label>
                      <input type="text" placeholder="eg. New york" />
                    </div>
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">
                        Postcode<span className="text-danger">*</span>
                      </label>
                      <input type="number" placeholder="eg. 358745" />
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
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">
                        Email Address<span className="text-danger">*</span>
                      </label>
                      <input type="email" placeholder="abc@xyz.com" />
                    </div>
                    <div className="col-md-4 mt-3">
                      <label htmlFor="">Phone</label>
                      <input type="number" placeholder="eg. 94 788 1221" />
                    </div>
                    <div className="col-md-4 mt-3">
                      <div className="createAccount">
                        <label className="check">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <p>Create an Account?</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 mt-4">
                      <div className="float-left">
                        <span
                          className="button ripple button-base bck"
                          onClick={billingBack}
                        >
                          BACK
                        </span>
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
              <span className="hd2">Billing Detail </span>
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
                          {cartItem?.data?.items?.map((item) => (
                            <>
                              {cartItem.data.createdBy == user._id && (
                                <tr>
                                  <td>
                                    <div className="imageBox">
                                      <img
                                        src={item.productId.productImage}
                                        alt=""
                                      />
                                    </div>
                                  </td>
                                  <td>{item.productId.productName}</td>
                                  <td>
                                    <span className="price">
                                      {item.quantity}
                                    </span>
                                  </td>
                                  <td>${item.productId.productPrice} </td>
                                </tr>
                              )}
                            </>
                          ))}
                        </tbody>
                      </table>
                      <div className="shippingCharge mt-3 pt-2">
                        <div className="float-left">Shipping Charge</div>
                        <div className="float-right">
                          <p>$5.00</p>
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
                          className="button ripple button-base bck"
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
                          Pay $254.84
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

      {successShown && (
        <div className="orderPlaced">
          <h1>Congratulations</h1>
          <p>Order Placed Successfully!</p>
          <Link to="/product">
            <button className="ripple button-base">BACK TO SHOPPING</button>
          </Link>
        </div>
      )}
      <div className="component">
        <Footer />
      </div>
    </>
  );
};

export default CheckOut;
