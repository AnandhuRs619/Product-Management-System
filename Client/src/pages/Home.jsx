import Navbar from "../components/NavBar";
import Card from "../components/cards";

 const Home = () => {
  return (
    <div className={'relative'} >
        
        <Navbar/>
        <div className="flex gap-x-8 mt-4">
           <Card/> 
        </div>
    </div>
  )
}

export default Home;