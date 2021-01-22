import React from "react";
const OrderDetail = ({ orderPreviewToggle, selectedOrder }) => {
  const handleHide = () => {
    orderPreviewToggle();
  };
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <i className="fas fa-times-circle closeIcon" onClick={handleHide}></i>
      <div className="OrderBar">
        <div className="card-box">
          <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">USER DETAIL</h5>
          <div className="row">
            <div className="col-12">
              <div className="form-group mb-2">
                <label>Email Address</label>
                <input
                  type="text"
                  value={selectedOrder.email}
                  disabled
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-2">
                <label>First Name</label>
                <input
                  type="text"
                  value={selectedOrder.firstName}
                  disabled
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-2">
                <label>Last Name</label>
                <input
                  type="text"
                  value={selectedOrder.lastName}
                  disabled
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group mb-2">
                <label>Address</label>
                <input
                  type="text"
                  value={selectedOrder.address}
                  disabled
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-2">
                <label>City</label>
                <input
                  type="text"
                  value={selectedOrder.city}
                  disabled
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-2">
                <label>Country</label>
                <input
                  type="text"
                  value={selectedOrder.country}
                  disabled
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group mb-2">
                <label>Postal Code</label>
                <input
                  type="text"
                  value={selectedOrder.postalCode}
                  disabled
                  className="form-control"
                />
              </div>
            </div>
            {selectedOrder.phone && (
              <div className="col-12">
                <div className="form-group mb-2">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    value={selectedOrder.phone}
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="card-box">
          <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">USER CART</h5>
          <div className="cart-table">
            <table>
              <tbody>
                {selectedOrder.cartItems[0].items.map((item) => (
                  <>
                    {user.role === "seller" ? (
                      item.sellerId === user._id ? (
                        <tr>
                          <td>
                            <div className="imageBox">
                              <img
                                src={`/${item.productId.productImage}`}
                                alt={item.productId.productName}
                              />
                            </div>
                          </td>
                          <td>{item.productId.productName}</td>
                          <td>
                            <span className="price">{item.quantity}</span>
                          </td>
                          <td>${item.productId.productPrice} </td>
                        </tr>
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
                    ) : (
                      <tr>
                        <td>
                          <div className="imageBox">
                            <img
                              src={`/${item.productId.productImage}`}
                              alt={item.productId.productName}
                            />
                          </div>
                        </td>
                        <td>{item.productId.productName}</td>
                        <td>
                          <span className="price">{item.quantity}</span>
                        </td>
                        <td>${item.productId.productPrice} </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <div className="detail">
            <div className="float-right">
              <p>
                Total Amount
                <span>${selectedOrder.cartItems[0].subTotal.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderDetail;
