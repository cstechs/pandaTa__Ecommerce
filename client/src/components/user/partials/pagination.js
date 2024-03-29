import React from "react";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <a
            onClick={() => paginate(number)}
            className="page-link"
            href="#"
            tabindex="-1"
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
