export interface articleProps {
    id: number;
    title: string;
    upvotes: number;
    date: string;
    image: string;
}

export type sortingMethods = "upvotes" | "recent" | "none"


export interface optionsProps {
    id: number,
    value: sortingMethods,
    name: string
}