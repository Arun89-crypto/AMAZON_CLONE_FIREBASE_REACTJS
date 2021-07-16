import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider';


function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    var sum = 0;
    for (let i = 0; i < basket.length; i++) {
        const element = basket[i].price;
        sum += element;
    }
    return (
        <div className="subtotal__footer">
            <div className="subtotal">
                <h1>Subtotal</h1>
                <p>
                    Total Items  : {basket.length}
                </p>
                <h1><small>Rs.</small> {sum}</h1>
            </div>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
