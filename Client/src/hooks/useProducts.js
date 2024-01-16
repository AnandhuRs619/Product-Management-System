import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useProducts = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const selected = Array.from(files).slice(0, 3);
    setSelectedFiles((prevFiles) => [...prevFiles, ...selected]);
  };

  console.log(values);

  const handleSubmit = async (e, product) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("ram", values.ram);
    formData.append("price", values.price);
    formData.append("total", values.total);
    formData.append("subcategory", values.subcategory);
    formData.append("description", values.description);
    formData.append("category", values.category);

    selectedFiles.forEach((file, index) => {
      console.log(`File ${index}:`, file);
      formData.append(`file`, file);
    });
    console.log(formData);
    if (
      isNaN(values.ram) ||
      isNaN(values.price) ||
      isNaN(values.total) ||
      values.ram <= 0 ||
      values.price <= 0 ||
      values.total <= 0
    ) {
      setError("value must be numeric and greater than zero.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/product",
        formData
      );
      console.log(response.data);
      resetForm();
      navigate("/home");
      resetForm();
    } catch (err) {
      setError(err?.data?.message, "An error occurred.");
    }
  };
  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    error,
    handleFileChange,
    selectedFiles,
  };
};

export default useProducts;
