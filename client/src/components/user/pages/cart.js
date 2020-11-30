import React, { } from 'react'
import Header from '../partials/header'
import NavBar from '../partials/navbar'
import Footer from '../partials/footer'
import { Link } from 'react-router-dom'

import productimg from '../../../assets/images/user/product.png'
import Banner from '../../../assets/images/user/banner.PNG'

const Cart = () =>  {
        return (
            <>
                <div className="component">
                    <Header />
                    <NavBar />
                </div>
                <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
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
                                    <tbody>
                                        <tr>
                                            <td><i className="ti-close" ></i></td>
                                            <td>
                                                <div className="float-left">
                                                    <div className="imageBox">
                                                        <img src={productimg} alt="ProductImage" />
                                                    </div>
                                                </div>
                                                <div className="float-left">
                                                    <h4>Product Name Here</h4>
                                                    <span>Supplier's Name Here</span>
                                                </div>
                                            </td>
                                            <td>$28.99 </td>
                                            <td>
                                                <input type="number" id="" placeholder="1" />
                                            </td>
                                            <td><p>$28.99</p></td>
                                        </tr>
                                        <tr>
                                            <td><i className="ti-close" ></i></td>
                                            <td>
                                                <div className="float-left">
                                                    <div className="imageBox">
                                                        <img src={productimg} alt="ProductImage" />
                                                    </div>
                                                </div>
                                                <div className="float-left">
                                                    <h4>Product Name Here</h4>
                                                    <span>Supplier's Name Here</span>
                                                </div>
                                            </td>
                                            <td>$28.99 </td>
                                            <td>
                                                <input type="number" id="" placeholder="1" />
                                            </td>
                                            <td><p>$28.99</p></td>
                                        </tr>
                                        <tr>
                                            <td><i className="ti-close" ></i></td>
                                            <td>
                                                <div className="float-left">
                                                    <div className="imageBox">
                                                        <img src={productimg} alt="ProductImage" />
                                                    </div>
                                                </div>
                                                <div className="float-left">
                                                    <h4>Product Name Here</h4>
                                                    <span>Supplier's Name Here</span>
                                                </div>
                                            </td>
                                            <td>$28.99 </td>
                                            <td>
                                                <input type="number" id="" placeholder="1" />
                                            </td>
                                            <td><p>$28.99</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="detail">
                                    <div className="float-left">
                                        <input type="text" placeholder="Coupen code" />
                                        <button className="ripple button-base">APPLY</button>
                                    </div>
                                    <div className="float-right">
                                        <p>Subtotal<span>$145.84</span></p>
                                        <p>Shipping<span>$5.00</span></p>
                                        <p>Total Amount<span>$254.64</span></p>
                                    </div>
                                </div>
                                <Link to="/checkout"><button className="btn btn-purple float-right font-13 ripple button-base">PROCEED TO CHECKOUT</button></Link>
                            </div>
                            <div className="col-lg-3 banner">
                                <img src={Banner}/>
                                <img src={Banner}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="component">
                    <Footer />
                </div>
            </>
        )
}

export default Cart
