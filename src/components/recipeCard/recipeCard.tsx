import {useAppDispatch} from "../../utils/hooks.ts";
import {openModal} from "../../store/reducer/recipeReducer.ts";

type Props = {
    id: number,
    name: string,
    image: string,
}

const RecipeCard = ({id, name, image}: Props) => {


    const dispatch = useAppDispatch()

    return (
        <>
            <div className="container" onClick={() => dispatch(openModal(id))}>
                <img className="object-cover w-full h-52" src={image} alt={name}/>
                <div className="flex flex-col flex-1 p-6">
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                        {name}
                    </h3>
                </div>
            </div>

        </>
    )
}

export default RecipeCard