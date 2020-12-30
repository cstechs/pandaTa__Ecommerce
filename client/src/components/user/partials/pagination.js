import React from "react";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];
  console.log("properpage", totalProducts);
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul class="pagination">
      {pageNumbers.map((number) => (
        <li key={number} class="page-item">
          <a
            onClick={() => paginate(number)}
            class="page-link"
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
