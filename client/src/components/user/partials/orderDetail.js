import React from "react";
const OrderDetail = ({ orderPreviewToggle, selectedOrder }) => {
  const handleHide = () => {
    orderPreviewToggle();
  };
  return (
    <>
      <i className="fas fa-times-circle closeIcon" onClick={handleHide}></i>
      <div className="OrderBar">
        <div className="card-box">
          <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">ORDER ITEMS</h5>
          <div className="cart-table">
            <table>
              <tbody>
                {selectedOrder.cartItems[0].items.map((item) => (
                  <tr key={item._id}>
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
                      $
                      {item.productId.productPrice.toLocaleString(
                        navigator.language,
                        {
                          minimumFractionDigits: 0,
                        }
                      )}
                    </td>
                    <td>
                      <span className="price">{item.quantity}</span>
                    </td>
                    <td>
                      $
                      {item.total.toLocaleString(navigator.language, {
                        minimumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="detail mt-3">
            <div className="float-right">
              <p>
                Total Amount
                <span>
                  {selectedOrder.cartItems[0].subTotal.toLocaleString(
                    navigator.language,
                    {
                      minimumFractionDigits: 0,
                    }
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderDetail;
