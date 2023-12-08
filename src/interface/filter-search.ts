export interface FilterSearch {
    name: string,
    question: string,
    data: FilterElements[],
    unwanted: boolean,
    style: StyleElements
}


export interface FilterElements {
    name: string,
    image: string,
}

export interface StyleElements {
    class: string,
    select: string,
    notSelect: string,
    title: string,
}

