import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import {SearchRecipe, SearchRecipePage} from "../../interface/search-recipe.ts";
import {getAllRecipeByFilter, getRecipesBySearch} from "../../services/recipeServices.ts";
import {FilterGroup, GroupValue} from "../../interface/filter-group.ts";


interface DataSearch {
    search: string,
    page: number

}

export const getRecipes = createAsyncThunk('search/getRecipe', (data: DataSearch) => {
    return getRecipesBySearch(data.search, data.page)
})

export const getRecipeByFilter = createAsyncThunk('search/getRecipeByFilter', (data: DataSearch) => {
    return getAllRecipeByFilter(data.search, data.page)
})


interface SearchState {
    searchType: "input" | "filter" | "none",
    query: string,
    filter: string,
    recipes: SearchRecipePage[],
    results: SearchRecipePage[],
    filterGroup: FilterGroup[],
    resultsPage: SearchRecipe,
    maxPages: number,
    currentPage: number,
    pagesView: Array<number>,
    loading: boolean,
    hasData: boolean,
}

const initialState: SearchState = {
    searchType: "none",
    query: "",
    filter: "",
    recipes: [],
    results: [],
    filterGroup: [],
    resultsPage: {
        results: [],
        offset: 0,
        number: 0,
        totalResults: 0,
    },
    maxPages: 1,
    currentPage: 1,
    pagesView: [1,],
    loading: false,
    hasData: false
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setInputSearch: (state, action: PayloadAction<string>) => {
            state.resultsPage = {
                results: [],
                offset: 0,
                number: 0,
                totalResults: 0,
            }
            state.results = []
            state.currentPage = 1
            state.maxPages = 1
            state.pagesView = [1,]

            state.query = action.payload
            state.searchType = "input"
        },
        setFilterSearch: (state) => {
            state.resultsPage = {
                results: [],
                offset: 0,
                number: 0,
                totalResults: 0,
            }
            state.results = []
            state.currentPage = 1
            state.maxPages = 1
            state.pagesView = [1,]

            state.searchType = "filter"
            let res: string = ""
            state.filterGroup.forEach(filter => {
                res += "&" + filter.name.toLowerCase() + "=" + filter.data.join(',')
            })
            state.filter = res
        },
        updateFiler: (state, action: PayloadAction<GroupValue>) => {
            const groupId = state.filterGroup.findIndex(obj => obj.name === action.payload.group)
            if (groupId !== -1)
                if (state.filterGroup[groupId].data.includes(action.payload.data))
                    state.filterGroup[groupId].data.splice(state.filterGroup[groupId].data.indexOf(action.payload.data), 1)
                else
                    state.filterGroup[groupId].data.push(action.payload.data)
            else {
                const group = {name: action.payload.group, data: [action.payload.data]}
                state.filterGroup.push(group)
            }
        },
        changePage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
            if (state.pagesView.includes(action.payload)) {
                const res = state.results.find((item) => item.id === action.payload)
                if (res)
                    state.resultsPage = res.results

            } else
                state.pagesView = [...state.pagesView, action.payload]
        },
    },
    extraReducers: builder => {
        builder.addCase(getRecipes.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getRecipes.fulfilled, (state, action: PayloadAction<SearchRecipe>) => {
            state.loading = false
            state.results.push({id: state.currentPage, results: action.payload})
            state.resultsPage = action.payload

            if (!state.hasData) {
                let nbRst = action.payload.totalResults
                if (nbRst > 24)
                    if (nbRst % 24 !== 0)
                        state.maxPages = parseInt(((nbRst / 24) + 1).toFixed())
                    else
                        state.maxPages = nbRst / 24

                state.hasData = true
            }
        })


        builder.addCase(getRecipeByFilter.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getRecipeByFilter.fulfilled, (state, action: PayloadAction<SearchRecipe>) => {
            state.loading = false
            state.results.push({id: state.currentPage, results: action.payload})
            state.resultsPage = action.payload

            if (!state.hasData) {
                let nbRst = action.payload.totalResults
                if (nbRst > 24)
                    if (nbRst % 24 !== 0)
                        state.maxPages = parseInt(((nbRst / 24) + 1).toFixed())
                    else
                        state.maxPages = nbRst / 24

                state.hasData = true
            }


        })

    }
})


export const {
    setInputSearch, setFilterSearch,
    changePage, updateFiler
} = searchSlice.actions

export default searchSlice.reducer