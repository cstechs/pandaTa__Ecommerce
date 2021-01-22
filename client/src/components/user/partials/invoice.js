import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSellers } from "../../../redux/_actions/sellerAction";
import { getOrder } from "../../../redux/_actions/orderAction";
import dateFormat from "dateformat";

const Invoice = ({ userCart }) => {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const orders = useSelector((state) => state.order.orders);
  const sellers = useSelector((state) => state.seller.sellers);
  const currentOrd = orders?.filter((order) => order.createdBy === user._id);
  const currentOrder = Object.values(currentOrd).pop();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSellers());
    dispatch(getOrder());
  }, [dispatch]);
  return (
    <div className="Invoice">
      <div className="InvoiceTop">
        <div className="float-left">
          <h1 className="font-weight-bold">PANDA / TA </h1>
          <p className="font-14">Melbourne, Australia</p>
          <p className="font-14">P: (123) 456-7890</p>
        </div>
        <div className="float-right text-right">
          <h2>Invoice</h2>
        </div>
      </div>
      <hr />
      <div className="InvoiceDetail">
        <div className="float-left">
          <h6>Invoice to</h6>
          {user && (
            <React.Fragment>
              <p className="font-14">{user.userName}</p>
              <p>{user.user}</p>
              <p className="font-14">{currentOrder?.address}</p>
              <p className="font-14">
                {currentOrder?.city} | {currentOrder?.country}
              </p>
            </React.Fragment>
          )}
        </div>
        <div className="float-right">
          <p>
            <span className="mr-1"> Order Date:</span>
            {dateFormat(currentOrder?.createdAt, "dS mmmm , yyyy")}
          </p>
          <p>
            <span className="mr-1">Order Status:</span>
            <span className="badge">Pending</span>
          </p>
          <p>
            <span className="mr-1">Order ID:</span> #1234567
          </p>
        </div>
        <br />
        <div className="table-responsive mt-5">
          <table className="table mb-0 mt-4">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>ITEM</th>
                <th>SELLER</th>
                <th>QUANTITY</th>
                <th>TOTAL PRICE</th>
              </tr>
            </thead>
            <tbody>
              {userCart?.items.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td> {item.productId.productName} </td>
                  <td>
                    {
                      sellers?.find((seller) => seller._id === item.sellerId)
                        ?.userName
                    }
                  </td>
                  <td>{item.quantity} </td>
                  <td>${item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-right mt-3">
          <h4>
            <strong> Sub-total:</strong>$
            {userCart?.subTotal.toLocaleString(navigator.language, {
              minimumFractionDigits: 0,
            })}
          </h4>
          <h3>USD ${userCart?.subTotal.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
