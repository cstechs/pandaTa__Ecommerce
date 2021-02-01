import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgot } from "../../../redux/_actions/authAction";
import { setAlert } from "../../../redux/_actions/alertAction";
import { Link, useHistory } from "react-router-dom";

const ForgetPasssword = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      dispatch(setAlert("Please enter email address.", "danger"));
    } else {
      dispatch(forgot(email));
      setTimeout(() => {
        history.push("/");
      }, 5000);
    }
  };
  return (
    <div className="ForgetPassword">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <form onSubmit={onSubmit}>
              <div className="logo">PANDA / TA</div>
              <p>Enter your email and we send you a password reset link.</p>
              <input
                type="email"
                name="email"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="UserEmail"
              />
              <input
                type="submit"
                className="ripple button-base mb-0"
                value="Send request"
              />
              <Link
                to="/"
                className="d-block text-center font-13 font-weight-bold mt-2 text-darkpurple"
              >
                GO BACK
              </Link>
            </form>
          </div>
        </div>
      </div>
      <b className="terms">Term of use. Privacy policy</b>
    </div>
  );
};

export default ForgetPasssword;
