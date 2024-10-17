import { iProduct } from "./i-product"

export interface IJSONResponse {

    products: iProduct[]
    total: number
    skip: number
    limit: number
}
