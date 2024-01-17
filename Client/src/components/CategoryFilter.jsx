/* eslint-disable react/prop-types */


import { useState } from "react";

const CategoryFilter = ({ categoryData }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryChange = (e) => {
    const categoryValue = e.target.value;
    setSelectedCategory(categoryValue);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryChange = (e) => {
    const subcategoryValue = e.target.value;
    setSelectedSubcategory(subcategoryValue);
  };

  return (
    <div className="ml-10 p-10 mt-6 shadow-md">
      <div className="flex gap-x-8">
        <p className="font-semibold text-lg">Home</p>
        <ion-icon class="mt-2" name="chevron-forward-outline"></ion-icon>
      </div>

      <div className="mt-10">
        <p className="text-blue-500 font-medium text-xl">Categories</p>
        <p className="text-2xl mt-2">All Categories</p>

        <div className="mt-3 gap-x-32 flex flex-col">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="text-lg font-medium"
          >
            <option value="">Select a category</option>
            {categoryData.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>

          {selectedCategory && (
            <select
              value={selectedSubcategory}
              onChange={handleSubcategoryChange}
              className="text-lg font-medium mt-3"
            >
              <option value="">Select a subcategory</option>
              {categoryData.find((item) => item._id === selectedCategory)
                ?.subcategories.map((subItem) => (
                  <option key={subItem._id} value={subItem._id}>
                    {subItem.name}
                  </option>
                ))}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
