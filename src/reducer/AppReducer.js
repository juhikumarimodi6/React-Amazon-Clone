export const initialState = {
            basketCount : 0,
            basket : [],
        };

export const reducer = (state, action) => {
            console.log(action);
            switch(action.type){
                case 'ADD_TO_CART' : 
                    return {
                        ...state,
                        basketCount: state.basketCount + 1,
                        basket: [...state.basket, action.payload]
                    }
                case 'DELETE_FROM_CART' :
                    return {
                        ...state,
                        basketCount: state.basketCount - 1, 
                        basket: state.basket.filter((item) => item.id !== action.payload)
                    }
                default:
                    return {...state};
            }
        }