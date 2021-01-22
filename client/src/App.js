import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import "./assets/css/dashboard-bootstrap.min.css";
import "./assets/css/dashboard.min.css";
import "./assets/css/icons.css";
import "./assets/css/home.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import setAuthToken from "./utils/setAuthToken";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserPanel from "./components/user/pages/home";
import UserCart from "./components/user/pages/cart";
import UserCheckout from "./components/user/pages/checkout";
import UserProduct from "./components/user/pages/product";
import UserSingleProduct from "./components/user/pages/singleProduct";
import UserWishlist from "./components/user/pages/wishlist";
import UserSellerApplication from "./components/user/pages/sellerApplication";
import UserSeller from "./components/user/pages/seller";
import UserProfile from "./components/user/pages/profile";
import UserOrder from "./components/user/pages/order";
import PrivateRoute from "./components/admin/routing/PrivateRoute";
import AdminPanel from "./components/admin/pages/home";
import AdminPanelProducts from "./components/admin/pages/products";
import AdminPanelUpdateProducts from "./components/admin/partials/updateProductBar";
import AdminPanelCategory from "./components/admin/pages/categories";
import AdminPanelOrder from "./components/admin/pages/orders";
import AdminPanelCustomer from "./components/admin/pages/customers";
import AdminPanelChat from "./components/admin/pages/chat";
import AdminPanelSetting from "./components/admin/pages/profile";
import AdminPanelEditSetting from "./components/admin/pages/updateProfile";
import AdminLogin from "./components/admin/auth/login";
import AdminForgetPassword from "./components/admin/auth/forgetpassword";
import ResetPassword from "./components/admin/auth/resetpassword";
import ErrorPage from "./components/user/pages/404";
import VerifyView from "./components/user/auth/verifyPage";
import Alerts from "./components/admin/partials/alerts";

import { getProduct } from "./redux/_actions/productAction";
import Loader from "./components/user/partials/loader";
import { getSellers } from "./redux/_actions/sellerAction";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const product = useSelector((state) => state.product);
  const Sellers = useSelector((state) => state.seller.sellers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
    dispatch(getSellers());
  }, [dispatch]);
  if (product === undefined) {
    return <Loader />;
  }

  return (
    <>
      <Router>
        <Alerts />
        <Switch>
          {/* USER PANEL ROUTES */}

          <Route exact path="/" component={UserPanel} />
          <Route exact path="/cart" component={UserCart} />

          <Route exact path="/checkout/:cartid" component={UserCheckout} />
          <Route exact path="/product" component={UserProduct} />
          <Route exact path="/wishlist" component={UserWishlist} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/orders" component={UserOrder} />
          <Route
            exact
            path="/sellerapplication"
            component={UserSellerApplication}
          />
          {/* <Route exact path="/seller" component={UserSeller} /> */}
          <Route exact path="/verify/:token" component={VerifyView} />
          <Route exact path="/reset/:token" component={ResetPassword} />

          {Sellers ? (
            Sellers?.map(({ _id }) => (
              <Route
                exact
                key={_id}
                path={`/seller/:id`}
                component={UserSeller}
              />
            ))
          ) : (
            <Loader />
          )}

          {product?.products?.data ? (
            product?.products?.data?.map(({ _id }) => (
              <Route
                exact
                key={_id}
                path={`/product/${_id}`}
                component={UserSingleProduct}
              />
            ))
          ) : (
            <Loader />
          )}
          {/* ADMIN PANEL ROUTES */}
          <PrivateRoute exact path="/admin" component={AdminPanel} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route
            exact
            path="/admin/forgetpassword"
            component={AdminForgetPassword}
          />
          <Route path="/admin/resetpassword" component={ResetPassword} />
          <Route exact path="/admin/setting" component={AdminPanelSetting} />
          <PrivateRoute
            exact
            path="/admin/setting/edit"
            component={AdminPanelEditSetting}
          />
          <PrivateRoute
            exact
            path="/admin/product/"
            component={AdminPanelProducts}
          />
          <PrivateRoute
            exact
            path="/admin/updateproduct/"
            component={AdminPanelUpdateProducts}
          />
          <PrivateRoute
            exact
            path="/admin/category/"
            component={AdminPanelCategory}
          />
          <PrivateRoute
            exact
            path="/admin/order/"
            component={AdminPanelOrder}
          />
          <PrivateRoute
            exact
            path="/admin/customers/"
            component={AdminPanelCustomer}
          />
          <PrivateRoute exact path="/admin/chat/" component={AdminPanelChat} />
          {/* 404 PAGE ROUTES */}
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
