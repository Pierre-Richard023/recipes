import {configureStore} from '@reduxjs/toolkit'
import recipeReducer from "./reducer/recipeReducer.ts"
import searchReducer from "./reducer/searchReducer.ts";

export const store = configureStore({
    reducer: {
        recipe: recipeReducer,
        search: searchReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch