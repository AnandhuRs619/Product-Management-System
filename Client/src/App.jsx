
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from './pages/Home';
import CategoryPage from "./pages/CategoryPage";

function App() {
  
  return (
    <div>
    <Router>
      <Routes>
      <Route path ="/" element={<Home/>}  />
      <Route path ="/categorypage" element={<CategoryPage/>}  />
        
      </Routes>
    </Router>
      <h1 className="text-red-500" >hello</h1>
    </div>
  )
}

export default App
