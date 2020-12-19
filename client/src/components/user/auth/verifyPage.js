import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import { verifyaccount } from "../../../redux/_actions/authAction";
import { setAlert } from "../../../redux/_actions/alertAction";
import { CLEAR_ERRORS } from "../../../redux/types";
import Login from "./login";

const VerifyPage = (props) => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  var statusMessage = "";
  useEffect(() => {
    dispatch(verifyaccount(props.match.params.token));
    if (state.error === "This user has already been verified.") {
      //dispatch(setAlert(state.error, "danger"));
      statusMessage = state.error;
      dispatch({ type: CLEAR_ERRORS });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="component">
        <Header />
        <NavBar />
      </div>
      <div className="Verify">
        <h4>
          {statusMessage
            ? statusMessage
            : "Your Account Has Been Successfully Verified"}
        </h4>
        <button
          className="ripple button-base"
          data-toggle="modal"
          data-target="#exampleModalCenter1"
        >
          Login Now
        </button>
      </div>
      <div className="component">
        <Footer />
      </div>
      <div
        className="modal fade"
        id="exampleModalCenter1"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <Login />
      </div>
    </>
  );
};

export default VerifyPage;
