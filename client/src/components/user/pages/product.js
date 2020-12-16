import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import ProductSideBar from "../partials/productSideBar";
import ProductItems from "../partials/productitems";
import Footer from "../partials/footer";
import { Link } from "react-router-dom";
import { getProduct } from "../../../redux/_actions/productAction";

const Product = ({ history }) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [proId, setProId] = useState([]);
  const [check, setCheck] = useState(false);
  //const category = useSelector((state) => state.category);
  const subCategory = useSelector((state) => state.subCategory);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

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
        <li className="breadcrumb-item active">Products</li>
      </ol>
      <div className="seller">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="SideBar">
                <ProductSideBar
                  product={product}
                  subCategory={subCategory}
                  user={user}
                  Productidsetter={ProductIdSetter}
                  proid={proId}
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="products">
                <div className="container-fluid">
                  <div className="row">
                    <ProductItems
                      product={product}
                      proId={proId}
                      check={check}
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

export default Product;
