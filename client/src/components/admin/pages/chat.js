import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../partials/header";
import Footer from "../partials/footer";

import UserImage from "../../../assets/images/admin/users/user-6.jpg";
import { getChat, createChat } from "../../../redux/_actions/chatAction";
import { getUser } from "../../../redux/_actions/userAction";
import Warning from "../partials/warning";

const Chat = () => {
  const chat = useSelector((state) => state.chat.chats);
  const users = useSelector((state) => state.user.users);
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [checkSender, setCheckSender] = useState(null);
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState({});
  const [select, setSelect] = useState(false);

  const [messagedUser, setmessagedUser] = useState([]);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    setmessagedUser(() =>
      users.filter((z) =>
        chat?.data?.find(
          (x) => x.createdBy === z._id && x.sellerId === user._id
        )
      )
    );
  }, [users]);

  useEffect(() => {
    dispatch(getChat());
  }, [dispatch]);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createChat(newMessage));
    setNewMessage({ ...newMessage, message: "" });
  };
  useEffect(() => {
    var objDiv = document.getElementById("mydiv");
    if (objDiv) {
      objDiv.scrollIntoView();
    }
  }, [chat]);

  const CheckUser = (user) => {
    setSelectedUser(user);
    setSelect(true);
  };

  const handleSelect = () => {
    setSelect(false);
  };

  const handleChange = (e) => {
    let temp = messagedUser.filter((item) =>
      item.userName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (e.target.value === "") {
      temp = users.filter((z) =>
        chat?.data?.find(
          (x) => x.createdBy === z._id && x.sellerId === user._id
        )
      );
    }

    setmessagedUser(temp);
  };

  const [newMessage, setNewMessage] = useState({
    message: "",
    sender: "",
    createdBy: selectedUser._id,
    sellerId: user._id,
  });
  const { message } = newMessage;

  const onChange = (e) => {
    if (user.role === "seller" || user.role === "admin") {
      setCheckSender(1);
      newMessage.sender = checkSender;
      newMessage.createdBy = selectedUser?._id;
      setNewMessage({
        ...newMessage,
        [e.target.name]: e.target.value,
      });
    } else if (user.role === "customer") {
      setCheckSender(0);
      newMessage.sender = checkSender;
      newMessage.createdBy = selectedUser?._id;

      setNewMessage({
        ...newMessage,
        [e.target.name]: e.target.value,
      });
    }
  };

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
                        <li className="breadcrumb-item">
                          <Link to="/admin">PANDA / TA</Link>
                        </li>
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
                          <input
                            type="text"
                            placeholder="Search Customer"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </form>
                      <div className="row">
                        <div className="col">
                          <div data-simplebar style={{ minHeight: "300px" }}>
                            {messagedUser?.map((item) =>
                              messagedUser.length >= 1 ? (
                                <React.Fragment key={item._id}>
                                  {
                                    item._id != user._id && (
                                      <div
                                        className="text-body mt-3 cursor-pointer"
                                        onClick={() => CheckUser(item)}
                                      >
                                        <div className="media p-1">
                                          <div className="mr-2 rounded-circle px-2 py-1 bg-secondary text-white">
                                            <i className="mdi mdi-forum font-17" />
                                          </div>
                                          <div className="media-body">
                                            <h5 className="mt-2 mb-0 font-16">
                                              {item.userName}
                                            </h5>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                    //  : (
                                    //   <p className="empty mt-5 ">NO CHAT FOUND</p>
                                    // )
                                  }
                                </React.Fragment>
                              ) : (
                                <p className="empty mt-5 ">NO CHAT FOUND</p>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card">
                    {select ? (
                      <>
                        <div className="card-body py-2 px-3 border-bottom border-light">
                          <div className="media py-1">
                            <div className="mr-2 rounded-circle px-2 py-1 bg-secondary text-white">
                              <i className="mdi mdi-forum font-17" />
                            </div>
                            <div className="media-body">
                              <h5 className="mt-2 mb-0 font-15">
                                <span className="text-reset">
                                  {selectedUser.userName}
                                </span>
                              </h5>
                            </div>
                            <div>
                              <span className="text-reset font-17 py-1 px-2 d-inline-block">
                                <i
                                  className="fas fa-times cursor-pointer"
                                  onClick={() => handleSelect()}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <ul
                            className="conversation-list"
                            data-simplebar
                            style={{ maxHeight: "390px" }}
                          >
                            {chat?.data?.map((item, index) => (
                              <React.Fragment key={item._id}>
                                {item.sellerId === user._id && (
                                  <>
                                    {item.sender == 0 &&
                                      item.createdBy === selectedUser._id && (
                                        <li
                                          className="clearfix"
                                          id={`${
                                            index == chat?.data?.length - 1 &&
                                            "mydiv"
                                          }`}
                                        >
                                          <div className="conversation-text">
                                            <div className="ctext-wrap">
                                              <p>{item.message}</p>
                                            </div>
                                          </div>
                                        </li>
                                      )}
                                    {select &&
                                      item.sender == 1 &&
                                      user._id === item.sellerId &&
                                      item.createdBy === selectedUser._id && (
                                        <li
                                          className="clearfix odd"
                                          id={`${
                                            index == chat?.data?.length - 1 &&
                                            "mydiv"
                                          }`}
                                        >
                                          <div className="conversation-text">
                                            <div className="ctext-wrap">
                                              <p>{item.message}</p>
                                            </div>
                                          </div>
                                        </li>
                                      )}
                                  </>
                                )}
                              </React.Fragment>
                            ))}
                          </ul>
                          <div className="row">
                            <div className="col">
                              <div className="mt-2 p-2">
                                <form onSubmit={(e) => onSubmit(e)}>
                                  <div className="row">
                                    <div className="col mb-2 mb-sm-0">
                                      <input
                                        type="text"
                                        className="form-control border-0"
                                        placeholder="Enter your text"
                                        required
                                        name="message"
                                        value={message}
                                        onChange={onChange}
                                      />
                                    </div>
                                    <div className="col-sm-auto">
                                      <div className="btn-group">
                                        <button
                                          type="submit"
                                          className="btn text-yellow chat-send btn-block font-17"
                                        >
                                          <i className="fe-send" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <p className="empty mt-5 pt-5 mb-5 pb-5">
                        OPEN CUSTOMER CHAT TO START CONVERSATION
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <Warning />
    </div>
  );
};

export default Chat;
