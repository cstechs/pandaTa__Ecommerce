import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../partials/topnavbar'
import Footer from '../partials/footer'

const Invoice = () => {

    return (
        <div className="Dashobard">
            <div id="wrapper">
                <Navbar />
                <div className="content-page" id="content">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div class="page-title-box">
                                        <div class="page-title-right">
                                            <ol class="breadcrumb m-0">
                                                <li class="breadcrumb-item"><Link to="/admin">PANDA / TA</Link></li>
                                                <li class="breadcrumb-item active">Invoices</li>
                                            </ol>
                                        </div>
                                        <h4 class="page-title">Invoice</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="Invoice">
                                                <div className="InvoiceTop">
                                                    <div className="float-left">
                                                        <h1>Company </h1>
                                                        <br />
                                                        <p>Melbourne, Australia</p>
                                                        <p>P: (123) 456-7890</p>
                                                    </div>
                                                    <div className="float-right text-right">
                                                        <h1>Invoice</h1>
                                                        <button className="ripple button-base bg-darkpurple text-white mt-2">Print</button>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="InvoiceDetail">
                                                    <div className="float-left">
                                                        <h6>Invoice to</h6>
                                                        <p>John Doe</p>
                                                        <p>795 Folsom Ave, Suite 600</p>
                                                        <p>San Francisco, CA 94107</p>
                                                    </div>
                                                    <div className="float-right">
                                                        <p><span> Order Date:</span> March 15, 2016</p>
                                                        <p><span>Order Status:</span><span className="badge">Pending</span></p>
                                                        <p><span>Order ID:</span> #1234567</p>
                                                    </div>
                                                    <br/>
                                                    <div className="table-responsive mt-5">
                                                        <table className="table mb-0 mt-4">
                                                            <thead className="thead-light">
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>ITEM</th>
                                                                    <th>DESCRIPTION</th>
                                                                    <th>QUANTITY</th>
                                                                    <th>PRICE</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th>1</th>
                                                                    <td>Woman Peacoat </td>
                                                                    <td>Lorem ipsum dolor sit amet Consectetur</td>
                                                                    <td>432 </td>
                                                                    <td>$9,928</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>2</th>
                                                                    <td>Woman Peacoat </td>
                                                                    <td>Lorem ipsum dolor sit amet Consectetur</td>
                                                                    <td>432 </td>
                                                                    <td>$9,928</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>3</th>
                                                                    <td>Woman Peacoat </td>
                                                                    <td>Lorem ipsum dolor sit amet Consectetur</td>
                                                                    <td>432 </td>
                                                                    <td>$9,928</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="text-right mt-3">
                                                        <h4><strong> Sub-total:</strong> 2930.00</h4>
                                                        <h4><strong> Discout:</strong> 12.9%</h4>
                                                        <h4><strong> VAT:</strong> 12.9%</h4>
                                                        <h3>USD 2930.00</h3>
                                                        <button className="ripple button-base bg-yellow text-white mb-3">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div >
    )
}

export default Invoice
