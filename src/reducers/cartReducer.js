import Product_Data from "../data/products";
import { ADD_TO_CART, REMOVE_ITEM_FROM_CART } from "../actions/cartActions";

const initState = {
    items: Product_Data,
    addedItems: [],
}

const cartReducer = (state = initState, action) => {
    if (action.type === ADD_TO_CART) {
        console.log("state.addedItems.length", state.addedItems.length);
        let addedItem = state.items.find(item => item.product_id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.product_id)
        if (existed_item) {
            addedItem.tItem += 1
            return {
                ...state,
            }
        }

        else {
            addedItem.tItem = 1;
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
            }
        }
    }

    if (action.type === REMOVE_ITEM_FROM_CART) {
        let new_items = state.addedItems.filter(item => action.id !== item.product_id)
        return {
            ...state,
            addedItems: new_items,
        }
    }
    else {
        return state;
    }
}

export default cartReducer;