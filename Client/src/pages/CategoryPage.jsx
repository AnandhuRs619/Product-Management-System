import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import useShowToast from "../hooks/useShowToast";
const CategoryPage = () => {
  const [categoryName, setCategoryName] = useState("");
  const [getCata, setGetCata] = useState([]);
  const showToast = useShowToast();
  const [subForm, setSubForm] = useState({
    "name": "",
    "parentCategoryId": "",
  });



  const addCategoryHandler = async (e) => {
    e.preventDefault();
    console.log(categoryName);
    try {
      const response = await axios.post("http://localhost:5000/addCategory", {
        category: categoryName,
      });
      showToast("Success", "category added successfully", "success");
      console.log(response);
      setCategoryName("");
      
        window.location.reload();
      
    } catch (error) {
        showToast("Error",error.message,"error")
    }
  };

  const SubCataHandler = (e) => {
    setSubForm({
      ...subForm,
      [e.target.name]: e.target.value,
    });
  };

  const SubCataSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(subForm)
    try {
      const reponse = await axios.post(
        "http://localhost:5000/addSubCategory",
        subForm
      );
      console.log(reponse)
      showToast("Success", "category and subcategory added successfully", "success");
      window.location.reload();
      
    } catch (error) {
        showToast("Error",error.message,"error")
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-categorydata")
      .then((res) => {
        setGetCata(res?.data);
        
        console.log(res)
      })
      .catch((error) => {
        showToast("Error",error.message,"error")
      });
  }, [showToast]);

  return (
    <>
     <style>
        {`
          body, html {
            overflow-y: hidden;
          }
        `}
      </style>
      <NavBar />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-md shadow-lg overflow-y-hidden w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-4xl font-semibold mb-6">Add New Category</h1>

          <div className="mb-6 overflow-hidden">
            <form action="" onSubmit={addCategoryHandler}>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Category Name
                </label>
                <input
                  type="text"
                  value={categoryName}
                  className="mt-1 p-2 w-full border rounded-md"
                  onChange={(e) => setCategoryName(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Add new
              </button>
            </form>
          </div>

          <div className="mb-6 overflow-hidden">
            <form action="" onSubmit={SubCataSubmitHandler}>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Listed Category Name
                </label>
                <select
                  onChange={SubCataHandler}
                  name="parentCategoryId"
                  id=""
                  className="mt-1 p-2 w-full border rounded-md"
                >
                  <option value="">Select a category</option>
                  {getCata.map((items, i) => (
                    <option key={i} value={items?._id}>
                      {" "}
                      {items?.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Sub-Category Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={SubCataHandler}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Add sub
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
