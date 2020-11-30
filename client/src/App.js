import React from 'react';
import './style.css';
import './assets/css/dashboard-bootstrap.min.css';
import './assets/css/dashboard.min.css';
import './assets/css/icons.css';
import './assets/css/home.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import setAuthToken from './utils/setAuthToken';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserPanel from './components/user/pages/home'
import UserCart from './components/user/pages/cart'
import UserCheckout from './components/user/pages/checkout.js'
import UserProducts from './components/user/pages/product.js'
import UserWishlist from './components/user/pages/wishlist'
import UserSellerApplication from './components/user/pages/sellerApplication'
import UserSeller from './components/user/pages/seller.js'
import PrivateRoute from './components/admin/routing/PrivateRoute'
import AdminPanel from './components/admin/pages/home'
import AdminPanelProducts from './components/admin/pages/products'
import AdminPanelCategory from './components/admin/pages/categories'
import AdminPanelInvoice from './components/admin/pages/invoice'
import AdminPanelCustomer from './components/admin/pages/customers'
import AdminPanelChat from './components/admin/pages/chat'
import AdminPanelEmailInbox from './components/admin/pages/emailinbox'
import AdminPanelEmailCompose from './components/admin/pages/emailcompose'
import AdminPanelEmailRead from './components/admin/pages/emailread'
import AdminPanelSetting from './components/admin/pages/profile'
import AdminPanelEditSetting from './components/admin/pages/updateProfile'
import AdminLogin from './components/admin/auth/login'
import AdminForgetPassword from './components/admin/auth/forgetpassword'
import AdminRegister from './components/admin/auth/register'
import AdminResetPassword from './components/admin/auth/resetpassword'
import Alerts from './components/admin/partials/alerts'


if(localStorage.token){
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <>  
   <Router>
     <Alerts />
      <Switch>
        {/* USER PANEL ROUTES */}
        <Route exact path='/' component={UserPanel}/>
        <Route exact path='/cart' component={UserCart}/>
        <Route exact path='/checkout' component={UserCheckout}/>
        <Route exact path='/product' component={UserProducts}/>
        <Route exact path='/wishlist' component={UserWishlist}/>
        <Route exact path='/sellerapplication' component={UserSellerApplication}/>
        <Route exact path='/seller' component={UserSeller}/>
        
        {/* ADMIN PANEL ROUTES */}
        <PrivateRoute exact path='/admin' component={AdminPanel}/>
        {/* <Route exact path='/admin/panel' component={AdminPanel}/> */}
        <Route exact path='/admin/login' component={AdminLogin}/>
        <Route exact path='/admin/forgetpassword' component={AdminForgetPassword}/>
        <Route path='/admin/resetpassword' component={AdminResetPassword}/>
        <Route exact path='/admin/register' component={AdminRegister}/>
        <Route exact path='/admin/setting' component={AdminPanelSetting}/>
        <Route exact path='/admin/setting/edit' component={AdminPanelEditSetting}/>
        <Route exact path='/admin/email/inbox' component={AdminPanelEmailInbox}/>
        <Route exact path='/admin/email/compose' component={AdminPanelEmailCompose}/>
        <Route exact path='/admin/email/read' component={AdminPanelEmailRead}/>
        <Route exact path='/admin/products/' component={AdminPanelProducts}/>   
        <Route exact path='/admin/category/' component={AdminPanelCategory}/>       
        <Route exact path='/admin/invoice/' component={AdminPanelInvoice}/>        
        <Route exact path='/admin/customers/' component={AdminPanelCustomer}/>
        <Route exact path='/admin/chat/' component={AdminPanelChat}/>
      </Switch>
   </Router>
   </>
  );
}

export default App;
