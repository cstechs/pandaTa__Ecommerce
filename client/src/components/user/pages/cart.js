import React, { useEffect, useState } from "react";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import { Link } from "react-router-dom";

import { login } from "../../../redux/_actions/authAction";

import productimg from "../../../assets/images/user/product.png";
import Banner from "../../../assets/images/user/banner.PNG";
import { useDispatch, useSelector } from "react-redux";
import { cartIncrement, getCart } from "../../../redux/_actions/cartAction";
import CartInput from "./cartInput";
import { addItemToCart } from "../../../redux/_actions/cartAction";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  // console.log("cart", cartItem.data?.items)
  const [quantity, setQuantity] = useState([]);

  // {
  //   console.log(cartItem?.data);
  // }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  useEffect(() => {
    setQuantity(() =>
      cartItem?.data?.items?.map((item) => {
        return {
          itemQuantity: item.quantity,
          itemId: item.productId._id,
          itemTotal: item.total,
        };
      })
    );
  }, [cartItem]);
  useEffect(() => {}, [addItemToCart]);
  //   const CartIncrement = () => {
  //     setQuantity(quantity + 1);
  //     // dispatch(cartIncrement(_id,quantity))
  //   };

  const handleAddQuantity = (index, Quantity, id, total) => {
    // setQuantity((prev) => {
    //   prev.splice(index, 1, {
    //     itemQuantity: Quantity + 1,
    //     itemId: id,
    //     itemTotal: total,
    //   });
    //   dispatch(addItemToCart(id, +1));
    //   return [...prev];
    // });
    dispatch(addItemToCart(id, +1));
    console.log("quantity", quantity);
  };
  const handleRemoveQuantity = (index, Quantity, id, total) => {
    // if (Quantity > 0)
    //   setQuantity((prev) => {
    //     prev.splice(index, 1, {
    //       itemQuantity: Quantity - 1,
    //       itemId: id,
    //       itemTotal: total,
    //     });

    // return [...prev];
    // });
    dispatch(addItemToCart(id, -1));
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
        <li className="breadcrumb-item active">Cart</li>
      </ol>
      <div className="PageTitle">Cart</div>
      <div className="cart">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>ITEM DETAIL</th>
                    <th>PRICE </th>
                    <th>QTY</th>
                    <th></th>
                  </tr>
                </thead>

                {
                  cartItem.data &&
                    cartItem.data.items.map((item, index) => {
                      return (
                        <tbody>
                          <tr>
                            <td>
                              <i className="ti-close"></i>
                            </td>
                            <td>
                              <div className="float-left">
                                <div className="imageBox">
                                  <img
                                    src={item.productId.productImage}
                                    alt="ProductImage"
                                  />
                                </div>
                              </div>
                              <div className="float-left">
                                <h4>{item.productId.productName}</h4>
                                <span>Supplier's Name Here</span>
                              </div>
                            </td>
                            <td>{item.productId.productPrice} </td>
                            <td>
                              <div className="position-relative">
                                <input
                                  type="number"
                                  value={
                                    // quantity ? quantity[index]?.itemQuantity : 1
                                    item.quantity
                                  }
                                  className="border-right-0"
                                />
                                <div className="AdjustQuantity">
                                  <i
                                    className="fa fa-plus border-bottom-0"
                                    onClick={() =>
                                      handleAddQuantity(
                                        index,
                                        quantity[index]?.itemQuantity,
                                        item.productId._id,
                                        item.total
                                      )
                                    }
                                  />
                                  <i
                                    className="fa fa-minus"
                                    onClick={() =>
                                      handleRemoveQuantity(
                                        index,
                                        quantity[index].itemQuantity,
                                        item.productId._id,
                                        item.total
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </td>
                            <td>
                              <p>{item.total}</p>
                            </td>
                          </tr>
                          {/* <tr>
                          <td>
                            <i className="ti-close"></i>
                          </td>
                          <td>
                            <div className="float-left">
                              <div className="imageBox">
                                <img src={productimg} alt="ProductImage" />
                              </div>
                            </div>
                            <div className="float-left">
                              <h4>Product Name Here</h4>
                              <span>Supplier's Name Here</span>
                            </div>
                          </td>
                          <td>$28.99 </td>
                          <td>
                            <div className="position-relative">
                              <input
                                type="number"
                                id=""
                                placeholder='0'
                                className="border-right-0"
                              />
                              <div className="AdjustQuantity">
                                <i className="fa fa-plus border-bottom-0" />
                                <i className="fa fa-minus" />
                              </div>
                            </div>
                          </td>
                          <td>
                            <p>$28.99</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti-close"></i>
                          </td>
                          <td>
                            <div className="float-left">
                              <div className="imageBox">
                                <img src={productimg} alt="ProductImage" />
                              </div>
                            </div>
                            <div className="float-left">
                              <h4>Product Name Here</h4>
                              <span>Supplier's Name Here</span>
                            </div>
                          </td>
                          <td>$28.99 </td>
                          <td>
                            <div className="position-relative">
                              <input
                                type="number"
                                id=""
                                placeholder="1"
                                className="border-right-0"
                              />
                              <div className="AdjustQuantity">
                                <i className="fa fa-plus border-bottom-0" />
                                <i className="fa fa-minus" />
                              </div>
                            </div>
                          </td>
                          <td>
                            <p>$28.99</p>
                          </td>
                        </tr> */}
                        </tbody>
                      );
                    })
                  // ) : (
                  //   null
                  // )
                }
              </table>
              <div className="detail">
                <div className="float-right">
                  <p>
                    Subtotal
                    <span>{cartItem?.data?.subTotal}</span>
                  </p>
                  <p>
                    Shipping<span>$0.00</span>
                  </p>
                  <p>
                    Total Amount<span>{cartItem?.data?.subTotal}</span>
                  </p>
                </div>
              </div>
              <Link to="/checkout">
                <button className="btn btn-purple float-right font-13 ripple button-base">
                  PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>
            <div className="col-lg-3 banner">
              <img src={Banner} />
              <img src={Banner} />
            </div>
          </div>
        </div>
      </div>
      <div className="component">
        <Footer />
      </div>
    </>
  );
};

export default Cart;
