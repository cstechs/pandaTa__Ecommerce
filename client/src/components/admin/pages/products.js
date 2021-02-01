import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../partials/header";
import Footer from "../partials/footer";
import AddProductBar from "../partials/addProductBar";
import UpdateProductBar from "../partials/updateProductBar";
import productProgessImg1 from "../../../assets/images/admin/current-products-progress-img-1.png";
import productProgessImg2 from "../../../assets/images/admin/current-products-progress-img-2.png";
import productProgessImg3 from "../../../assets/images/admin/current-products-progress-img-3.png";
import {
  deleteProduct,
  getProduct,
} from "../../../redux/_actions/productAction";
import { getOrder } from "../../../redux/_actions/orderAction";
import { getCart } from "../../../redux/_actions/cartAction";

const Products = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const product = useSelector((state) => state.product);
  const productData = useSelector((state) => state.product.products.data);
  const productLength = product.products.data.length;
  const sellerProductLength = product?.products?.data?.filter(
    (x) => x.createdBy === user._id
  )?.length;
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  const [addBarPreviewShown, setaddBarPreviewShown] = useState(false);
  const [updateBarPreviewShown, setupdateBarPreviewShown] = useState(false);
  const [products, setProduct] = useState(0);
  const customers = useSelector((state) => state.user.users);
  const customerLength = customers.filter(
    (customer) => customer.role === "customer"
  )?.length;
  const inStock = product?.products?.data?.filter(
    (x) =>
      (user.role === "admin" && x.productQuantity > 50) ||
      (x.productQuantity > 50 && x.createdBy === user._id)
  )?.length;
  const lowStock = product?.products?.data?.filter(
    (x) =>
      (user.role === "admin" && x.productQuantity < 50) ||
      (x.productQuantity < 50 && x.createdBy === user._id)
  )?.length;
  const outOfStock = product?.products?.data?.filter(
    (x) =>
      (user.role === "admin" && x.productQuantity < 0) ||
      (x.productQuantity < 0 && x.createdBy === user._id)
  )?.length;
  const totalOrders = orders.length;
  const SellerproductsLength = productData.filter(
    (product) => product.createdBy === user._id
  )?.length;
  const TotalproductsLength = productData.length;

  const updatetogglePreview = () => {
    setupdateBarPreviewShown(!updateBarPreviewShown);
  };

  const addtogglePreview = () => {
    setaddBarPreviewShown(!addBarPreviewShown);
  };
  const addProductBarPreview = () => {
    setaddBarPreviewShown(true);
  };
  const updateProductBarPreview = (item) => {
    setupdateBarPreviewShown(true);
    setProduct(item);
  };
  const ProductDelete = (item) => {
    dispatch(deleteProduct(item._id));
  };
  useEffect(() => {
    dispatch(getProduct());
    dispatch(getCart());
    dispatch(getOrder());
  }, [dispatch]);

  return (
    <>
      <div className="Dashobard">
        <div id="wrapper">
          <Navbar />
          <div className="content-page" id="content">
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box">
                      <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                          <li className="breadcrumb-item">
                            <Link to="/admin">PANDA / TA</Link>
                          </li>
                          <li className="breadcrumb-item active">Products</li>
                        </ol>
                      </div>
                      <h4 className="page-title">Products</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card-box current-products-progress">
                      <div>
                        <img
                          src={productProgessImg1}
                          draggable="false"
                          alt="product-progress"
                        />
                      </div>
                      <div>
                        <h2 className="text-left text-lightblue">
                          {customerLength}
                        </h2>
                        <p className="text-secondary ">Total Customers</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-box current-products-progress">
                      <div>
                        <img
                          src={productProgessImg2}
                          draggable="false"
                          alt="product-progress"
                        />
                      </div>
                      <div>
                        <h2 className="text-left text-purple">{totalOrders}</h2>
                        <p className="text-secondary ">Total Orders</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-box current-products-progress">
                      <div>
                        <img
                          src={productProgessImg3}
                          draggable="false"
                          alt="product-progress"
                        />
                      </div>
                      <div>
                        <h2 className="text-left text-success">
                          {user && user.role === "seller" ? (
                            <span>{SellerproductsLength}</span>
                          ) : (
                            <span>{TotalproductsLength}</span>
                          )}
                        </h2>
                        <p className="text-secondary">Total Products</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {user.role === "seller" && (
                    <div className="col-12 text-right">
                      <button
                        className="btn btn-success ripple button-base mr-2"
                        onClick={() => addProductBarPreview()}
                      >
                        ADD PRODUCT
                      </button>
                    </div>
                  )}
                </div>
                <div className="row mt-3">
                  <div className="col-md-8">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="header-title d-inline-block">
                          Products{" "}
                        </h4>
                        {user.role === "seller" ? (
                          <span className="float-right font-12">
                            {sellerProductLength} items
                          </span>
                        ) : (
                          <span className="float-right font-12">
                            {productLength} items
                          </span>
                        )}
                        <div className="table-responsive mt-3">
                          <table className="table table-hover mb-0 product-data-table">
                            <thead className="thead-light position-absolute">
                              <tr>
                                <th
                                  className="productName"
                                  id="productQuantity"
                                >
                                  PRODUCTS
                                </th>
                                <th>AVAILIBILITY</th>
                                <th>TOTAL</th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              {user.role === "seller" &&
                                product.products.data?.map((item) => (
                                  <React.Fragment key={item._id}>
                                    {user._id === item.createdBy && (
                                      <tr key={item._id}>
                                        <td className="productName">
                                          <Link to={`/product/${item._id}`}>
                                            <div className="product_image">
                                              <img
                                                src={`/${item.productImage}`}
                                                className="mr-2"
                                                alt={item.productName}
                                              />
                                            </div>
                                            <div className="product_name">
                                              <p className="m-0 font-13 text-secondary">
                                                {item.productName}
                                              </p>
                                            </div>
                                          </Link>
                                        </td>
                                        <td>
                                          <div
                                            className={`${
                                              item.productQuantity > 50 &&
                                              "badge badge-success p-1 mt-1 productQuantityBadge"
                                            } ${
                                              item.productQuantity < 50 &&
                                              "badge badge-warning p-1 mt-1 productQuantityBadge"
                                            }${
                                              item.productQuantity <= 0 &&
                                              "badge badge-danger p-1 mt-1 productQuantityBadge"
                                            }`}
                                          >
                                            {item.productQuantity} in stock
                                          </div>
                                        </td>
                                        <td className="pt-2">
                                          ${item.productPrice}
                                        </td>
                                        <td className="pt-2 font-16">
                                          <i
                                            className="fas fa-edit"
                                            onClick={() =>
                                              updateProductBarPreview(item)
                                            }
                                          ></i>
                                          |
                                          <i
                                            className="fas fa-trash-alt text-danger"
                                            onClick={() => ProductDelete(item)}
                                          ></i>
                                        </td>
                                      </tr>
                                    )}
                                  </React.Fragment>
                                ))}
                              {user.role === "admin" &&
                                product.products.data?.map((item) => (
                                  <tr key={item._id}>
                                    <td className="productName">
                                      <Link to={`/product/${item._id}`}>
                                        <div className="product_image">
                                          <img
                                            src={`/${item.productImage}`}
                                            className="mr-2"
                                            alt={item.productName}
                                          />
                                        </div>
                                        <div className="product_name">
                                          <p className="m-0 font-13 text-secondary">
                                            {item.productName}
                                          </p>
                                        </div>
                                      </Link>
                                    </td>
                                    <td>
                                      <div
                                        className={`${
                                          item.productQuantity > 50 &&
                                          "badge badge-success p-1 mt-1 productQuantityBadge"
                                        } ${
                                          item.productQuantity < 50 &&
                                          "badge badge-warning p-1 mt-1 productQuantityBadge"
                                        }${
                                          item.productQuantity <= 0 &&
                                          "badge badge-danger p-1 mt-1 productQuantityBadge"
                                        }`}
                                      >
                                        {item.productQuantity} in stock
                                      </div>
                                    </td>
                                    <td className="pt-2">
                                      ${item.productPrice}
                                    </td>
                                    <td className="pt-2 font-16">
                                      {user.role === "seller" && (
                                        <i
                                          className="fas fa-edit"
                                          onClick={() =>
                                            updateProductBarPreview(item)
                                          }
                                        ></i>
                                      )}
                                      {user.role === "admin" && (
                                        <Link to={`/product/${item._id}`}>
                                          <i className="fas fa-eye text-dark"></i>
                                        </Link>
                                      )}
                                      |
                                      <i
                                        className="fas fa-trash-alt text-danger"
                                        onClick={() => ProductDelete(item)}
                                      ></i>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="header-title mb-3">Quick Details </h4>

                        <div className="quick-detail-item">
                          <div className="quick-detail-icon bg-success">
                            <i className="fas fa-stopwatch" />
                          </div>
                          <div className="quick-detail-details">
                            <div className="float-left">
                              <h6>In Stock </h6>
                            </div>
                            <div className="float-right">
                              <h4>{inStock} items</h4>
                            </div>
                          </div>
                        </div>

                        <div className="quick-detail-item">
                          <div className="quick-detail-icon bg-warning">
                            <i className="fas fa-exclamation-circle" />
                          </div>
                          <div className="quick-detail-details">
                            <div className="float-left">
                              <h6>Low in Stock</h6>
                            </div>
                            <div className="float-right">
                              <h4>{lowStock} items</h4>
                            </div>
                          </div>
                        </div>

                        <div className="quick-detail-item">
                          <div className="quick-detail-icon bg-danger">
                            <i className="fas fa-times-circle" />
                          </div>
                          <div className="quick-detail-details">
                            <div className="float-left">
                              <h6>Out of Stock </h6>
                            </div>
                            <div className="float-right">
                              <h4>{outOfStock} items</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      {updateBarPreviewShown && (
        <div className="Product_Bar_Portion">
          <UpdateProductBar
            products={products}
            updatetogglePreview={updatetogglePreview}
          />
        </div>
      )}
      {addBarPreviewShown && (
        <div className="Product_Bar_Portion">
          <AddProductBar addtogglePreview={addtogglePreview} />
        </div>
      )}
    </>
  );
};

export default Products;
