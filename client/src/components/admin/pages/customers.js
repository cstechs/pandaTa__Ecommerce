import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../partials/header";
import Footer from "../partials/footer";

import UserImage from "../../../assets/images/admin/user.jpg";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../../../redux/_actions/userAction";

const Customers = () => {
  const users = useSelector((state) => state.user.users);
  const [searchedUsers, setsearchedUsers] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    setsearchedUsers(users);
  }, [users]);

  const handleChange = (e) => {
    let temp = searchedUsers.filter((item) =>
      item.userName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (e.target.value === "") {
      temp = users;
    }
    setsearchedUsers(temp);
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
                        <li className="breadcrumb-item active">Customer</li>
                      </ol>
                    </div>
                    <h4 className="page-title">Customers</h4>
                  </div>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-12">
                  <div className="card">
                    <form className="CustomerSearchBox">
                      <input
                        type="text"
                        placeholder="Search Here..."
                        onChange={(e) => handleChange(e)}
                      />
                      <button type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row mt-1">
                {/* CARD */}
                {searchedUsers?.map((item) => (
                  <React.Fragment key={item._id}>
                    {item.role === "customer" && (
                      <div className="col-lg-4">
                        <div className="text-center customer-card">
                          <div className="float-left">
                            <i className="fas fa-pencil-alt"></i>
                          </div>
                          <div className="float-right">
                            <i
                              className="fas fa-times"
                              onClick={() => {
                                dispatch(deleteUser(item._id, item._id));
                                setTimeout(() => {
                                  window.location.reload();
                                }, 1000);
                                // window.location.reload();
                              }}
                            ></i>
                          </div>
                          <div className="pt-1 pb-1">
                            <img
                              src={UserImage}
                              className="rounded-circle img-thumbnail avatar-lg"
                              alt={item.userName}
                            />
                            <h4 className="mt-2 mb-1 font-16 text-dark">
                              {item.userName}
                            </h4>
                            <p className="text-muted">
                              {item.firstName} <span> | </span>
                              {item.lastName}
                            </p>
                            <p className="text-center text-muted">
                              {item.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Customers;
