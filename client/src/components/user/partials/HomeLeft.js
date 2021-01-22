import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import productimg from "../../../assets/images/user/product.png";
import { useDispatch, useSelector } from "react-redux";
import { getSellers } from "../../../redux/_actions/sellerAction";

const HomeLeft = ({ product }) => {
  const sellers = useSelector((state) => state.seller.sellers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSellers);
  }, [dispatch]);
  return (
    <div className="col-md-6">
      <div className="container-fluid">
        <div className="row">
          {product.products.data?.map((item, index) => {
            return (
              <React.Fragment key={item._id}>
                {index === 0 && (
                  <div className="col-12">
                    <Link to={`/product/${item._id}`}>
                      <div className="product">
                        <div
                          className="image-portion"
                          style={{
                            backgroundImage: `url(${item.productImage})`,
                          }}
                        ></div>
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">
                              {
                                sellers?.find(
                                  (seller) => seller._id === item.createdBy
                                )?.userName
                              }
                            </span>
                            <span className="product_name">
                              {item.productName}
                            </span>
                            <span className="product_price">
                              ${item.productPrice}
                            </span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
                {index < 7 && index > 0 && (
                  <div className="col-6">
                    <Link to={`/product/${item._id}`}>
                      <div className="product">
                        <div
                          className="image-portion"
                          style={{
                            backgroundImage: `url(${item.productImage})`,
                          }}
                        ></div>
                        <div className="content">
                          <div className="content-left">
                            <span className="vendor">
                              {" "}
                              {
                                sellers?.find(
                                  (seller) => seller._id === item.createdBy
                                )?.userName
                              }
                            </span>
                            <span className="product_name">
                              {item.productName}
                            </span>
                            <span className="product_price">
                              ${item.productPrice}
                            </span>
                          </div>
                          <div className="content-right">
                            <i className="fa fa-caret-right"></i>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
