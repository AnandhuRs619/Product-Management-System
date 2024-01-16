
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from './pages/Home';
import CategoryPage from "./pages/CategoryPage";
import AddProductPage from "./pages/AddProductPage";

function App() {
  
  return (
    <div>
    <Router>
      <Routes>
      <Route path ="/" element={<Home/>}  />
      <Route path ="/categorypage" element={<CategoryPage/>}  />
      <Route path ="/addproductpage" element={<AddProductPage/>}  />
        
      </Routes>
    </Router>
      
    </div>
  )
}

export default App
