import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
const CategoryPage = () => {
  const [categoryName, setCategoryName] = useState("");
  const [getCata, setGetCata] = useState([]);
  const [subForm, setSubForm] = useState({
    "name": "",
    "parentCategoryId": "",
  });

  console.log(getCata);

  const addCategoryHandler = async (e) => {
    e.preventDefault();
    console.log(categoryName);
    try {
      const response = await axios.post("http://localhost:5000/addCategory", {
        category: categoryName,
      });
      console.log(response);
      setCategoryName("");
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
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
        console.log(error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-200 p-8 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-3xl font-semibold mb-4">Add New Category</h1>

          <div className="mb-4">
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
                />
              </div>
              <button
                type="submit"
                className="p-2 mt-5 rounded text-white shadow bg-red-300 px-6"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="mb-4">
            <form action="" onSubmit={SubCataSubmitHandler}>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Category Name
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
                />
              </div>
              <button
                type="submit"
                className="p-2 mt-5 rounded text-white shadow bg-red-300 px-6"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
