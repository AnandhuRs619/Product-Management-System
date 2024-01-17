import CategoryFilter from "../components/CategoryFilter";
import Navbar from "../components/NavBar";

import Card from "../components/cards";
import useProductfetch from "../hooks/useGetProductData";

const Home = () => {
  const { data, categoryData } = useProductfetch();

  return (
    <div className="relative">
      <Navbar />

      <div className="flex flex-col md:flex-row mt-4">
        <CategoryFilter categoryData={categoryData} />

        <div className="mt-4 md:mt-0">
          <Card data={data} />
          {/* <Product data={data}/> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
