import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../partials/topnavbar'
import Footer from '../partials/footer'


const updateProfile = () => {

    return (
        <div className="Dashobard">
            <div id="wrapper">
                <Navbar />
                <div className="content-page" id="content">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box">
                                        <div className="page-title-right">
                                            <ol className="breadcrumb m-0">
                                                <li className="breadcrumb-item"><Link to="/admin">PANDA / TA</Link></li>
                                                <li className="breadcrumb-item active">Setting</li>
                                            </ol>
                                        </div>
                                        <h4 className="page-title">Account Setting</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="profile-setting-edit">
                                            <div className="card-body">
                                                <div className="row mt-3 pr-3">
                                                    <div className="col-12">
                                                        <div className="profilePic">
                                                            <label className="Fileinput">Upload Profile Pic
                                                             <input type="file" size="60" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-3 pl-2">
                                                    <div className="col-12">
                                                        <label>User Name</label>
                                                        <input type="text" placeholder="User Name" />
                                                    </div> 
                                                </div>
                                                <div className="row mt-3 pl-2">
                                                    <div className="col-md-6">
                                                        <label>First Name</label>
                                                        <input type="text" placeholder="First Name" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label>Last Name</label>
                                                        <input type="text" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="row mt-3 pl-2">
                                                    <div className="col-md-6">
                                                        <label>Email</label>
                                                        <input type="email" placeholder="user@cstechsoftwares.com" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label>Phone Number</label>
                                                        <input type="number" placeholder="+92" />
                                                    </div> 
                                                </div>
                                                <div className="row mt-3 pl-2">
                                                    <div className="col-md-6">
                                                        <label>City</label>
                                                        <input type="text" placeholder="City Name" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label>Country</label>
                                                        <input type="text" placeholder="Country Name" />
                                                    </div> 
                                                </div>
                                                <div className="row mt-2 pl-2">
                                                    <div className="col-12">
                                                        <label>Bio</label>
                                                        <textarea placeholder="Enter Bio"></textarea>
                                                    </div>
                                                </div>
                                                <div className="row mt-2 mb-5">
                                                    <div className="col-12 text-right pr-3">
                                                        <Link to="/admin/setting/"><button className="btn btn-danger ripple px-3 mr-2 py-2">CANCEL</button></Link>
                                                        <button className="btn btn-success ripple px-5 py-2">UPDATE PROFILE</button>
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

export default updateProfile
