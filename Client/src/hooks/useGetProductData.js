import  { useState, useEffect } from "react";
// import instance from "../axios/axios";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const  useProductfetch = () => {
  const [data, setData] = useState([]);
  const [categoryData,setCategoryData] = useState([]);
//   const[product,setProduct]=useState(null)
//   const [error, setError] = useState(null);
//   const [search, setSearch] = useState("");
//   const [selectedSubcategories, setSelectedSubcategories] = useState([]);
//   const navigate=useNavigate()

  const fetchProductData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/home");
      setData(response.data.data);
      console.log(response.data.data)
    } catch (error) {
      console.error(error.message);
    }
  };
  const fateCategoryData = async()=>{
    try {
        axios
        .get("http://localhost:5000/get-categorydata")
        .then((res) => {
            setCategoryData(res?.data);
          console.log(res)
        })
        .catch((error) => {
          console.log(error);
        }); 
    } catch (error) {
        console.error(error.message); 
    }
  }

 

  useEffect(() => {
    fetchProductData();
    fateCategoryData();
  }, []);



//   const body = {
//     search,
//   };
//   const handleCheckboxChange = (isChecked, subCategoryName) => {
//     let updatedCategories;
//     if (isChecked) {
//       updatedCategories = [...selectedSubcategories, subCategoryName];
//     } else {
//       updatedCategories = selectedSubcategories.filter((category) => category !== subCategoryName);
//     }
//     setSelectedSubcategories(updatedCategories);
//     filterItems(updatedCategories); // Call filterItems with the updated categories
//   };

//   console.log(selectedSubcategories)
//   const filterItems = async(categories) => {
//     console.log(categories)
//     const body={
//         categories
//     }
//     try{
//         const response= await instance.post("/filter",body)
//         console.log(response.data)
//         setData(response.data.filterData
//             )
//     }catch(error){
//         console.log(error.message)
//     }
   
//   };




//   const handleSearch = (values) => {
//     setSearch(values);
//   };

//   const handleSearchSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await instance.post("/search", body);
//       setData(response.data.Product);
//     } catch (error) {
//       setError(error.message);
//     }
//   };
//   console.log(data);

  return {
    data,
    categoryData,
   
  };
};

export default useProductfetch;
