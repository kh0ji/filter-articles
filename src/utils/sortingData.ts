import { articleProps, sortingMethods } from "../typings"

export const sortArticles = (method: sortingMethods, articles: articleProps[]): articleProps[] => {

    switch (method) {
        case "recent":
            return [...articles].sort((a, b) => {
                const dateA = new Date(a.date)
                const dateB = new Date(b.date)
                return dateB.valueOf() - dateA.valueOf()
            })
        case "upvotes":
            return [...articles].sort((a, b) => b.upvotes - a.upvotes)

        default:
            return articles
    }
}
