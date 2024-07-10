import HeroBanner from "../../../assets/images/hero.avif";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center dark:text-slate-100">
        <div className="my-5">
            <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>
            <p className="text-2xl my-7 px-1 dark:text-slate-300">TechEbook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.
            </p>
            <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore eBooks</Link>
        </div>

        <div className="my-5 lg:max-w-xl">
            <img src={HeroBanner} alt="Hero banner" className="rounded-lg max-h-full"/>
        </div>

    </section>
  )
}
