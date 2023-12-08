import {useAppDispatch, useAppSelector} from "../../utils/hooks.ts";
import {FilterElements, StyleElements} from "../../interface/filter-search.ts";
import {useEffect, useState} from "react";
import {updateFiler} from "../../store/reducer/searchReducer.ts";

interface props {
    infos: FilterElements
    unwanted: boolean
    group: string
    styleGroup: StyleElements
}

const FilterChoice = ({infos, unwanted, group, styleGroup}: props) => {

    const dispatch = useAppDispatch()
    const filterGroup = useAppSelector(state => state.search.filterGroup)
    const [isSelected, setIsSelected] = useState<boolean>(false)


    useEffect(() => {
        let res = filterGroup.find(obj => obj.name === group)
        if (res)
            if (res.data.includes(infos.name))
                setIsSelected(true)
            else
                setIsSelected(false)

    }, [filterGroup]);

    const handleClick = () => {
        dispatch(updateFiler({group: group, data: infos.name}))
    }

    return (
        <>

            <div className="flex w-full justify-center">
                <div className="relative w-44 h-44 rounded-full flex items-center "
                     role="button"
                     onClick={handleClick}
                >
                    {
                        (group === "CUISINE") &&
                        <img className="w-44 h-44 rounded-full" src={infos.image} alt={infos.name}/>
                    }
                    <div
                        className={`absolute top-0 left-0 w-full h-full rounded-full ffff ${styleGroup.class} ${isSelected ? styleGroup.select : styleGroup.notSelect} `}>
                        <div className="relative w-full h-full flex flex-col items-center justify-center ">
                            {
                                (group !== "CUISINE") &&
                                <img src={infos.image} className="w-12 h-12" alt={infos.name}/>
                            }

                            <span className={`text-sm font-bold uppercase `}>
                        {infos.name}
                        </span>
                        </div>
                        {
                            unwanted &&
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div
                                    className={`w-40 h-2 transform rotate-45  ${isSelected ? 'bg-green-900' : 'bg-gray-500/50'} `}></div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterChoice