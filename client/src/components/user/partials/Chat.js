import React, { useState, useEffect } from "react";
import { createChat, getChat } from "../../../redux/_actions/chatAction";
import { useSelector, useDispatch } from "react-redux";
import UserImage from "../../../assets/images/admin/users/user-6.jpg";

const Chat = ({ ChatHide, product, seller }) => {
  const ChatHandler = () => {
    ChatHide();
  };
  const chat = useSelector((state) => state.chat);
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [checkSender, setCheckSender] = useState(null);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createChat(newMessage));
    setNewMessage({ ...newMessage, message: "" });
  };
  useEffect(() => {
    dispatch(getChat());
  }, [getChat]);

  useEffect(() => {
    var objDiv = document.getElementById("mydiv");
    if (objDiv) {
      objDiv.scrollIntoView();
    }
  }, [chat]);

  const [newMessage, setNewMessage] = useState({
    message: "",
    sender: "",
    createdBy: "",
    sellerId: product?.product?.data?.createdBy,
  });
  const { message } = newMessage;
  const onChange = (e) => {
    if (user.role === "seller" || user.role === "admin") {
      setCheckSender(1);
      newMessage.sender = checkSender;
      newMessage.createdBy = user._id;
      setNewMessage({
        ...newMessage,
        [e.target.name]: e.target.value,
      });
    } else if (user.role === "customer") {
      setCheckSender(0);
      newMessage.sender = checkSender;
      newMessage.createdBy = user._id;

      setNewMessage({
        ...newMessage,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <>
      <div className="head">
        <img
          src={UserImage}
          className="mr-2 rounded-circle"
          height={38}
          alt="Brandon Smith"
        />
        <span>{seller.userName}</span>
        <i className="ti-close" onClick={() => ChatHandler()}></i>
      </div>
      <div className="body">
        <div className="messageBox">
          <ul className="conversation-list mt-2">
            {chat.chats?.data?.map((item, index) => (
              <React.Fragment key={item._id}>
                {product?.product?.data?.createdBy === item.sellerId && (
                  <React.Fragment key={index}>
                    {item.sender == 1 &&
                      item.sellerId == product?.product?.data?.createdBy &&
                      item.createdBy == user._id && (
                        <li
                          className="clearfix"
                          id={`${
                            index == chat.chats?.data?.length - 1 && "mydiv"
                          }`}
                        >
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <p>{item.message}</p>
                            </div>
                          </div>
                        </li>
                      )}
                    {item.sender == 0 && item.createdBy == user._id && (
                      <li
                        className="clearfix odd"
                        id={`${
                          index == chat.chats?.data?.length - 1 && "mydiv"
                        }`}
                      >
                        <div className="conversation-text">
                          <div className="ctext-wrap">
                            <p>{item.message}</p>
                          </div>
                        </div>
                      </li>
                    )}
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            required
            placeholder="Type Your Message Here..."
            name="message"
            value={message}
            onChange={onChange}
          />
          <button>
            <i className="fe-send" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chat;
