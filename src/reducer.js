export const initialState = {
    basket: [],
    user: null,
}
function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.user }
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                //item exists
                newBasket.splice(index, 1);
            } else {
                console.warn(`cannot remove the product with (id:${action.id})`)
            }
            return { ...state, basket: newBasket }
        default:
            return state;
    }
}

export default reducer;
