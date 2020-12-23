import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetpassword } from "../../../redux/_actions/authAction";
import { setAlert } from "../../../redux/_actions/alertAction";
import { useHistory } from "react-router-dom";

const ResetPassword = (props) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("pass", password, "conf", confirmpassword);
    if (password === "" || confirmpassword === "") {
      dispatch(setAlert("Please enter all the fields.", "danger"));
    } else if (password !== confirmpassword) {
      dispatch(setAlert("Password Doesnot Match.", "danger"));
    } else {
      dispatch(
        resetpassword(password, confirmpassword, props.match.params.token)
      );
      setTimeout(() => {
        history.push("/");
      }, 2500);
    }
  };
  return (
    <div className="ResetPassword">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <form onSubmit={onSubmit}>
              <div className="logo">PANDA / TA</div>
              <p>Enter your new password</p>
              <input
                type="password"
                name="password"
                required
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
              />
              <input
                type="password"
                name="confirmpassword"
                value={confirmpassword}
                required
                onChange={(e) => setconfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
              <input
                type="submit"
                className="ripple button-base"
                value="Reset Password"
              />
            </form>
          </div>
        </div>
      </div>
      <b className="terms">Term of use. Privacy policy</b>
    </div>
  );
};

export default ResetPassword;
