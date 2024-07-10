import { useFilter } from "../../../context";

export const FilterBar = ({ setFilter }) => {

    const {state, dispatch} = useFilter();

    return (
        <section className="filter">
            <div className="fixed z-40 h-screen p-5 overflow-y-auto
        bg-white w-72 dark:bg-gray-800 transition-transhtmlForm left-0 top-0 transhtmlForm-none">
                <div className="flex justify-between">
                    <span><h4 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400
            ">Filters</h4></span>
                    <span><button onClick={() => setFilter(false)}><i className="text-2xl font-semibold text-gray-500 dark:bg-gray-800 dark:text-white
                            dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 rounded-lg bi bi-x"></i></button></span>
                </div>
                <div className="border-b pb-3 dark:border-white"></div>
                <div>
                    <ul className="text-slate-700 dark:text-slate-100">
                        <li className="mt-4 mb-5">
                            <p className="font-semibold my-1">Sort by</p>
                            <div className="flex items-center my-1">
                                <input
                                    onChange={() => dispatch({type: "SORT_BY", payload: {sortBy: "lowtohigh"}})}
                                    checked={state.sortBy === "lowtohigh"}
                                    id="price-sort-1"
                                    type="radio"
                                    value=""
                                    name="price-sort"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="price-sort-1"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price - Low to High</label>
                            </div>
                            <div className="flex items-center my-1">
                                <input
                                    onChange={() => dispatch({type: "SORT_BY", payload: {sortBy: "hightolow"}})}
                                    checked={state.sortBy === "hightolow"}
                                    id="price-sort-1"
                                    type="radio"
                                    value=""
                                    name="price-sort"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="price-sort-1"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price - High to Low</label>
                            </div>
                        </li>
                        <li className="mt-1 mb-5">
                            <span className="font-semibold">Rating</span>
                            <div className="flex items-center my-1">
                                <input
                                onChange={() => dispatch({type: "RATINGS", payload: {ratings: "4STARSABOVE"}})}
                                checked={state.ratings === "4STARSABOVE"} 
                                id="rating-sort-1" type="radio" value="" name="rating-sort" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="rating-sort-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">4 Stars & Above</label>
                            </div>
                            <div className="flex items-center my-1">
                                <input 
                                onChange={() => dispatch({type: "RATINGS", payload: {ratings: "3STARSABOVE"}})}
                                checked={state.ratings === "3STARSABOVE"} 
                                id="rating-sort-2" type="radio" value="" name="rating-sort" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="rating-sort-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">3 Stars & Above</label>
                            </div>
                            <div className="flex items-center my-1">
                                <input 
                                onChange={() => dispatch({type: "RATINGS", payload: {ratings: "2STARSABOVE"}})}
                                checked={state.ratings === "2STARSABOVE"} 
                                id="rating-sort-3" type="radio" value="" name="rating-sort" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="rating-sort-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">2 Stars & Above</label>
                            </div>
                            <div className="flex items-center my-1">
                                <input 
                                onChange={() => dispatch({type: "RATINGS", payload: {ratings: "1STARSABOVE"}})}
                                checked={state.ratings === "1STARSABOVE"} 
                                id="rating-sort-4" type="radio" value="" name="rating-sort" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="rating-sort-4" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">1 Stars & Above</label>
                            </div>
                        </li>
                        <li className="mt-1 mb-5">
                            <span className="font-semibold">Other Filters</span>
                            <div className="flex items-center my-1">
                                <input
                                    onChange={() => dispatch({type: "BEST_SELLER_ONLY", payload: {bestSellerOnly: !state.bestSellerOnly}})}
                                    id="best-seller" type="checkbox"
                                    checked={state.bestSellerOnly}
                                    value=""
                                    className="w-4 h-4 text-blue-600 bg0gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="best-seller" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Best Seller Only</label>
                            </div>
                            <div className="flex items-center my-1">
                                <input 
                                onChange={() => dispatch({type: "INSTOCK_ONLY", payload: {inStockOnly : !state.inStockOnly}})}
                                checked={state.inStockOnly}
                                id="only-instock" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="only-instock" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">INSTOCK Only</label>
                            </div>
                        </li>
                        <li className="mt-1 mb-5 px-1">
                            <button 
                            onClick={() => dispatch({type: "CLEAR_FILTER"})}
                            type="button" className="text-gray-900 bg-white border border-gray-300 
                            hover:bg-gray-100
                            font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white
                            dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">Clear Filter</button>
                        </li>
                    </ul>

                </div>

            </div>
        </section>
    )
}
