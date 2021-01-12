import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../partials/header";
import Footer from "../partials/footer";
import OrderDetail from "../partials/orderDetails";
import productProgessImg1 from "../../../assets/images/admin/current-products-progress-img-1.png";
import productProgessImg2 from "../../../assets/images/admin/current-products-progress-img-2.png";
import productProgessImg3 from "../../../assets/images/admin/current-products-progress-img-3.png";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../../redux/_actions/orderAction";
import { getCart } from "../../../redux/_actions/cartAction";
import { getUser } from "../../../redux/_actions/userAction";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const cart = useSelector((state) => state.cart.cartItems?.data);
  const user = JSON.parse(localStorage.getItem("user"));
  const users = useSelector((state) => state.user.users);
  const [orderDetailShown, setorderDetailShown] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  const orderPreviewToggle = (item) => {
    setorderDetailShown(!orderDetailShown);
    setSelectedOrder(item);
  };
  const sellerProducts = cart?.filter((cart) =>
    cart.items?.find((item) => item.sellerId === user._id)
  );

  const sellerOrders = orders?.filter((order) =>
    sellerProducts?.find((sellerproduct) => sellerproduct._id === order.cartId)
  );

  useEffect(() => {
    dispatch(getOrder());
    dispatch(getCart());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="Dashobard">
      <div id="wrapper">
        <Navbar />
        <div className="content-page" id="content">
          <div className="content" style={{ minHeight: "80vh" }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box">
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link to="/admin">PANDA / TA</Link>
                        </li>
                        <li className="breadcrumb-item active">Orders</li>
                      </ol>
                    </div>
                    <h4 className="page-title">My Orders</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card-box current-products-progress">
                    <div>
                      <img src={productProgessImg1} draggable="false" />
                    </div>
                    <div>
                      <h2 className="text-left text-lightblue">$50,000</h2>
                      <p className="text-secondary ">Total Revenue</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-box current-products-progress">
                    <div>
                      <img src={productProgessImg2} draggable="false" />
                    </div>
                    <div>
                      <h2 className="text-left text-purple">20</h2>
                      <p className="text-secondary ">Total Orders</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-box current-products-progress">
                    <div>
                      <img src={productProgessImg3} draggable="false" />
                    </div>
                    <div>
                      <h2 className="text-left text-success">+2.0%</h2>
                      <p className="text-secondary">Growth</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div>
                        <h4 className="header-title">Orders </h4>
                        <div className="table-responsive mt-2">
                          <table className="table  table-hover mb-0">
                            <thead className="thead-light">
                              <tr>
                                <th>#</th>
                                <th>ORDER DATE</th>
                                <th>Total Products</th>
                                <th>CUSTOMER</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              {sellerProducts?.map((products, index) => (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>{products.createdAt.slice(0, 10)}</td>
                                  <td className="pl-5">
                                    {products.items.length}
                                  </td>
                                  <td>
                                    {
                                      users.find(
                                        (user) =>
                                          user._id === products.createdBy
                                      )?.userName
                                    }
                                  </td>
                                  <td
                                    className="font-11 text-success cursor-pointer"
                                    onClick={() => orderPreviewToggle(products)}
                                  >
                                    MoreDetail
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      {orderDetailShown && (
        <div className="Order_Detail_Portion">
          <OrderDetail
            orderPreviewToggle={orderPreviewToggle}
            selectedOrder={selectedOrder}
            orders={sellerOrders}
          />
        </div>
      )}
    </div>
  );
};

export default Orders;
