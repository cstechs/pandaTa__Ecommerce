import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../partials/header";
import NavBar from "../partials/navbar";
import ProductSideBar from "../partials/productSideBar";
import ProductItems from "../partials/productitems";
import Footer from "../partials/footer";
import { Link } from "react-router-dom";
import { getProduct } from "../../../redux/_actions/productAction";
import Pagination from "../partials/pagination";

const Product = ({ history }) => {
  const product = useSelector((state) => state.product);
  // const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [proId, setProId] = useState([]);
  const [catId, setCatId] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const proIdProduct = product?.products?.data?.filter((x) =>
    proId.find((val) => val === x.productSubCategory)
  );
  // console.log("checkproId", proId);
  // console.log(
  //   "proId",
  //   product?.products?.data?.filter((x) =>
  //     proId.find((val) => val === x.productSubCategory)
  //   )
  // );

  //  const [check] = useState(false);
  //const category = useSelector((state) => state.category);
  const subCategory = useSelector((state) => state.subCategory);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  // console.log("pro", product);
  // console.log("sub", subCategory);

  const [user] = useState(JSON.parse(localStorage.getItem("user")));

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

  // get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product?.products?.data?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // change page
  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
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
        <li className="breadcrumb-item active">Products</li>
      </ol>

      <div className="seller">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="SideBar">
                <ProductSideBar
                  subCategory={subCategory}
                  user={user}
                  Productidsetter={ProductIdSetter}
                  Catidsetter={CatIdSetter}
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="products">
                <div className="container-fluid">
                  <div className="row">
                    <ProductItems
                      product={currentProducts}
                      proId={proId}
                      catId={catId}
                    />
                    <div className="col-12 text-right">
                      {/* {proId.length === 0 && catId.length === 0 && (
                        <Pagination
                          productsPerPage={productsPerPage}
                          totalProducts={product?.products?.data?.length}
                          paginate={paginate}
                        />
                      )}
                      {proId.length > 0 && (
                        <Pagination
                          productsPerPage={productsPerPage}
                          totalProducts={proId?.length}
                          paginate={paginate}
                        />
                      )} */}
                      {/* {catId.length > 0 && (
                        <Pagination
                          productsPerPage={productsPerPage}
                          totalProducts={proId?.length}
                          paginate={paginate}
                        />
                      )} */}
                    </div>
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
