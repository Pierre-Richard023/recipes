export interface RecipeInfos {
    id: number,
    title: string,
    image: string,
    imageType: string,
    servings: number,
    readyInMinutes: number,
    license: string,
    sourceName: string,
    sourceUrl: string,
    spoonacularSourceUrl: string,
    healthScore: number,
    spoonacularScore: number,
    pricePerServing: number,
    analyzedInstructions: AnalyzedInstruction[],
    cheap: boolean,
    creditsText: string,
    cuisines: string[],
    dairyFree: boolean,
    diets: string[],
    gaps: string,
    glutenFree: boolean,
    instructions: string,
    ketogenic: boolean,
    lowFodmap: boolean,
    occasions: [],
    sustainable: boolean,
    vegan: boolean,
    vegetarian: boolean,
    veryHealthy: boolean,
    veryPopular: boolean,
    whole30: boolean,
    weightWatcherSmartPoints: number,
    dishTypes: string[],
    extendedIngredients: ExtendedIngredient[]
    summary: string,
    winePairing: WinePairing
}

interface AnalyzedInstruction {
    name: string;
    steps: Step[];
}

interface Step {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Equipment[];
    length: Length;
}

interface Ingredient {
    id: number;
    name: string;
    localizedName: string;
    image: string;
}

interface Equipment {
    id: number;
    name: string;
    localizedName: string;
    image: string;
}

interface Length {
    number: number;
    unit: string;
}

interface ExtendedIngredient {
    aisle: string,
    amount: number,
    consitency: string,
    id: number,
    image: string,
    measures: {
        metric: {
            amount: number,
            unitLong: string,
            unitShort: string
        },
        us: {
            amount: number,
            unitLong: string,
            unitShort: string
        }
    },
    meta: string[],
    name: string,
    original: string,
    originalName: string,
    unit: string

}

interface WinePairing {
    pairedWines: string[],
    pairingText: string,
    productMatches: ProductMatch[]
}

interface ProductMatch {
    id: number,
    title: string,
    description: string,
    price: string,
    imageUrl: string,
    averageRating: number,
    ratingCount: number,
    score: number,
    link: string
}