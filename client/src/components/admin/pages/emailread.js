import React, { } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../partials/topnavbar'
import Footer from '../partials/footer'
import InboxLeftBar from '../partials/emailSideBar'

import UserImage from '../../../assets/images/admin/users/user-6.jpg'

const EmailRead = () => {

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
                                                <li class="breadcrumb-item"><Link to="/admin/email/inbox">Email</Link></li>
                                                <li class="breadcrumb-item active">Read</li>
                                            </ol>
                                        </div>
                                        <h4 class="page-title">Email Read</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div class="card-box">
                                    <div class="inbox-leftbar">
                                        <InboxLeftBar />
                                    </div>
                                    <div className="inbox-rightbar">
                                        <div className="mt-4">
                                            <h5 className="font-18">
                                                Your elite author Graphic Optimization reward is ready!
    </h5>
                                            <hr />
                                            <div className="media mb-3 mt-1">
                                                <img
                                                    className="d-flex mr-2 rounded-circle"
                                                    src={UserImage}
                                                    alt="placeholder image"
                                                    height={32}
                                                />
                                                <div className="media-body">
                                                    <small className="float-right">Dec 14, 2017, 5:17 AM</small>
                                                    <h6 className="m-0 font-14">Steven Smith</h6>
                                                    <small className="text-muted">From: jonathan@domain.com</small>
                                                </div>
                                            </div>
                                           <div className="read_msg"> 
                                            <p>Hi CsTech!</p>
                                            <p>
                                                Clicking ‘Order Service’ on the right-hand side of the above page will
                                                present you with an order page. This service has the following Briefing
                                                Guidelines that will need to be filled before placing your order:</p>
                                            <ol>
                                                <li>Your design preferences (Color, style, shapes, Fonts, others) </li>
                                                <li>Tell me, why is your item different? </li>
                                                <li>Do you want to bring up a specific feature of your item? If yes, pleasetell me</li>
                                                <li>Do you have any preference or specific thing you would like to change or improve on your item page?</li>
                                                <li>Do you want to include your item's or your provider's logo on the page? if yes, please send it to me in vector format (Ai or EPS)</li>
                                                <li>Please provide me with the copy or text to display</li>
                                            </ol>
                                            <p>
                                                Filling in this form with the above information will ensure that they will
                                                be able to start work quickly.
                                            </p>
                                            <p>
                                                You can complete your order by putting your coupon code into the
                                                Promotional code box and clicking ‘Apply Coupon’.
                                            </p>
                                            <p>
                                                <b>Best,</b> <br /> PANDA / TA
                                            </p>
                                            <hr />
                                            <h5 className="mb-3">Attachments</h5>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="card mb-1 shadow-none border">
                                                        <div className="p-2">
                                                            <div className="row align-items-center">
                                                                <div className="col-auto">
                                                                    <div className="avatar-sm">
                                                                        <span className="avatar-title bg-soft-primary text-primary rounded">
                                                                            .ZIP
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="col pl-0">
                                                                    <a
                                                                        href="javascript:void(0);"
                                                                        className="text-muted font-weight-bold">
                                                                        cstech-admin-design.zip
                                                                    </a>
                                                                    <p className="mb-0">2.3 MB</p>
                                                                </div>
                                                                <div className="col-auto">
                                                                    <a
                                                                        href="javascript:void(0);"
                                                                        className="btn btn-link btn-lg text-muted"
                                                                    >
                                                                        <i className="dripicons-download" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="card mb-1 shadow-none border">
                                                        <div className="p-2">
                                                            <div className="row align-items-center">
                                                                <div className="col-auto">
                                                                    <div className="avatar-sm">
                                                                        <span className="avatar-title bg-soft-success text-success rounded">
                                                                            .JPG
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="col pl-0">
                                                                    <a
                                                                        href="javascript:void(0);"
                                                                        className="text-muted font-weight-bold">
                                                                        Dashboard-design.jpg
                                                                     </a>
                                                                    <p className="mb-0">3.25 MB</p>
                                                                </div>
                                                                <div className="col-auto">
                                                                    <a
                                                                        href="javascript:void(0);"
                                                                        className="btn btn-link btn-lg text-muted"
                                                                    >
                                                                        <i className="dripicons-download" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="card mb-0 shadow-none border">
                                                        <div className="p-2">
                                                            <div className="row align-items-center">
                                                                <div className="col-auto">
                                                                    <div className="avatar-sm">
                                                                        <span className="avatar-title bg-secondary rounded">
                                                                            .MP4
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="col pl-0">
                                                                    <a
                                                                        href="javascript:void(0);"
                                                                        className="text-muted font-weight-bold">
                                                                        Admin-bug-report.mp4
                                                                    </a>
                                                                    <p className="mb-0">7.05 MB</p>
                                                                </div>
                                                                <div className="col-auto">
                                                                    {/* Button */}
                                                                    <a
                                                                        href="javascript:void(0);"
                                                                        className="btn btn-link btn-lg text-muted"
                                                                    >
                                                                        <i className="dripicons-download" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="mt-5 text-right">
                                                <a href className="btn btn-secondary mr-2 text-white">
                                                    <i className="mdi mdi-reply mr-1" /> Reply </a>
                                                <a href className="btn btn-light">
                                                    Forward <i className="mdi mdi-forward ml-1" />
                                                </a>
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

export default EmailRead
