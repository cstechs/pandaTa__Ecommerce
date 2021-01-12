import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../../../redux/_actions/categoryAction";
import { getSubCategory } from "../../../redux/_actions/subCategoryAction";
import NavbarDropdown from "./navbardropdown";

const Navbar = () => {
  const category = useSelector((state) => state.category);
  const subCategory = useSelector((state) => state.subCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSubCategory());
  }, [dispatch]);

  return (
    <nav>
      <ul>
        {category.categories.data?.map(({ _id, categoryName }) => (
          <div className="dropdown" key={_id}>
            <li>
              <Link to="/product">{categoryName}</Link>
            </li>

            {subCategory.subCategories?.data?.find(
              (item) => item.categoryId === _id
            ) !== undefined && (
              <NavbarDropdown
                _id={_id}
                categoryName={categoryName}
                subCategory={subCategory}
              />
            )}
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
