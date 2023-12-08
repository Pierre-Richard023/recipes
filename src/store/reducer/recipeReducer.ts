import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import {RecipeInfos} from "../../interface/recipe-infos.ts";
import {getRecipeById} from "../../services/recipeServices.ts";

export const getRecipeInformations = createAsyncThunk('recipe/getRecipeInformations', (id: number) => {
    return getRecipeById(id)
})


interface RecipeState {
    recipe: RecipeInfos,
    choiceId: number,
    loading: boolean,
    isOpen: boolean,
}

const initialState: RecipeState = {
    recipe: {
        id: 0,
        title: "",
        image: "",
        imageType: "",
        servings: 0,
        readyInMinutes: 0,
        license: "",
        sourceName: "",
        sourceUrl: "",
        spoonacularSourceUrl: "",
        healthScore: 0,
        spoonacularScore: 0,
        pricePerServing: 0,
        analyzedInstructions: [],
        cheap: false,
        creditsText: "",
        cuisines: [],
        dairyFree: false,
        diets: [],
        gaps: "",
        glutenFree: false,
        instructions: "",
        ketogenic: false,
        lowFodmap: false,
        occasions: [],
        sustainable: false,
        vegan: false,
        vegetarian: false,
        veryHealthy: false,
        veryPopular: false,
        whole30: false,
        weightWatcherSmartPoints: 0,
        dishTypes: [],
        extendedIngredients: [],
        summary: "",
        winePairing: {
            pairedWines: [],
            pairingText: "",
            productMatches: []
        }
    },
    choiceId: 0,
    loading: false,
    isOpen: false,
}

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<number>) => {
            state.choiceId = action.payload
            state.isOpen = true
        },

        closeModal: (state) => {
            state.isOpen = false
        },
    },
    extraReducers: builder => {
        builder.addCase(getRecipeInformations.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getRecipeInformations.fulfilled, (state, action:PayloadAction<RecipeInfos>) => {
            state.loading = false
            state.recipe = action.payload
        })
    }
})


export const {openModal, closeModal} = recipeSlice.actions

export default recipeSlice.reducer