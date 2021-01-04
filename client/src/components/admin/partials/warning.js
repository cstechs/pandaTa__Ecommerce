import React from "react";

const Warning = () => {
  return (
    <div className="logoutBox" id="logoutBox">
      <div className="content">
        <div className="iconBg">
          <i className="fa fa-question"></i>
        </div>
        <h2>Are You Sure You Want To Delete Chat?</h2>
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
};

export default Warning;
