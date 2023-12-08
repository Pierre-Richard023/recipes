import axios from "axios"
import {API_KEY, API_LINK} from "../utils/varibles.ts";

export const getAllRecipeByFilter = async (filter: string, page: number) => {

    return await axios.get(`${API_LINK}/complexSearch?apiKey=${API_KEY}&number=24&offset=${24 * (page - 1)}${filter}`)
        .then(response => response.data)
}

export const getRecipesBySearch = async (search: string, page: number) => {

    return await axios.get(`${API_LINK}/complexSearch?apiKey=${API_KEY}&number=24&offset=${24 * (page - 1)}&query=${search}`)
        .then(response => response.data)
}

export const getRecipeById = async (id: number) => {

    return await axios.get(`${API_LINK}/${id}/information?apiKey=${API_KEY}`)
        .then(response => response.data)
}