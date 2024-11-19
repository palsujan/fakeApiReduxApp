import { type } from "@testing-library/user-event/dist/type"
import { ActionTypes } from "../contants/action-types"


export const setProducts = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProducts = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
    }
}

// export const REMOVE_SELECTED_PRODUCT = (products) =>{
//     return {
//         type: ActionTypes.REMOVE_SELECTED_PRODUCT,
//         payload: products,
//     }
// }