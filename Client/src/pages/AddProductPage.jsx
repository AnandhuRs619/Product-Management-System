import { useState } from 'react';
import NavBar from '../components/NavBar';
import { FaImage } from 'react-icons/fa';
import axios from 'axios';
import useProductfetch from "../hooks/useGetProductData";

const AddProductPage = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [productImages, setProductImages] = useState([]); // Change to an array for multiple images
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [ram, setRam] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const { categoryData } = useProductfetch();
  
    const handleAddProduct = async (e) => {
      e.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('title', productName);
        formData.append('ram', ram);
        formData.append('price', price);
        formData.append('subcategory', subcategory);
        formData.append('category', category);
        formData.append('description', description);
  
        // Append all images to the formData
        productImages.forEach((image, index) => {
          formData.append(`images[${index}]`, image, image.name);
        });
  
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };
  
        await axios.post('http://localhost:5000/product', formData, config);
  
        console.log('Product added successfully');
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };
  
    const handleImageChange = (e) => {
      const files = e.target.files;
      setProductImages([...productImages, ...files]);
    };

  return (<>
  
  <NavBar />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8 mt-5">
        <h1 className="text-2xl font-semibold mb-6">Add Product</h1>
        <form onSubmit={handleAddProduct} encType="multipart/form-data" >
          <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-gray-600">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
              <label htmlFor="productImages" className="block text-sm font-medium text-gray-600">
                Product Images
              </label>
              <div className="relative mt-1 p-2 border border-gray-300 rounded-md w-full flex items-center">
                <label htmlFor="imageInput" className="cursor-pointer">
                  <FaImage className="text-blue-500 mr-2" />
                  Choose Images
                </label>
                <input
                  type="file"
                  id="imageInput"
                  name="productImages"
                  onChange={handleImageChange}
                  className="hidden"
                  multiple
                />
              </div>
            </div>
          {/* Display added images in a row */}
          <div className="mt-4 flex flex-wrap">
            {productImages.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Product Image ${index + 1}`}
                className="w-20 h-20 object-cover mr-2 mb-2 rounded-md"
              />
            ))}
          </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-600">
            Stock
          </label>
          <input
            type="text"
            id="stock"
            name="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="ram" className="block text-sm font-medium text-gray-600">
            RAM
          </label>
          <input
            type="text"
            id="ram"
            name="ram"
            value={ram}
            onChange={(e) => setRam(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-600">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">Select Category</option>
            {categoryData.map((items, i) => (
                    <option key={i} value={items?._id}>
                      {" "}
                      {items?.name}
                    </option>
                  ))}
          </select>
        </div>
        <div>
          <label htmlFor="subcategory" className="block text-sm font-medium text-gray-600">
            Subcategory
          </label>
          <select
            id="subcategory"
            name="subcategory"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">Select Subcategory</option>
            {categoryData.map((items, i) => (
                    <option key={i} value={items?._id}>
                      {" "}
                      {items?.name}
                    </option>
                  ))}
          </select>
        </div>
      </div>
      <button
        type='submit'
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>
    </div>
    </>
  );
};

export default AddProductPage;
