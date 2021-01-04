import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
import SellerSideBar from "../partials/sellerSideBar";
import productimg from "../../../assets/images/user/product.png";
// import businessimg from "../../../assets/images/user/businessLogo.png";
// import UserImage from "../../../assets/images/admin/users/user-2.jpg";
import { getCategory } from "../../../redux/_actions/categoryAction";
import {
  getSellerById,
  getSellerProducts,
} from "../../../redux/_actions/sellerAction";
import Loader from "../partials/loader";
import SellerProductitems from "../partials/sellerproductitems";

const Category = () => {
  const dispatch = useDispatch();
  const seller = useSelector((state) => state.seller.seller);
  const sellerProducts = useSelector((state) => state.seller.sellerproducts);
  const subCategory = useSelector((state) => state.subCategory);
  const [proId, setProId] = useState([]);
  const [catId, setCatId] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSellerById(id));
    dispatch(getSellerProducts(id));
  }, [dispatch]);

  if (!seller) {
    return <Loader />;
  }

  function ProductIdSetter(productId) {
    if (proId.find((val) => val === productId)) {
      let arr = proId.findIndex((val) => val === productId);
      setProId((prev) => {
        prev.splice(arr, 1);
        return [...prev];
      });
    } else {
      setProId((prev) => [...prev, productId]);
    }
  }
  function CatIdSetter(productId) {
    if (catId.find((val) => val === productId)) {
      let arr = catId.findIndex((val) => val === productId);
      setCatId((prev) => {
        prev.splice(arr, 1);
        return [...prev];
      });
    } else {
      setCatId((prev) => [...prev, productId]);
    }
  }

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
          <Link to="/">Sellers</Link>
        </li>
        <li className="breadcrumb-item active">{seller.userName}</li>
      </ol>
      <div className="seller">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="SideBar">
                <SellerSideBar
                  seller={seller}
                  subCategory={subCategory}
                  Productidsetter={ProductIdSetter}
                  Catidsetter={CatIdSetter}
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="products">
                <div className="container-fluid">
                  <div className="row">
                    {/* {sellerProducts.length !== 0 ? (
                      sellerProducts.map((product) => (
                        <div className="col-md-4 col-6">
                          <div className="product">
                            <img src={`/${product.productImage}`} alt="" />
                            <div className="content">
                              <div className="content-left">
                                <span className="vendor">
                                  {seller.userName}
                                </span>
                                <span className="product_name">
                                  {product.productName}
                                </span>
                                <span className="product_price">
                                  ${product.productPrice}
                                </span>
                              </div>
                              <div className="content-right">
                                <i className="fa fa-caret-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="mt-5 pt-5 w-100">
                        <div className="empty mt-5 pt-5">
                          No Products by Seller
                        </div>
                      </div>
                    )} */}
                    <SellerProductitems
                      product={sellerProducts}
                      proId={proId}
                      catId={catId}
                      seller={seller}
                    />
                  </div>
                </div>
              </div>
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

export default Category;
