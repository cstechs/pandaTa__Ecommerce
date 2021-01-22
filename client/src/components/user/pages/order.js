import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../../redux/_actions/orderAction";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import OrderDetail from "../partials/orderDetail";
import { Link, useHistory } from "react-router-dom";
import dateFormat from "dateformat";
const Order = () => {
  const history = useHistory();
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const orders = useSelector((state) => state.order.orders);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [orderDetailShown, setorderDetailShown] = useState(false);
  const customerOrders = orders?.filter(
    (order) => order.createdBy === user._id
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);
  if (!user || user.role !== "customer") {
    history.push("/");
  }
  const orderPreviewToggle = (item) => {
    setorderDetailShown(!orderDetailShown);
    setSelectedOrder(item);
  };
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
        <li className="breadcrumb-item active">My Orders</li>
      </ol>
      <div className="order">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>ORDER DATE</th>
              <th>TOTAL PRODUCTS</th>
              <th>SUB TOTAL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customerOrders?.length > 0 ? (
              customerOrders?.map((orders, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{dateFormat(orders?.createdAt, "dS mmmm , yyyy")}</td>
                  <td className="pl-5">{orders?.cartItems[0].items.length}</td>
                  <td>
                    $
                    {orders?.cartItems[0].subTotal.toLocaleString(
                      navigator.language,
                      {
                        minimumFractionDigits: 0,
                      }
                    )}
                  </td>
                  <td
                    className="font-13 text-success cursor-pointer"
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
                  <p className="empty my-5 py-3 text-dark font-16 text-center">
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
      <div className="component">
        <Footer />
      </div>
      {orderDetailShown && (
        <div className="Order_Detail_Portion">
          <OrderDetail
            orderPreviewToggle={orderPreviewToggle}
            selectedOrder={selectedOrder}
          />
        </div>
      )}
    </>
  );
};
export default Order;
