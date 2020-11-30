import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { forgot } from '../../../redux/_actions/authAction';
import { setAlert } from '../../../redux/_actions/alertAction'

const ForgetPasssword = () => { 
    
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (email === '') {
      dispatch(setAlert('Please enter email address.', 'danger'));
    } else {
      dispatch(forgot(email));
    }
  }
  return (
    <div className="ForgetPassword">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
              <form onSubmit={onSubmit}>
                <div className="logo">
                    PANDA / TA
                </div>
                <p>Enter your email and we send you a password reset link.</p>
                <input type="email" name="email" required autoFocus value={email} onChange={e => setEmail(e.target.value)} placeholder="UserEmail" />
                <input type="submit" className="ripple button-base" value="Send request"/>
            </form>
            </div>
        </div>
    </div>
    <b className="terms">Term of use. Privacy policy</b>
    </div>
  )
}

export default ForgetPasssword
