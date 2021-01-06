import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../partials/topnavbar";
import Footer from "../partials/footer";
import AddCategoryBar from "../partials/addCategoryBar";
import AddSubCategory from "../partials/addSubCategoryBar";
import UpdateCategoryBar from "../partials/updateCategoryBar";
import UpdateSubCategoryBar from "../partials/updateSubCategoryBar";
import productProgessImg1 from "../../../assets/images/admin/current-products-progress-img-1.png";
import productProgessImg2 from "../../../assets/images/admin/current-products-progress-img-2.png";
import productProgessImg3 from "../../../assets/images/admin/current-products-progress-img-3.png";
import {
  getCategory,
  deleteCategory,
} from "../../../redux/_actions/categoryAction";
import {
  deleteSubCategory,
  getSubCategory,
} from "../../../redux/_actions/subCategoryAction";

const Category = () => {
  function categoryToggle() {
    document
      .getElementById("AddCategoryBar")
      .classList.toggle("ShowProductAndCategoryBar");
  }
  function SubcategoryToggle() {
    document
      .getElementById("AddSubCategoryBar")
      .classList.toggle("ShowProductAndCategoryBar");
  }
  function UpdateSubcategoryToggle() {
    document
      .getElementById("UpdateSubCategoryBar")
      .classList.toggle("ShowProductAndCategoryBar");
  }

  const [catPreviewShown, setcatPreviewShown] = useState(false);
  const [newcategory, setnewcategory] = useState(0);
  const [subCatPreviewShown, setsubCatPreviewShown] = useState(false);
  const [newSubcategory, setnewSubcategory] = useState(0);
  const category = useSelector((state) => state.category);
  const subCategory = useSelector((state) => state.subCategory);
  const dispatch = useDispatch();

  const categorytogglePreview = () => {
    setcatPreviewShown(!catPreviewShown);
  };

  const SubCategorytogglePreview = () => {
    setsubCatPreviewShown(!subCatPreviewShown);
  };

  const showCategory = (item) => {
    setcatPreviewShown(true);
    setnewcategory(item);
  };

  const showSubCategory = (item) => {
    setsubCatPreviewShown(true);
    setnewSubcategory(item);
  };
  const categoryDelete = (e, item) => {
    // console.log("it", item._id);
    dispatch(deleteCategory(item._id));
    window.location.reload();
  };

  const SubcategoryDelete = (e, item) => {
    dispatch(deleteSubCategory(item._id));
    window.location.reload();
  };
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSubCategory());
  }, []);

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
                          <li className="breadcrumb-item active">Category</li>
                        </ol>
                      </div>
                      <h4 className="page-title">Category</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card-box current-products-progress">
                      <div>
                        <img src={productProgessImg1} draggable="false" />
                      </div>
                      <div>
                        <h2 className="text-left text-lightblue">$50,000</h2>
                        <p className="text-secondary ">Total Revenue</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-box current-products-progress">
                      <div>
                        <img src={productProgessImg2} draggable="false" />
                      </div>
                      <div>
                        <h2 className="text-left text-purple">$1,250</h2>
                        <p className="text-secondary ">Revenue</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-box current-products-progress">
                      <div>
                        <img src={productProgessImg3} draggable="false" />
                      </div>
                      <div>
                        <h2 className="text-left text-success">+2.0%</h2>
                        <p className="text-secondary">Growth</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-right">
                    <button
                      className="btn btn-success ripple button-base mr-2"
                      onClick={categoryToggle}
                    >
                      ADD CATEGORY
                    </button>
                    <button
                      className="btn btn-success ripple button-base"
                      onClick={SubcategoryToggle}
                    >
                      ADD SUB CATEGORY
                    </button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-5">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="header-title">Categories</h4>
                        <div className="table-responsive mt-3">
                          <table className="table table-hover mb-0 category-data-table">
                            <thead className="thead-light position-absolute w-89">
                              <tr>
                                <th className="cateogryName">NAME</th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              {category.categories?.data?.map((item) => (
                                <tr className="pt-3" key={item._id}>
                                  <td className="cateogryName">
                                    {item?.categoryName}
                                  </td>
                                  <td className="font-16">
                                    <i
                                      className="fas fa-edit"
                                      onClick={() => showCategory(item)}
                                    ></i>
                                    |
                                    <i
                                      className="fas fa-trash-alt text-danger"
                                      onClick={(e) => categoryDelete(e, item)}
                                    ></i>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {catPreviewShown && (
                            <div
                              className="Category_Bar_Portion"
                              style={{ transform: "translateX(0)" }}
                            >
                              <UpdateCategoryBar
                                newcategory={newcategory}
                                categorytogglePreview={categorytogglePreview}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="header-title">Sub Categories</h4>
                        <div className="table-responsive mt-3">
                          <table className="table table-hover mb-0 category-data-table">
                            <thead className="thead-light position-absolute w-92">
                              <tr>
                                <th>NAME</th>
                                <th>CATEGORY</th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              {subCategory?.subCategories?.data?.map((item) => (
                                <tr className="pt-3" key={item._id}>
                                  <td>{item?.subCategoryName}</td>
                                  <td>
                                    {
                                      category.categories.data?.find(
                                        (x) => x._id == item.categoryId
                                      )?.categoryName
                                    }
                                  </td>
                                  <td className="font-16">
                                    <i
                                      className="fas fa-edit"
                                      onClick={() => showSubCategory(item)}
                                    ></i>
                                    |
                                    <i
                                      className="fas fa-trash-alt text-danger"
                                      onClick={(e) =>
                                        SubcategoryDelete(e, item)
                                      }
                                    ></i>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {subCatPreviewShown && (
                            <div
                              className="Category_Bar_Portion"
                              style={{ transform: "translateX(0)" }}
                            >
                              <UpdateSubCategoryBar
                                newSubcategory={newSubcategory}
                                SubCategorytogglePreview={
                                  SubCategorytogglePreview
                                }
                              />
                            </div>
                          )}
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
      <div className="Category_Bar_Portion" id="AddCategoryBar">
        <AddCategoryBar />
      </div>
      <div className="Category_Bar_Portion" id="AddSubCategoryBar">
        <AddSubCategory />
      </div>
    </>
  );
};

export default Category;
