import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../../../redux/_actions/categoryAction';
import { getSubCategory } from '../../../redux/_actions/subCategoryAction';

const Navbar = () => {

  const category = useSelector(state => state.category);
  const subCategory = useSelector(state => state.subCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSubCategory());
  }, []);

  return (
    <nav>
      <ul>
        {category.categories.data?.map(({ _id, categoryName }) => (
          <div className="dropdown" key={_id} >
            <li><Link to="/">{categoryName}</Link></li>
            <div className="dropdownlist">
              <div className="header">
                <h4>{categoryName}</h4>
                <p>Create & live your unique style</p>
                <span>25478 items</span>
              </div>
              <ul>
              {subCategory.subCategories.data?.map((item, i) => {
                if (item.categoryId == _id) {
                  return <li key={item._id} ><Link to="/" className="dropdownLink">{item.subCategoryName}</Link></li>
                }
              })}
              </ul>
            </div>
          </div>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
