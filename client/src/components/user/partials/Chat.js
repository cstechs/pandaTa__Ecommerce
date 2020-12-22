import React, { useState, useEffect } from "react";
import { createChat, getChat } from "../../../redux/_actions/chatAction";
import { useSelector, useDispatch } from "react-redux";
import UserImage from "../../../assets/images/admin/users/user-6.jpg";

const Chat = ({ ChatHide, product }) => {
  const ChatHandler = () => {
    ChatHide();
  };
  const chat = useSelector((state) => state.chat);
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [checkSender, setCheckSender] = useState(null);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    // // if (newText === '', sender === '', createdBy === '', sellerId === '' ) {
    // //     dispatch(setAlert('Please Enter fields.', 'danger'));
    // // }
    // else {
    e.preventDefault();

    dispatch(createChat(newMessage));
    setNewMessage({ ...newMessage, message: "" });
  };
  useEffect(() => {
    dispatch(getChat());

    // $("#mydiv").scrollTop($("#mydiv").height);
  }, []);

  useEffect(() => {
    var objDiv = document.getElementById("mydiv");
    if (objDiv) {
      objDiv.scrollIntoView();
    }
  }, [chat]);

  //   useEffect(() => {
  //     setSendChat(() =>
  //       chat?.chats?.data?.map((item) => {
  //         return {
  //           Message: item.message,
  //           Sender: item.sender,
  //           createdBy: item.createdBy,
  //           sellerId: item.sellerId,
  //         };
  //       })
  //     );
  //   }, [chat]);
  //   console.log("checking", sendChat);

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
        <span>Supplier’s Name</span>
        <i className="ti-close" onClick={() => ChatHandler()}></i>
      </div>
      <div className="body">
        <div className="messageBox">
          <ul className="conversation-list mt-2">
            {chat.chats?.data?.map((item, index) => (
              <>
                {/* {console.log("chatlength", item)} */}
                {item.sender == 1 && item.createdBy === user._id && (
                  <li
                    className="clearfix odd"
                    id={`${index == chat.chats?.data?.length - 1 && "mydiv"}`}
                  >
                    <div className="conversation-text">
                      <div className="ctext-wrap">
                        <p>{item.message}</p>
                      </div>
                    </div>
                  </li>
                )}
                {item.sender == 0 && item.createdBy === user._id && (
                  <li
                    className="clearfix"
                    id={`${index == chat.chats?.data?.length - 1 && "mydiv"}`}
                  >
                    <div className="conversation-text">
                      <div className="ctext-wrap">
                        <p>{item.message}</p>
                      </div>
                    </div>
                  </li>
                )}
              </>
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
