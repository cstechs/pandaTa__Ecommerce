import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import { Link, useParams } from "react-router-dom";
import { addItemToCart } from "../../../redux/_actions/cartAction";
import { getProductById } from "../../../redux/_actions/productAction";
import { getChat } from "../../../redux/_actions/chatAction";
import RelatedProduct from "../partials/relatedProducts";
import Chat from "../partials/Chat";
import Loader from "../partials/loader";
import { getUser } from "../../../redux/_actions/userAction";
import { getSellerById } from "../../../redux/_actions/sellerAction";
import { SET_ALERT } from "../../../redux/types";
import { setAlert } from "../../../redux/_actions/alertAction";

const SingleProduct = () => {
  const product = useSelector((state) => state.product);
  const users = useSelector((state) => state.user.users);
  const seller = useSelector((state) => state.seller.seller);

  const subCategory = useSelector((state) => state.subCategory);
  const dispatch = useDispatch();
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [itemWish, setItemWish] = useState(false);
  const arr = subCategory?.subCategories?.data?.filter(
    (x) => x._id === product?.product?.data.productSubCategory
  );
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  useEffect(() => {
    if (product?.product?.data) {
      dispatch(getSellerById(product?.product?.data?.createdBy));
    }
  }, [dispatch]);

  const [StartChatShown, setStartChatShown] = useState(false);
  const [quantity, setquantity] = useState(1);
  const ChatShow = () => {
    setStartChatShown(true);
  };
  const ChatHide = () => {
    setStartChatShown(false);
  };
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    var subId = window.location.pathname.split("/")[2];
    console.log("id2", subId);
    dispatch(getProductById(subId));
  }, []);

  const increment = () => {
    if (quantity !== product?.product?.data.productQuantity) {
      setquantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity !== 1) {
      setquantity(quantity - 1);
    }
  };

  const addToCart = (e, user) => {
    dispatch(addItemToCart(e, user, quantity));
  };

  const addToWishList = () => {
    var newData = product?.product?.data;

    if (localStorage.getItem("WishList") == null) {
      localStorage.setItem("WishList", "[]");
    }
    var oldData = JSON.parse(localStorage.getItem("WishList"));
    if (oldData?.find((data) => data._id === newData._id)) {
      let index = oldData.findIndex((data) => data._id === newData._id);
      oldData.splice(index, 1);
      setItemWish(false);
      dispatch(
        setAlert(SET_ALERT, {
          message: "Item Successfully removed from WishList",
          alertType: "success",
        })
      );
      localStorage.setItem("WishList", JSON.stringify(oldData));
    } else {
      oldData.push(newData);
      localStorage.setItem("WishList", JSON.stringify(oldData));
      setItemWish(true);
      dispatch(
        setAlert(SET_ALERT, {
          message: "Item Successfully added to WishList",
          alertType: "success",
        })
      );
    }
  };
  useEffect(() => {
    var oldData = JSON.parse(localStorage.getItem("WishList"));

    if (oldData?.find((data) => data._id === product?.product?.data?._id)) {
      setItemWish(true);
    }
  }, [product?.product?.data?._id]);
  useEffect(() => {
    dispatch(getChat());
  }, [getChat]);

  if (product && users && subCategory === undefined) {
    return <Loader />;
  }

  return (
    <>
      {product && subCategory ? (
        <div>
          <div className="component">
            <Header />
            <NavBar />
          </div>
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/product">Product</Link>
            </li>
            <li className="breadcrumb-item active">
              {product?.product?.data.productName}
            </li>
          </ol>
          <div className="Single_Product_Portion">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5">
                  <div
                    className="productimage"
                    style={{
                      backgroundImage: `url(/${product?.product?.data.productImage})`,
                    }}
                  ></div>
                </div>
                <div className="col-md-7">
                  <div className="product_detail">
                    <h1>{product?.product?.data.productName}</h1>
                    <div className="Reviews">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <h3> ${product?.product?.data.productPrice}</h3>
                    <h6 className="text-success">
                      Avalibility ( {product?.product?.data.productQuantity} In
                      Stock )
                    </h6>
                    <p>{product?.product?.data.productDescription}</p>
                    {user && user.role === "customer" && (
                      <>
                        <div className="Quantity">
                          <i
                            className="fa fa-minus"
                            onClick={() => decrement()}
                          />
                          <span> {quantity} </span>
                          <i
                            className="fa fa-plus"
                            onClick={() => increment()}
                          />
                        </div>
                        <button
                          className="AddToCart ripple"
                          onClick={() =>
                            addToCart(product?.product?.data._id, user._id)
                          }
                        >
                          Add To Cart
                        </button>
                      </>
                    )}
                    {itemWish && (
                      <button className="AddToWishlist">
                        <i
                          className="fa fa-heart"
                          onClick={() => addToWishList()}
                        />
                      </button>
                    )}
                    {!itemWish && (
                      <button className="AddToWishlist">
                        <i
                          className="far fa-heart"
                          onClick={() => addToWishList()}
                        />
                      </button>
                    )}
                    <hr />
                    <div className="float-left">
                      <h6>
                        <span className="mr-2 font-14">
                          Category : {arr?.map((item) => item.subCategoryName)}
                        </span>
                      </h6>
                      <h6 className="mt-3">
                        <span className="mr-2 font-14">Supplier's Name : </span>
                        <Link
                          to={`/seller/${seller?._id}`}
                          className="text-decoration-underline text-primary font-16"
                        >
                          {seller?.userName}
                        </Link>
                      </h6>
                    </div>
                    {user && user.role === "customer" && (
                      <button className="chatButton" onClick={() => ChatShow()}>
                        <i className="fa fa-comments" />
                        Start Chat
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="relatedProducts mt-2">
                  <h1>Related Products</h1>
                  <div className="product-carousel">
                    {product?.product?.data.productSubCategory && (
                      <RelatedProduct
                        products={product?.product?.data.productSubCategory}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* chat */}
            {StartChatShown && (
              <div className="chatBox">
                <Chat ChatHide={ChatHide} product={product} seller={seller} />
              </div>
            )}
          </div>
          <div className="component">
            <Footer />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default SingleProduct;
