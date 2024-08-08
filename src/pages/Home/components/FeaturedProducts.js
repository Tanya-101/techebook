import { useState, useEffect } from "react";
import { ProductCard } from "../../../components/";
import { getFeaturedList } from "../../../services";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
        setErrorMessage("ok");
        setProducts(data);
      } catch (error) {
        setErrorMessage(error);
      }
    }
    fetchProducts();
  }, [])
  return (
    <>
    {
      (errorMessage !== "ok") ? (
      <section>
        <div className="text-center mt-10 dark:text-white text-4xl"><span>Sorry, Server Error - {errorMessage}!</span></div>
      </section>
    ) : (
      <section className="mt-8">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
        <div className="flex flex-wrap justify-center lg:flex-row">
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))

        }

        </div>
      </section>
    )
    }
    </>
  )
}
