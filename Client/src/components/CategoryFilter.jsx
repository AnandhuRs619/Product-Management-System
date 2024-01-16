import  { useState } from "react";
// import useFetch from "../../hooks/useFetch";



const CategoryFilter = ({categoryData}) => {
  const [expandedItems, setExpandedItems] = useState({});
//   const { data } = useFetch("/get-subcategory");

  const toggleSubcategories = (index) => {
    setExpandedItems((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  return (
    <div className="ml-10 mt-6">
      <div className="flex gap-x-8">
        <p className="font-semibold text-lg">Home</p>
        <ion-icon class="mt-2" name="chevron-forward-outline"></ion-icon>
      </div>

      <div className="mt-10">
        <p className="text-blue-500 font-medium text-xl">Categories</p>
        <p className="text-2xl mt-2">All Categories</p>

        <div className="mt-3 gap-x-32">
          {categoryData.map((item, index) => (
            <div className="flex gap-x-32 mt-3" key={index}>
              <ul className="text-lg font-medium">
                <li>{item.name}</li>
                {expandedItems[index] &&
                  item.subcategories.map((subItem, subIndex) => (
                    <div className="flex gap-x-4" key={subIndex}>
                      <input
                        type="checkbox"
                        id="myCheckbox"
                        name="myCheckbox"
                        value="checkboxValue"
                      ></input>
                      <li className="font-light">{subItem.name}</li>
                    </div>
                  ))}
              </ul>
              <div onClick={() => toggleSubcategories(index)}>
                {expandedItems[index] ? (
                  <ion-icon
                    className="text-xl"
                    name="chevron-down-outline"
                  ></ion-icon>
                ) : (
                  <ion-icon
                    className="text-xl"
                    name="chevron-forward-outline"
                  ></ion-icon>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
