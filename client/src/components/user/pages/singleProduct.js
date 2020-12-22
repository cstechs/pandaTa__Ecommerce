import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import { Link } from "react-router-dom";
import { addItemToCart } from "../../../redux/_actions/cartAction";
import { getProductById } from "../../../redux/_actions/productAction";
import { getSubCategory } from "../../../redux/_actions/subCategoryAction";
import { createChat, getChat } from "../../../redux/_actions/chatAction";
import RelatedProduct from "../partials/relatedProducts";
// import UserImage from "../../../assets/images/admin/users/user-6.jpg";
import Chat from "../partials/Chat";

const SingleProduct = () => {
  const product = useSelector((state) => state.product);
  const chat = useSelector((state) => state.chat);
  const subCategory = useSelector((state) => state.subCategory);
  const dispatch = useDispatch();
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [checkSender, setCheckSender] = useState(null);
  const arr = subCategory?.subCategories?.data?.filter(
    (x) => x._id === product?.product?.data.productSubCategory
  );

  // const SenderCheckFunction = () => {
  //   if (user.role === "seller") {
  //     setCheckSender(1);
  //   } else {
  //     setCheckSender(0);
  //   }
  // };
  const [newMessage, setNewMessage] = useState({
    message: "",
    sender: "",
    createdBy: "",
    sellerId: "",
  });
  const { message } = newMessage;

  const onChange = (e) => {
    if (user.role == "seller") {
      setCheckSender(1);
      newMessage.sender = checkSender;
      newMessage.createdBy = user._id;
      setNewMessage({
        ...newMessage,
        [e.target.name]: e.target.value,
      });
    } else {
      setCheckSender(0);
      newMessage.sender = checkSender;
      newMessage.createdBy = user._id;
      setNewMessage({
        ...newMessage,
        [e.target.name]: e.target.value,
      });
    }
  };

  const [RelatedProductShown, setRelatedProductShown] = useState(false);
  const [StartChatShown, setStartChatShown] = useState(false);
  const [products, setProduct] = useState(0);
  const [quantity, setquantity] = useState(1);

  const handlePreview = (item) => {
    setRelatedProductShown(true);
    setProduct(item);
  };
  const ChatShow = () => {
    setStartChatShown(true);
  };
  const ChatHide = () => {
    setStartChatShown(false);
  };
  useEffect(() => {
    dispatch(getProductById(window.location.pathname.split("/")[2]));
    dispatch(getSubCategory());
  }, [RelatedProductShown]);

  const increment = () => {
    setquantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity != 1) {
      setquantity(quantity - 1);
    }
  };

  const addToCart = (e, user, quantity) => {
    dispatch(addItemToCart(e, user, quantity));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // // if (newText === '', sender === '', createdBy === '', sellerId === '' ) {
    // //     dispatch(setAlert('Please Enter fields.', 'danger'));
    // // }
    // else {
    dispatch(createChat(newMessage));

    // }
  };
  useEffect(() => {
    dispatch(getChat());
  }, []);

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
        <li className="breadcrumb-item">
          <Link to="/product">Product</Link>
        </li>
        <li className="breadcrumb-item active">
          {product?.product?.data.productName}
        </li>
      </ol>
      <div
        className="Single_Product_Portion"
        onMouseOver={() =>
          handlePreview(product?.product?.data.productSubCategory)
        }
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="productimage">
                <img
                  src={`/${product?.product?.data.productImage}`}
                  alt="productImage"
                />
              </div>
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

                {/* {console.log(
                  product?.product?.data.productSubCategory ===
                    subCategory?.data?.map((item) => item._id)
                )} */}
                {/* {console.log(product?.product?.data)} */}

                <h6 className="text-success">
                  Avalibility ( {product?.product?.data.productQuantity} In
                  Stock )
                </h6>
                <p>{product?.product?.data.productDescription}</p>
                <div className="Quantity">
                  <i className="fa fa-minus" onClick={() => decrement()} />
                  <span> {quantity} </span>
                  <i className="fa fa-plus" onClick={() => increment()} />
                </div>
                <button
                  className="AddToCart ripple"
                  onClick={() =>
                    addToCart(product?.product?.data._id, user._id, 1)
                  }
                >
                  Add To Cart
                </button>
                <button className="AddToWishlist">
                  <i className="fa fa-heart" />
                </button>
                <hr />
                <h6>
                  <span className="mr-2 font-14">
                    Category :{arr?.map((item) => item.subCategoryName)}
                  </span>
                </h6>
                <h6 className="mt-3">
                  <span className="mr-2 font-14">Supplier's Name : </span>
                  Supplier’s Name Here
                </h6>
                {user && (
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
              {/* {console.log("related", RelatedProductShown)} */}
              <div className="product-carousel">
                {RelatedProductShown && <RelatedProduct products={products} />}
              </div>
            </div>
          </div>
        </div>

        {/* chat */}
        {StartChatShown && (
          <div className="chatBox">
            <Chat ChatHide={ChatHide} product={product} />
          </div>
        )}
      </div>
      <div className="component">
        <Footer />
      </div>
    </>
  );
};
export default SingleProduct;
