import React, { useEffect } from 'react'
import Header from '../partials/header'
import NavBar from '../partials/navbar'
import Footer from '../partials/footer'
import { Link } from 'react-router-dom'
import $ from 'jquery'

import productimg from '../../../assets/images/user/product.png'

const CheckOut = () => {

    const shippingPaymentSubmit = () => {
        document.getElementsByClassName("hd1")[0].classList.remove("active");
        document.getElementsByClassName("hd2")[0].classList.toggle("active");
        document.getElementById("ShippingAddress").style.display = "none";
        document.getElementById("BillingAddress").style.display = "block";
    }
    const billingDetailSubmit = () => {
        document.getElementsByClassName("hd2")[0].classList.remove("active");
        document.getElementsByClassName("hd3")[0].classList.toggle("active");
        document.getElementById("BillingAddress").style.display = "none";
        document.getElementById("Payment").style.display = "block";
    }
    const paymentSubmit = () => {
        document.getElementById("CheckOut").style.display = "none";
        document.getElementById("OrderSuccess").style.display = "block";
    }
    const billingBack = () => {
        document.getElementsByClassName("hd2")[0].classList.remove("active");
        document.getElementsByClassName("hd1")[0].classList.toggle("active");
        document.getElementById("BillingAddress").style.display = "none";
        document.getElementById("ShippingAddress").style.display = "block";
    }
    const paymentBack = () => {
        document.getElementsByClassName("hd3")[0].classList.remove("active");
        document.getElementsByClassName("hd2")[0].classList.toggle("active");
        document.getElementById("Payment").style.display = "none";
        document.getElementById("BillingAddress").style.display = "block";
    }
    useEffect(() => {

        $("#shipping_form").submit(function (e) {
            e.preventDefault();
        });
        $("#billing_form").submit(function (e) {
            e.preventDefault();
        });
    })
    return (
        <>
            <div className="component">
                <Header />
                <NavBar />
            </div>
            <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/cart">Cart</Link></li>
                <li className="breadcrumb-item active">Checkout</li>
            </ol>
            <div className="checkout" id="CheckOut">
            <div className="PageTitle">Checkout</div>
                <div className="head">
                    <span className="hd1 active">Shipping Address</span>
                    <span className="hd2">Billing Detail </span>
                    <span className="hd3">Payment</span>
                </div>
                <div className="checkoutBox">
                    {/* SHIPPING ADDRESS PORTION */}
                    <div id="ShippingAddress">
                        <form id="shipping_form" onSubmit={shippingPaymentSubmit}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4 mt-3">
                                        <label htmlFor="">First Name<span className="text-danger">*</span></label>
                                        <input type="text" required placeholder="Jhone" />
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label htmlFor="">Last Name<span className="text-danger">*</span></label>
                                        <input type="text" required placeholder="Smith" />
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label htmlFor="">Company Name</label>
                                        <input type="text" placeholder="Rosuson Industries" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mt-3">
                                        <label htmlFor="">Country<span className="text-danger">*</span></label>
                                        <select required="required">
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
                                        <label htmlFor="">Town / City<span className="text-danger">*</span></label>
                                        <input type="text" required placeholder="eg. New york" />
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label htmlFor="">Postcode<span className="text-danger">*</span></label>
                                        <input type="number" required placeholder="eg. 358745" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 mt-3">
                                        <label htmlFor="">Address<span className="text-danger">*</span></label>
                                        <input type="text" required placeholder="eg. 2nd steer, Costrica, Uk 354548" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mt-3">
                                        <label htmlFor="">Email Address<span className="text-danger">*</span></label>
                                        <input type="email" required placeholder="abc@xyz.com" />
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
                                            <Link to="/cart" className="button ripple button-base bck">BACK</Link>
                                        </div>
                                        <div className="float-right">
                                            <button type="submit" className="button ripple button-base nxt">NEXT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* BILLING DETAIL PORTION */}
                    <div id="BillingAddress">
                        <form id="billing_form" onSubmit={billingDetailSubmit}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4 mt-3">
                                        <label htmlFor="">First Name<span className="text-danger">*</span></label>
                                        <input type="text" required placeholder="Jhone" />
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label htmlFor="">Last Name<span className="text-danger">*</span></label>
                                        <input type="text" required placeholder="Smith" />
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label htmlFor="">Company Name</label>
                                        <input type="text" placeholder="Rosuson Industries" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mt-3">
                                        <label htmlFor="">Country<span className="text-danger">*</span></label>
                                        <select required="required">
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
                                        <label htmlFor="">Town / City<span className="text-danger">*</span></label>
                                        <input type="text" required placeholder="eg. New york" />
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label htmlFor="">Postcode<span className="text-danger">*</span></label>
                                        <input type="number" required placeholder="eg. 358745" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 mt-3">
                                        <label htmlFor="">Address<span className="text-danger">*</span></label>
                                        <input type="text" required placeholder="eg. 2nd steer, Costrica, Uk 354548" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mt-3">
                                        <label htmlFor="">Email Address<span className="text-danger">*</span></label>
                                        <input type="email" required placeholder="abc@xyz.com" />
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
                                            <span className="button ripple button-base bck" onClick={billingBack}>BACK</span>
                                        </div>
                                        <div className="float-right">
                                            <button type="submit" className="button ripple button-base nxt">NEXT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* PAYMENT PORTION */}
                    <div id="Payment">
                        <form id="paymentForm" onSubmit={paymentSubmit}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-7 mt-3">
                                        <h6>Your Order</h6>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="imageBox">
                                                            <img src={productimg} alt="" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Product Name Here
                                                </td>
                                                    <td>
                                                        <input type="number" placeholder="1" />
                                                    </td>
                                                    <td>
                                                        $28.99
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="imageBox">
                                                            <img src={productimg} alt="" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Product Name Here
                                                </td>
                                                    <td>
                                                        <input type="number" placeholder="1" />
                                                    </td>
                                                    <td>
                                                        $28.99
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="imageBox">
                                                            <img src={productimg} alt="" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Product Name Here
                                                </td>
                                                    <td>
                                                        <input type="number" placeholder="1" />
                                                    </td>
                                                    <td>
                                                        $28.99
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="imageBox">
                                                            <img src={productimg} alt="" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Product Name Here
                                                </td>
                                                    <td>
                                                        <input type="number" placeholder="1" />
                                                    </td>
                                                    <td>
                                                        $28.99
                                                </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="shippingCharge mt-3 pt-2">
                                            <div className="float-left">
                                                Shipping Charge
                                        </div>
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
                                                        <label className="addCard">Credit Card / Debit Card
                                                        <input type="radio" name="payOption" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                    <div className="col-12 mt-2">
                                                        <label htmlFor="card-name">Name on Card</label>
                                                        <input type="text" id="card-name" placeholder="Daniel Hecker" />
                                                    </div>
                                                    <div className="col-12 mt-2">
                                                        <label htmlFor="card-number">Card Number</label>
                                                        <input type="number" id="card-number" placeholder="4121 4411 1414 9754" />
                                                    </div>
                                                    <div className="col-md-6 mt-2">
                                                        <label htmlFor="card-valid">Valid Trough</label>
                                                        <input type="date" id="card-valid" placeholder="4121 4411 1414 9754" />
                                                    </div>
                                                    <div className="col-md-6 mt-2">
                                                        <label htmlFor="card-valid">Cvv</label>
                                                        <input type="number" id="card-valid" placeholder="eg. 201" />
                                                    </div>
                                                    <div className="col-12 mt-3">
                                                        <label className="addCard">Paypal
                                                        <input type="radio" name="payOption" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                    <div className="col-12 mt-3">
                                                        <label htmlFor="paypal-email">Email Address</label>
                                                        <input type="email" id="paypal-email" placeholder="abc@xyz.com" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2 mb-3">
                                    <div className="col-12 mt-4">
                                        <div className="float-left">
                                            <span className="button ripple button-base bck" onClick={paymentBack}>BACK</span>
                                        </div>
                                        <div className="float-right">
                                            <button type="submit" className="button ripple button-base px-5 mr-3 nxt">Pay $254.84</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="orderPlaced" id="OrderSuccess">
                <h1>Congratulations</h1>
                <p>Order Placed Successfully!</p>
                <Link to="/product"><button className="ripple button-base">BACK TO SHOPPING</button></Link>
            </div>
            <div className="component">
                <Footer />
            </div>
        </>
    )
}

export default CheckOut
