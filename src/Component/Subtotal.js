import { useGlobalAppContext } from '../context/AppContext'

const Subtotal = () => {
    const {ContextState} = useGlobalAppContext();
    console.log(ContextState.basket)
    let sum = 0
    ContextState.basket.map((items) => {
        sum = sum + items.price *items.quantity;
        console.log(sum);
    })
    return <p>Subtotal ({ContextState.basketCount} items):
                <strong>${new Intl.NumberFormat('en-IN').format(`${sum}`)}</strong>
            </p>
}

export default Subtotal
