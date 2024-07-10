
export const TestimonialCard = (props) => {
    let review = props.review;
  return (
    <div className="flex flex-col relative">

        <div className="absolute -top-[7rem] z-[10] mx-auto">
            <img className="aspect-square rounded-full w-[160px] h-[160px] z-[25]"
             src={review.image} alt="user" />

            <div className='w-[160px] h-[160px] bg-violet-500 rounded-full absolute top-[-10px] z-[-2] left-[10px]'></div>

        </div>

        <div className="text-center mt-7">
            <p className="font-bold text-2xl capitalize tracking-wider dark:text-gray-200 mb-3">{review.name}</p>
            <p className="text-violet-300 uppercase text-sm">{review.job}</p>
        </div>

        <div className="text-violet-400 mx-auto mt-5">
            <i className=" text-2xl bi bi-blockquote-left"></i>
        </div>

        <div className="text-center mt-4 text-slate-500 dark:text-gray-300">
            <p>{review.text}</p>
        </div>

        <div className="text-violet-400 mx-auto mt-5">
            <i className="text-2xl bi bi-blockquote-right"></i>
        </div>

    </div>
  )
}
