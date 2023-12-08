import {useAppDispatch, useAppSelector} from "../../utils/hooks.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getRecipeByFilter, getRecipes} from "../../store/reducer/searchReducer.ts";
import Pagination from "../../components/pagination/pagination.tsx";
import RecipeCard from "../../components/recipeCard/recipeCard.tsx";
import RecipeModal from "../../components/recipeModal/recipeModal.tsx";
import Loading from "../../components/loading/loading.tsx";


const Results = () => {

    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const searchType = useAppSelector((state) => state.search.searchType)
    const recipes = useAppSelector((state) => state.search.recipes)
    const resultsPage = useAppSelector((state) => state.search.resultsPage)
    const query = useAppSelector((state) => state.search.query)
    const filter = useAppSelector((state) => state.search.filter)
    const currentPage = useAppSelector((state) => state.search.currentPage)
    const maxPages = useAppSelector((state) => state.search.maxPages)
    const loading = useAppSelector((state) => state.search.loading)


    useEffect(() => {
        if (searchType === "none")
            navigate("/")
    }, [])


    useEffect(() => {

        if (!recipes.find((item) => item.id === currentPage)) {
            if (searchType === "input")
                dispatch(getRecipes({search: query, page: currentPage}))
            else if (searchType === "filter")
                dispatch(getRecipeByFilter({search: filter, page: currentPage}))
        }

    }, [currentPage]);


    return (
        <>
            <section className="w-full sm:p-16">
                <RecipeModal/>
                <div className="mb-4">
                    <h2 className="text-xl m-4 p-2 border-b border-black dark:border-white"> {resultsPage.results.length} suggested
                        recipes</h2>


                </div>

                {
                    loading && <Loading/>
                }

                {
                    !loading &&
                    <>
                        {
                            resultsPage.results.length === 0 &&
                            <>
                                <div className="flex items-center justify-between p-6 border-l-8 sm:py-8 dark:border-violet-400 dark:bg-gray-900 dark:text-gray-100">
                                    <span>No results were found for your search.</span>
                                </div>
                            </>
                        }

                        {
                            resultsPage.results.length > 0 &&

                            <>

                                {(maxPages > 1) &&
                                    <Pagination/>
                                }

                                {(resultsPage.results.length > 0) &&
                                    <div className="m-4">
                                        <div
                                            className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 ">
                                            {
                                                resultsPage.results.map((val, i) =>
                                                    <RecipeCard key={i} name={val.title} image={val.image} id={val.id}/>
                                                )
                                            }
                                        </div>
                                    </div>
                                }

                                {(maxPages > 1) &&
                                    <Pagination/>
                                }
                            </>
                        }

                    </>
                }


            </section>
        </>
    )
}

export default Results