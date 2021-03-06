export const initialState = {
    basket: []
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_TO_BASKET: "REMOVE_TO_BASKET",
    REMOVE_ALL:"REMOVE_ALL"
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_TO_BASKET":
            const index = state.basket.findIndex((basketItem => basketItem.id === action.id))
            let newBasket = [...state.basket]
            if (index >= 0) {
                newBasket.splice(index, 1)
            }else {console.log("cant remove product")}
            return {
                ...state,
                basket: newBasket,
            };
        case "REMOVE_ALL":
            return {
                basket:[]
            }
        default: return state;
    }
}

export default reducer;
