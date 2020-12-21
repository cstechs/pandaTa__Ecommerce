import React from "react";
import { Link } from "react-router-dom";

const NavbarDropdown = ({ _id, categoryName, subCategory }) => {
  return (
    <div className="dropdownlist">
      <div className="header">
        <h4>{categoryName}</h4>
        <p>Create & live your unique style</p>
        <span>{categoryName} items</span>
      </div>
      <ul>
        {subCategory.subCategories.data?.map((item) => {
          if (item.categoryId === _id) {
            return (
              <li key={item._id}>
                <Link to="/" className="dropdownLink">
                  {item.subCategoryName}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default NavbarDropdown;
