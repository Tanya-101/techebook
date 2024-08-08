import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { ProductCard } from "../../components/";
import { FilterBar } from "./components/FilterBar";
import { useFilter } from "../../context";
import { getProductList } from "../../services";

export const ProductsList = () => {

  const [errorMessage, setErrorMessage] = useState("");
  const { products, initialProductList } = useFilter();
  const [filter, setFilter] = useState(false);
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");


  useTitle("Explore eBooks Collection");


  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProductList(searchTerm);
        initialProductList(data);
        setErrorMessage("ok");
      } catch (error) {
        setErrorMessage(error)
      }
    }
    fetchProducts();
  }, [searchTerm]); //eslint-disable-line

  return (
    <main className="dark:bg-slate-800">
      <section>
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks({products.length})</span>
          <button onClick={() => setFilter(!filter)} type="button" className="">
            <i className="text-gray-500 dark:border-gray-600 dark:hover:text-gray-600 dark:hover:border-gray-600  text-3xl bg- bi bi-filter-square-fill"></i>
          </button>
        </div>
        {

          (errorMessage !== "ok") ? (
            <div className="dark:text-white text-4xl"><span>Sorry, Server Error - {errorMessage}!</span></div>
          ) :

            (<div className="flex flex-wrap justify-center lg:flex-row">
              {
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              }
            </div>
            )
        }
      </section>
      {filter && <FilterBar setFilter={setFilter} />}
    </main>
  )
}
