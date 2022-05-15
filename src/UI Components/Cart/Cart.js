import './Cart.css'
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import OrderList from '../OrderList/OrderList';
import { Mobile } from '../MediaQuery/MediaQuery';


const Cart = () => {
    // Data Context Hooks
    const newData = useContext(DataContext);

    const navigate = useNavigate();
    
    const toCheckOut = () => {
        navigate('/checkOut')
    }

    return (
        <Mobile>
            <div className={`NavBar-cart-mobile`}>
                <div className="NavBar-cart-list-mobile">
                    {newData.cart.length > 0 ?
                        <div>
                            {newData.cart.slice(0, 3).map((item, index) => (
                                <OrderList key={index} data={item} />
                            ))}
                        </div> :
                        <div className="NavBar-cart-list-empty-mobile">
                            <h3>Cart is empty</h3>
                            <h4>You have zero item</h4>
                            <h4>on your cart at the moment</h4>
                        </div>
                    }
                    <div className="NavBar-cart-btn-mobile" onClick={toCheckOut}><span>Check Out</span></div>
                </div>
            </div>
        </Mobile>
    )
}

export default Cart;