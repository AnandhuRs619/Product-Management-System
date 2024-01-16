/* eslint-disable react/prop-types */
// import { Card,  CardBody, CardFooter, ButtonGroup, Button, Divider, Text, Heading, Stack, Image } from '@chakra-ui/react'

import ReactPaginate from "react-paginate";
import "./product.css";
import { useEffect, useState } from "react";


// eslint-disable-next-line react/prop-types
const Cards = ({ data }) => {
  // const [product, setProduct] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const perPage = 3;
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
 





  
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setPageNumber(Math.ceil(data.length / perPage));
    // eslint-disable-next-line react/prop-types
    setCurrentItems(data.slice(itemOffset, itemOffset + perPage));
  }, [itemOffset, perPage, data]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * perPage;
    setItemOffset(newOffset);
  };
  return (
    <div>
      {currentItems.map((product) => (
        <div key={product.id} className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-4">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 mt-5 w-full object-cover md:w-48" src="https://www.91-cdn.com/hub/wp-content/uploads/2024/01/Samsung-Galaxy-S24-Plus.png" alt={product.title} />
            </div>
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{product.title}</h2>
                <p className="mt-2 text-gray-500">
                  {product.description.length > 15 ? `${product.description.substring(0, 15)}...` : product.description}
                </p>
                <div className="mt-2 uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.category}</div>
                <div className="mt-4">
                  <span className="text-gray-500">Price: ₹ {product.price}</span>
                </div>
                <div className="mt-4">
                  <span className="text-gray-500">Stocks: {product.total}</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-gray-500">Rating:</span>
                {/* Static rating area */}
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
      ))}
      <div className="flex gap-x-4 justify-between mt-10 mr-12">
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

 
export default Cards