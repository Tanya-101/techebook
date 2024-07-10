import { useTitle } from "../../hooks/useTitle";
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Faq } from "./components/Faq";

export const HomePage = () => {

  useTitle("Access Latest Computer Science E-Books");

  return (

    <main className="dark:bg-slate-800">
        <div><Hero/></div>
        <div className="mt-8"><FeaturedProducts/></div>
        <div><Testimonials/></div>
        <div><Faq/></div>
    </main>
    
  )
}
