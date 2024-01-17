const productModel = require("../Models/productModel");
const { Category} = require("../Models/categoryModel");

const addProduct = async (req, res) => {
  try {
    const { title, ram, price, total, subcategory, category, description } =
      req.body;
      console.log(req.body)

    // Validate required fields
    if (!title || !ram || !price || !subcategory || !category || !description) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log(title, ram, price);
    const images = req.files;
    console.log(images);
    const imagePaths = [];

    for (const image of images) {
      imagePaths.push(image.filename);
    }

    const Product = new productModel({
      title,
      ram,
      price,
      total,
      subcategory,
      category,
      description,
      imagePath: imagePaths,
    });

    await Product.save();
    console.log("New product is added:", Product);
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProduct = async (req, res) => {
    try {
      const productData = await productModel
        .find()
        .populate('subcategory')
        .populate('category');
  
      console.log(productData);
  
      res.json({ status: 200, data: productData });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
const getCategory = async (req, res) => {
  try {
    const categories = await Category.find().populate("subcategories");
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const addCategory = async (req, res) => {
  try {
    const { category } = req.body;
    console.log(category);
    if (!category) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const existingCategory = await Category.findOne({ name: category });
    if (existingCategory) {
      return res.status(400).json({ error: "Category already exists" });
    }
    const categoryData = new Category({
      name: category,
      parent: true,
    });
    await categoryData.save();
    res.json({
      status: 200,
      _id: categoryData._id,
      message: "Category added successfully",
    });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addSubcategoriesWithNestedCategories = async (req, res) => {
  try {
    const { name, parentCategoryId } = req.body;
    console.log(req.body);
    const category = new Category({ name });

    console.log(category);
    if (parentCategoryId) {
      const parentCategory = await Category.findById(parentCategoryId);
      console.log(parentCategory);
      if (!parentCategory) {
        return res.status(404).json({ message: "Parent category not found" });
      }
      parentCategory.subcategories.push(category);
      await parentCategory.save();
      await category.save();
    } else {
      await category.save();
      console.log("somting went wrong");
    }

    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



module.exports = {
  addProduct,
  getProduct,
  addCategory,
  getCategory,
  addSubcategoriesWithNestedCategories,
};
