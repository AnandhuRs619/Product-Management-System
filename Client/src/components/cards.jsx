/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./product.css";

const Cards = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const perPage = 3;
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setPageNumber(Math.ceil(data.length / perPage));
    setCurrentItems(data.slice(itemOffset, itemOffset + perPage));
  }, [itemOffset, perPage, data]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * perPage;
    setItemOffset(newOffset);
  };

  const renderCardsInRows = () => {
    const rows = [];
    for (let i = 0; i < currentItems.length; i += perPage) {
      const row = currentItems.slice(i, i + perPage).map((product) => (
        <div key={product.id} className=" ml-10 max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-4 mt-10">
          <div className="md:flex ">
            <div className="md:flex-shrink-0">
              <img className="h-48 mt-5 w-full object-cover md:w-48" src={`http://localhost:5000/images/${product.imagePath[0]}`} alt={product.title} />
            </div>
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{product.title}</h2>
                <p className="mt-2 text-gray-500">
                  {product.description.length > 15 ? `${product.description.substring(0, 15)}...` : product.description}
                </p>
                <div className="mt-2 uppercase tracking-wide text-md text-indigo-500 font-semibold">
                  {product.subcategory ? product.subcategory.name : 'null'}
                </div>
                <div className="mt-2 uppercase tracking-wide text-xs text-indigo-500 ">
                  {product.sub_subcategory ? product.sub_subcategory.name : 'null'}
                </div>
                <div className="mt-4">
                  <span className="text-gray-500">Price: ₹ {product.price}</span>
                </div>
                <div className="mt-4">
                  <span className="text-gray-500">Stocks: {product.total}</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-gray-500">Rating:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-yellow-500 ${star <= product.rating ? 'fill-current' : 'fill-none'} `}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button
                onClick={() => {}}
                className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                disabled
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ));
      rows.push(<div key={i} className="flex gap-1">{row}</div>);
    }
    return rows;
  };

  return (
    <div>
      {renderCardsInRows()}
      <div className="flex gap-x-4 justify-between mt-11 ml-10 mr-12">
        <p className="text-base text-gray-500">{perPage} of {data.length} items</p>
        <ReactPaginate
          pageCount={pageNumber}
          onPageChange={handlePageClick}
          breakLabel="..."
          nextLabel="next >"
          pageRangeDisplayed={3}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-cum"
          previousLinkClassName="page-cum"
          nextLinkClassName="page-cum"
          activeLinkClassName="active"
        />
      </div>
    </div>
  );
};

export default Cards;
