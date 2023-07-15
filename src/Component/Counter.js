import './Counter.css'
import { useGlobalAppContext } from "../context/AppContext";
import { MdDelete } from "react-icons/md";

    const Counter = ({quantity, id}) => {
    const {ContextState, ContextDispatch} = useGlobalAppContext();
    console.log(ContextState.basket)

    const handleIncrement = (id) => {
        ContextDispatch({
            type:'INCREASE-QUANTITY',
            payload: id,
        })
    }

    const handleDecrement = (id, quantity) => {
        if(quantity > 1) {
            ContextDispatch({
                type:'DECREASE-QUANTITY',
                payload: id,
            })
        } else if(quantity === 1) {
            ContextDispatch({
                type:'DECREASE-QUANTITY',
                payload: id,
            })
            ContextDispatch({
                type:'DELETE_FROM_CART',
                payload: id,
            })
        }
    }

    return (
        <div className="counter-container">
            <button 
                className="left"
                onClick={() => handleDecrement(id, quantity)}
            > {quantity > 1 ? '-' : <MdDelete />} </button>

            <div className="count">{quantity}</div>
            <button 
                className="right"
                onClick={() => handleIncrement(id)}
            > + </button>
        </div>
    )
}

export default Counter;