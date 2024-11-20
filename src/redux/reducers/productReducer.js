import { ActionTypes } from "../contants/action-types";

const initialState ={
    products: [
        // {
        //     id: 1,
        //     title: "Sujan",
        //     category: "programmer"
        // }
    ],
    // product: {},
}
// export const productReducer = (state, {type, payload}) => {
//     switch (type) {
//         case ActionTypes.SET_PRODUCTS:
//             return state;
           
//         default:
//             return state;
//     }
// }

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload, // Assuming 'payload' contains the products array
            };
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, {type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                 ...payload, // Assuming 'payload' contains the products array
            };
            case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return {
                    // Assuming 'payload' contains the products array
                };
        default:
            return state;
    }
}
