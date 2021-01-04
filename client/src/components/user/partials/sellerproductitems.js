import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct } from "../../../redux/_actions/productAction";
import { getSubCategory } from "../../../redux/_actions/subCategoryAction";
import { getUser } from "../../../redux/_actions/userAction";
import Loader from "./loader";
import InfiniteScroll from "react-infinite-scroll-component";

const SellerProductitems = ({ product, proId, catId, seller }) => {
  const [check, setCheck] = useState([]);
  const [catcheck, setcatCheck] = useState([]);
  //const category = useSelector((state) => state.category.categories);
  const subcategory = useSelector((state) => state.subCategory.subCategories);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
    dispatch(getSubCategory());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    setCheck(proId);
  }, [proId]);
  useEffect(() => {
    setcatCheck(catId);
  }, [catId]);
  if (product === undefined) {
    return <Loader />;
  }

  return (
    <InfiniteScroll dataLength={product.length} className="row w-100">
      {product?.map(
        ({
          _id,
          productName,
          productPrice,
          productImage,
          productSubCategory,
          createdBy,
        }) => (
          <React.Fragment key={_id}>
            {check?.length === 0 && catcheck?.length === 0 && (
              <div className="col-md-4 col-6" key={_id}>
                <Link
                  to={{
                    pathname: `/product/${_id}`,
                    state: {
                      _id: _id,
                    },
                  }}
                >
                  <div className="product">
                    <div className="productimgPortion">
                      <img src={`/${productImage}`} alt={productName} />
                    </div>
                    <div className="content">
                      <div className="content-left">
                        <span className="vendor">{seller.userName}</span>
                        <span className="product_name">{productName}</span>
                        <span className="product_price">${productPrice}</span>
                      </div>
                      <div className="content-right">
                        <i className="fa fa-caret-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
            {((check != [] &&
              check?.find((val) => val === productSubCategory.toString())) ||
              subcategory?.data
                ?.filter((x) => catcheck?.find((z) => z === x.categoryId))
                ?.find((x) => x._id === productSubCategory.toString())) && (
              <div className="col-md-4 col-6" key={_id}>
                <Link to={`/product/${_id}`}>
                  <div className="product">
                    <div className="productimgPortion">
                      <img src={`/${productImage}`} alt={productName} />
                    </div>
                    <div className="content">
                      <div className="content-left">
                        <span className="vendor"> {seller.userName}</span>
                        <span className="product_name">{productName}</span>
                        <span className="product_price">${productPrice}</span>
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
        )
      )}
    </InfiniteScroll>
  );
};

export default SellerProductitems;
