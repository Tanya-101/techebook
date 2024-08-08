import { TestimonialReviews } from "./components/TestimonialReviews";
import reviews from './data';

export const Testimonials = () => {
  return (
    <div className="m-24">
        <div className="text-center">
            <h5 className="text-2xl font-bold text-gray-900 dark:text-gray-300">Student About TechEbook</h5>
            <div className="bg-violet-400 h-[4px] w-1/6 mt-1 mx-auto mb-12"></div>
            <TestimonialReviews reviews={reviews}/>
        </div>
    </div>
  )
}
