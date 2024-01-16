import  { useEffect, useState } from "react";
import { HeartOutline } from 'react-ionicons';
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

import "./product.css";


const Product = ({ data }) => {
 
  const [product, setProduct] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const perPage = 4;
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
 


  const navigate = useNavigate();
  console.log(data);



  useEffect(() => {
    setPageNumber(Math.ceil(data.length / perPage));
    setCurrentItems(data.slice(itemOffset, itemOffset + perPage));
  }, [itemOffset, perPage, data]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * perPage;
    setItemOffset(newOffset);
  };

  return (
    <>

      <div className="">
        <div className="flex-col items-end">
          

        <div className="flex gap-x-10 flex-wrap mt-12 mr-12">
  {currentItems.map((item, index) => (
    <div className="border border-black w-[300px] h-[230px] rounded-xl overflow-hidden" key={index}>
      <div className="flex justify-center mt-6">
        <img
          src="https://www.91-cdn.com/hub/wp-content/uploads/2024/01/Samsung-Galaxy-S24-Plus.png"
        //   {`http://localhost:4000/images/${item.imagePath[0]}`}
        //   onClick={() => navigate(`/single/${item._id}`)}
          className="w-[150px] h-[120px] object-cover cursor-pointer"
          alt="laptop"
        />
       <HeartOutline
  className="mt-6 text-xl cursor-pointer bg-blue-300 rounded-full w-[40px] h-[40px] flex justify-center items-center hover:bg-red-400"
  color={'#fff'} // Set the desired color
  title={'heart-outline'}
//   onClick={(e) => handleWhishlist(e, item._id)}
/>
      </div>

      <div className="p-2 ">
        <p className="font-semibold text-blue-600">{item.title}</p>
        <div className="flex justify-between mt-2">
          <p className="font-medium">{"$" + item.price}</p>
        </div>
        <div className="mt-2">
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
        </div>
      </div>
    </div>
  ))}
</div>
          <div className="flex gap-x-4 justify-between mt-10 mr-12">
            <p className="text-base text-gray-500">10 of 456 items</p>
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

            <p>
              Show <span className="text-yellow-600">10 rows</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
