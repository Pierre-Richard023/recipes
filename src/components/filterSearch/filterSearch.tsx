import {useState} from "react";
import {useNavigate} from "react-router-dom"
import {FilterData} from "../../utils/filterData.ts";
import Carrousel from "../carrousel/carrousel.tsx";
import {useAppDispatch} from "../../utils/hooks.ts";
import {setFilterSearch} from "../../store/reducer/searchReducer.ts";


const FilterSearch = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [step, setStep] = useState<number>(0)


    const handleClick = () => {
        dispatch(setFilterSearch())
        navigate("/results")
    }


    return (
        <>
            <section className="w-full">

                <h3 className="text-center m-3">
                    PERSONALIZE YOUR EXPERIENCE
                </h3>

                <div className="mx-4 ">
                    <div className="m-4">

                        {
                            (step === 0) && <Carrousel groupInformations={FilterData[step]}/>
                        }
                        {
                            (step === 1) && <Carrousel groupInformations={FilterData[step]}/>
                        }
                        {
                            (step === 2) && <Carrousel groupInformations={FilterData[step]}/>
                        }
                        {
                            (step === 3) && <Carrousel groupInformations={FilterData[step]}/>
                        }
                        {
                            (step === 4) && <Carrousel groupInformations={FilterData[step]}/>
                        }
                    </div>
                </div>


                <div className="w-full flex justify-center gap-4">
                    <div className="flex">
                        {
                            (step > 0) &&
                            <button type="button"
                                    className="mx-2 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                    onClick={() => setStep(step => step - 1)}
                            >
                                Retour
                            </button>
                        }

                        {
                            (step < 4) &&
                            <button type="button"
                                    className="mx-2 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                    onClick={() => setStep(step => step + 1)}
                            >
                                Suivant
                            </button>
                        }

                        {
                            (step === 4) &&
                            <button type="button"
                                    className="mx-2 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                    onClick={handleClick}
                            >
                                Filtre
                            </button>
                        }

                    </div>
                </div>


            </section>

        </>
    )
}


export default FilterSearch