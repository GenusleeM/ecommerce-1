import './CartIsEmpty.css'
import { BsBag } from "react-icons/bs";


const CartIsEmpty = () => {
    return (
        <div className='CartIsEmpty'>
            <div className='CartIsEmpty-info'>
                <BsBag />
                <h2>it seems your bag is empty</h2>
            </div>
        </div>
    )
}

export default CartIsEmpty;