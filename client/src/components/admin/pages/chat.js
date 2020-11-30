import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../partials/topnavbar'
import Footer from '../partials/footer'

import UserImage from '../../../assets/images/admin/users/user-6.jpg'

const Chat = () => {

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
                                                <li className="breadcrumb-item active">Chat</li>
                                            </ol>
                                        </div>
                                        <h4 className="page-title">Chat</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className=" col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <form className="chat_search_box ">
                                                <div className="position-relative">
                                                    <i className="mdi mdi-magnify" />
                                                    <input type="text" placeholder="People, groups & messages..." />
                                                </div>
                                            </form>
                                            <div className="row">
                                                <div className="col">
                                                    <div data-simplebar style={{ maxHeight: '600px' }}>
                                                        <div className="text-body mt-3">
                                                            <div className="media p-1">
                                                                <img src={UserImage} className="mr-2 rounded-circle" height={42} alt="Brandon Smith" />
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 font-14">
                                                                        <span className="float-right text-muted font-weight-normal font-11">4:30am</span>Brandon Smith</h5>
                                                                    <p className="mt-1 mb-0 text-muted font-13">
                                                                        <span className="w-25 float-right text-right"><span className="badge badge-soft-danger">3</span></span>
                                                                        <span className="w-75">How are you today?</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-body mt-3">
                                                            <div className="media p-1">
                                                                <img src={UserImage} className="mr-2 rounded-circle" height={42} alt="James Z" />
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 font-14">
                                                                        <span className="float-right text-muted font-weight-normal font-11">5:30am</span>James Z</h5>
                                                                    <p className="mt-1 mb-0 text-muted font-13">
                                                                        <span className="w-75">Hey! a reminder for tomorrow's meeting...</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-body mt-3">
                                                            <div className="media p-1">
                                                                <img src={UserImage} className="mr-2 rounded-circle" height={42} alt="Brandon Smith" />
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 font-14">
                                                                        <span className="float-right text-muted font-weight-normal font-11">4:30am</span>Brandon Smith</h5>
                                                                    <p className="mt-1 mb-0 text-muted font-13">
                                                                        <span className="w-25 float-right text-right"><span className="badge badge-soft-danger">8</span></span>
                                                                        <span className="w-75">How are you today?</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-body mt-3">
                                                            <div className="media p-1">
                                                                <img src={UserImage} className="mr-2 rounded-circle" height={42} alt="Brandon Smith" />
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 font-14">
                                                                        <span className="float-right text-muted font-weight-normal font-11">4:30am</span>Brandon Smith</h5>
                                                                    <p className="mt-1 mb-0 text-muted font-13">
                                                                        <span className="w-25 float-right text-right"><span className="badge badge-soft-danger">2</span></span>
                                                                        <span className="w-75">How are you today?</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-body mt-3">
                                                            <div className="media p-1">
                                                                <img src={UserImage} className="mr-2 rounded-circle" height={42} alt="James Z" />
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 font-14">
                                                                        <span className="float-right text-muted font-weight-normal font-11">5:30am</span>James Z</h5>
                                                                    <p className="mt-1 mb-0 text-muted font-13">
                                                                        <span className="w-75">Hey! a reminder for tomorrow's meeting...</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-body mt-3">
                                                            <div className="media p-1">
                                                                <img src={UserImage} className="mr-2 rounded-circle" height={42} alt="James Z" />
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 font-14">
                                                                        <span className="float-right text-muted font-weight-normal font-11">5:30am</span>James Z</h5>
                                                                    <p className="mt-1 mb-0 text-muted font-13">
                                                                        <span className="w-75">Hey! a reminder for tomorrow's meeting...</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-body py-2 px-3 border-bottom border-light">
                                            <div className="media py-1">
                                                <img src={UserImage} className="mr-2 rounded-circle" height={36} alt="Brandon Smith" />
                                                <div className="media-body">
                                                    <h5 className="mt-0 mb-0 font-15">
                                                        <span className="text-reset">James Zavel</span>
                                                    </h5>
                                                    <p className="mt-1 mb-0 text-muted font-12">
                                                        <small className="mdi mdi-circle text-success" /> Online
                                                    </p>
                                                </div>
                                                <div>
                                                    <span className="text-reset font-17 py-1 px-2 d-inline-block">
                                                        <i className="fas fa-times" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <ul className="conversation-list" data-simplebar style={{ maxHeight: '390px' }}>
                                                <li className="clearfix">
                                                    <div className="conversation-text">
                                                        <div className="ctext-wrap">
                                                            <p>Hello!</p>
                                                        </div>
                                                        <span>10:01</span>
                                                    </div>
                                                </li>
                                                <li className="clearfix odd">
                                                    <div className="conversation-text">
                                                        <div className="ctext-wrap">
                                                            <p>Hi, How are you? What about our next meeting </p>
                                                        </div>
                                                        <span>10:04</span>
                                                    </div>
                                                </li>
                                                <li className="clearfix odd">
                                                    <div className="conversation-text">
                                                        <div className="ctext-wrap">
                                                            <p>Hi, How are you? What about our next meeting </p>
                                                        </div>
                                                        <span>10:04</span>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
                                                    <div className="conversation-text">
                                                        <div className="ctext-wrap">
                                                            <p>Hello!</p>
                                                        </div>
                                                        <span>10:01</span>
                                                    </div>
                                                </li>
                                                <li className="clearfix odd">
                                                    <div className="conversation-text">
                                                        <div className="ctext-wrap">
                                                            <p>Hi, How are you? What about our next meeting </p>
                                                        </div>
                                                        <span>10:04</span>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
                                                    <div className="conversation-text">
                                                        <div className="ctext-wrap">
                                                            <p>Hello!</p>
                                                        </div>
                                                        <span>10:01</span>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
                                                    <div className="conversation-text">
                                                        <div className="ctext-wrap">
                                                            <p>Hello!</p>
                                                        </div>
                                                        <span>10:01</span>
                                                    </div>
                                                </li>
                                                <li className="clearfix odd">
                                                    <div className="conversation-text">
                                                        <div className="ctext-wrap">
                                                            <p>Hi, How are you? What about our next meeting </p>
                                                        </div>
                                                        <span>10:04</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="mt-2 p-2">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col mb-2 mb-sm-0">
                                                                    <input type="text" className="form-control border-0" placeholder="Enter your text" required />
                                                                    <div className="invalid-feedback">
                                                                        Please enter your messsage
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-auto">
                                                                    <div className="btn-group">
                                                                        <span className="btn font-17"><i className="fe-paperclip" /></span>
                                                                        <button type="submit" className="btn text-yellow chat-send btn-block font-17"><i className="fe-send" /></button>
                                                                    </div>
                                                                </div>
                                                            </div> 
                                                        </form>
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

export default Chat
