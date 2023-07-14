export const initialState = {
            basketCount : 0,
            basket : [],
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
                        basketCount: state.basketCount + 1,
                        basket: [...state.basket],
                    }
                case 'DELETE_FROM_CART' :
                    let quantity = state.basket.filter((item) => item.id === action.payload)[0].quantity
                    return {
                        ...state,
                        basketCount: state.basketCount - quantity, 
                        basket: state.basket.filter((item) => item.id !== action.payload)
                    }

                default:
                    return {...state};
            }
        }