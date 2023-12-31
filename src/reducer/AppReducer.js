export const initialState = {
            basketCount : 0,
            basket : [],
            saveForLaterItem: [],
        };

export const reducer = (state, action) => {
            console.log(action);
            console.log(state);
            switch(action.type){
                case 'ADD_TO_CART' : 
                    let isObjectUpdated = false;
                    state.basket.forEach((obj) => {
                        if(obj.id === action.payload.id) {
                            obj.quantity = obj.quantity + 1;
                            isObjectUpdated = true;
                        } 
                    }) 
                    if (!isObjectUpdated){
                        state.basket.push(action.payload);
                    }
                    return {
                        ...state,
                        basket: [...state.basket],
                    }
                case 'DELETE_FROM_CART' :
                    let quantity = state.basket.filter((item) => item.id === action.payload)[0].quantity
                    return {
                        ...state,
                        basketCount: state.basketCount - quantity, 
                        basket: state.basket.filter((item) => item.id !== action.payload)
                    }
                case 'SIGN-OUT' : 
                    return {
                        basketCount : 0,
                        basket : [],
                    }
                case 'INCREASE-QUANTITY' :
                    state.basket.filter((item) => {
                        (item.id === action.payload) && (item.quantity = item.quantity + 1)
                    }) 
                    return {
                        ...state, 
                        basket: [...state.basket],
                    }
                case 'DECREASE-QUANTITY' :
                    state.basket.filter((item) => {
                        (item.id === action.payload) && (item.quantity = item.quantity - 1)
                    }) 
                    return {
                        ...state, 
                        basketCount: state.basketCount - 1,
                        basket: [...state.basket],
                    }
                case 'PRODUCT_DATA' :
                    return {
                        ...state,
                        products : action.payload,
                    }
                case 'SEARCH_PRODUCT_INPUT' : 
                    return {
                        ...state,
                        searchInput: action.payload,
                    }
                case 'SAVE_FOR_LATER' :
                    state.products.filter((item) => {
                        (item.id === action.payload) && (item.saveForLater = true)
                    })
                    return {
                        ...state,
                        products: [...state.products],
                    }
                case 'ADD_SAVEFORLATER_ITEM' :
                    state.saveForLaterItem.push(action.payload)
                    return {
                        ...state,
                        saveForLaterItem: [...state.saveForLaterItem],
                    }
                case 'DELETE_SAVEFORLATER_ITEM' :
                    return {
                        ...state,
                        saveForLaterItem: state.saveForLaterItem.filter((item) => item.id !== action.payload)
                    }
                case 'INCREASE_BASKETCOUNT' :
                    return {
                        ...state,
                        basketCount: state.basketCount + action.payload,
                    }
                default:
                    return {...state};
            }
        }