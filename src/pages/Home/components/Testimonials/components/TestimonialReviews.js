import React, { useState } from 'react';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialReviews = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler(){
    setIndex((index - 1 + reviews.length) % reviews.length);
  }

  function rightShiftHandler(){
    setIndex((index+1)%reviews.length);
  }

  function surpriseHandler(){
    let randomIndex = Math.floor(Math.random()*reviews.length);
    setIndex(randomIndex);
  }
    
  return (
    <div className='mx-auto max-w-xl dark:bg-gray-800 dark:text-gray-700 flex flex-col justify-center items-center p-10 transition-all duration-700 hover:shadow-xl rounded-md border border-slate-200 dark:border-slate-50'>
      <TestimonialCard review = {reviews[index]}/>
      <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto '>
        <button onClick={leftShiftHandler}>
        <i className="bi bi-arrow-left-circle-fill hover:text-violet-700"></i>
        </button>
        <button onClick={rightShiftHandler}>
        <i className="bi bi-arrow-right-circle-fill hover:text-violet-700"></i>
        </button>
      </div>
      <div>
            <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-5">
                Surprise me
            </button>
      </div>

    </div>
  )
}
