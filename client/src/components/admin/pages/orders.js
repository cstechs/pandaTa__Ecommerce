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
import dateFormat from "dateformat";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const products = useSelector((state) => state.product.products.data);
  const user = JSON.parse(localStorage.getItem("user"));
  const users = useSelector((state) => state.user.users);
  const [orderDetailShown, setorderDetailShown] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  const totalOrders = orders.length;
  const orderPreviewToggle = (item) => {
    setorderDetailShown(!orderDetailShown);
    setSelectedOrder(item);
  };
  const SellerproductsLength = products.filter(
    (product) => product.createdBy === user._id
  )?.length;
  const TotalproductsLength = products.length;

  const customers = useSelector((state) => state.user.users);
  const customerLength = customers.filter(
    (customer) => customer.role === "customer"
  )?.length;
  const sellerOrder = orders.filter((order) =>
    order.cartSeller.find((seller) => seller === user._id)
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
                      <img
                        src={productProgessImg1}
                        draggable="false"
                        alt="product-progress-image"
                      />
                    </div>
                    <div>
                      <h2 className="text-left text-lightblue">
                        {customerLength}
                      </h2>
                      <p className="text-secondary ">Total Customers</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-box current-products-progress">
                    <div>
                      <img
                        src={productProgessImg2}
                        draggable="false"
                        alt="product-progress-image"
                      />
                    </div>
                    <div>
                      <h2 className="text-left text-purple">{totalOrders}</h2>
                      <p className="text-secondary ">Total Orders</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-box current-products-progress">
                    <div>
                      <img
                        src={productProgessImg3}
                        draggable="false"
                        alt="product-progress-image"
                      />
                    </div>
                    <div>
                      <h2 className="text-left text-success">
                        {user && user.role === "seller" ? (
                          <span>{SellerproductsLength}</span>
                        ) : (
                          <span>{TotalproductsLength}</span>
                        )}
                      </h2>
                      <p className="text-secondary">Total Products</p>
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
                                <th>TOTAL PRODUCTS</th>
                                <th>CUSTOMER</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              {user.role === "seller" ? (
                                sellerOrder?.length >= 1 ? (
                                  sellerOrder?.map((orders, index) => (
                                    <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>
                                        {dateFormat(
                                          orders.createdAt,
                                          "dS mmmm , yyyy"
                                        )}
                                      </td>
                                      <td className="pl-5">
                                        {
                                          orders.cartItems[0].items.filter(
                                            (seller) =>
                                              seller.sellerId === user._id
                                          )?.length
                                        }
                                      </td>
                                      <td>
                                        {
                                          users.find(
                                            (user) =>
                                              user._id === orders.createdBy
                                          )?.userName
                                        }
                                      </td>
                                      <td
                                        className="font-11 text-success cursor-pointer"
                                        onClick={() =>
                                          orderPreviewToggle(orders)
                                        }
                                      >
                                        MoreDetail
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td />
                                    <td />
                                    <td>
                                      <p className="empty my-5 py-3 text-dark font-15 text-center">
                                        NO ORDERS FOUND
                                      </p>
                                    </td>
                                    <td />
                                    <td />
                                  </tr>
                                )
                              ) : orders?.length > 0 ? (
                                orders?.map((orders, index) => (
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="font-13">
                                      {dateFormat(
                                        orders.createdAt,
                                        "dS mmmm , yyyy"
                                      )}
                                    </td>
                                    <td className="pl-5">
                                      {orders.cartItems[0].items.length}
                                    </td>
                                    <td className="font-13 pl-3">
                                      {
                                        users.find(
                                          (user) =>
                                            user._id === orders.createdBy
                                        )?.userName
                                      }
                                    </td>
                                    <td
                                      className="font-11 text-success cursor-pointer"
                                      onClick={() => orderPreviewToggle(orders)}
                                    >
                                      MoreDetail
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                  <td />
                                  <td />
                                  <td>
                                    <p className="empty my-5 py-3 text-dark font-15 text-center">
                                      NO ORDERS FOUND
                                    </p>
                                  </td>
                                  <td />
                                  <td />
                                </tr>
                              )}
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
          />
        </div>
      )}
    </div>
  );
};

export default Orders;
