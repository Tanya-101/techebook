
export const TestimonialCard = (props) => {
    let review = props.review;
  return (
    <div className="flex flex-col relative">

        <div className="text-center">
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
