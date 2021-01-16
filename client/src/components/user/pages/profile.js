import React, { useState } from "react";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import { Link, useHistory } from "react-router-dom";
const Profile = () => {
  const history = useHistory();
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  if (!user || user.role != "customer") {
    history.push("/");
  }
  return (
    <>
      <div className="component">
        <Header />
        <NavBar />
      </div>
      <ol className="breadcrumb m-0">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Profile</li>
      </ol>
      <div className="profile">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <label>Username</label>
              <input type="text" value={user.userName} disabled />
            </div>
            <div className="col-12">
              <label>First Name</label>
              <input type="text" value={user.firstName} disabled />
            </div>
            <div className="col-12">
              <label>Last Name</label>
              <input type="text" value={user.lastName} disabled />
            </div>
            <div className="col-12">
              <label>Email Address</label>
              <input type="text" value={user.email} disabled />
            </div>
          </div>
        </div>
      </div>
      <div className="component">
        <Footer />
      </div>
    </>
  );
};
export default Profile;
