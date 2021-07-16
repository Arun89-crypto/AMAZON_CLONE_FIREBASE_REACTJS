import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__ad">
                <h2>CREDIT CARD</h2>
                <h4>Offers : only on amazon</h4>
            </div>
            {(basket?.length === 0) ? (
                <div className="empty__message">
                    <h2>Your Shopping basket is Empty</h2>
                    <p>
                        You have no item in your basket. To buy click on the the  "Add to Cart" option on the item side
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {/* List out all of the checkout products */}
                    {basket.map((item) => {
                        console.log(item);
                        return (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        );
                    })}
                </div>
            )}
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
