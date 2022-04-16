import "./Products.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/Card/ProductCard";
import SideBar from "../../components/SideBar/SideBar";
import { useFilter } from "../../context/filter-context";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { filterState, filterDispatch } = useFilter();

  useEffect(() => {
    (async () => {
      const data = await axios
        .get("/api/products")
        .then((res) => res.data.products);
      setProductsData(data);
      setFilteredData(data);
    })();
  }, []);

  useEffect(() => {
    //filterByCategory
    let categoryData = productsData;
    function filterCategory(category) {
      if (filterState.filterByCategory.length === 0) return true;
      let res = false;
      for (let i = 0; i < filterState.filterByCategory.length; i++) {
        res |= category === filterState.filterByCategory[i];
      }
      return res;
    }
    categoryData = categoryData.filter((item) => filterCategory(item.category));

    //filterByBrand
    let xdata = categoryData;
    function filterBrand(brand) {
      if (filterState.filterByBrand.length === 0) return true;
      let res = false;
      for (let i = 0; i < filterState.filterByBrand.length; i++) {
        res |= brand === filterState.filterByBrand[i];
      }
      return res;
    }
    xdata = xdata.filter((item) => filterBrand(item.brand));

    //filterByRange
    xdata = xdata.filter((item) => item.price <= filterState.filterByRange);

    //sortByPrice
    if (filterState.sortByPrice === "lowToHigh") {
      xdata.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (filterState.sortByPrice === "highToLow") {
      xdata.sort((a, b) => {
        return b.price - a.price;
      });
    }
    //filterByRating
    if (filterState.filterByRating === "4starAndAbove") {
      xdata = xdata.filter((item) => item.rating >= 4);
    } else if (filterState.filterByRating === "3starAndAbove") {
      xdata = xdata.filter((item) => item.rating >= 3 && item.rating < 4);
    } else if (filterState.filterByRating === "below3star") {
      xdata = xdata.filter((item) => item.rating < 3);
    }

    setFilteredData(xdata);
  }, [filterState]);

  return (
    <div className="products-page">
      <SideBar />
      <main className="products-main">
        {filteredData.length === 0 ? (
          <div className="no-match-found-msg">No Matches Found</div>
        ) : (
          <>
            {filteredData.map((product) => (
              <ProductCard key={product.id} cardDetails={product} />
            ))}
          </>
        )}
      </main>
    </div>
  );
};

export default Products;
