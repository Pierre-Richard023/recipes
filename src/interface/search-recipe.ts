export interface SearchRecipePage {
    id:number,
    results:SearchRecipe
}

export interface SearchRecipe {
    results: Array<RecipeResult>,
    offset: number,
    number: number,
    totalResults: number,
}

export interface RecipeResult {
    id: number,
    title: string,
    image: string,
    imageType: string,
}