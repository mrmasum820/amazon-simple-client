import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, handleClearCart, children }) => {
    // const cart = props.cart;
    // const {cart} = props;

    // console.log(cart);

    let totalPrice = 0
    let totalShipping = 0
    let quantity = 0
    for (const product of cart) {
        // product.quantity = product.quantity || 1
        if (product.quantity === 0) {
            product.quantity = 1
        }
        quantity = quantity + product.quantity;

        totalPrice = totalPrice + product.price * quantity;
        totalShipping = totalShipping + product.shipping
    }
    const tax = totalPrice * 7 / 100

    const grandTotal = totalPrice + totalShipping + tax

    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected Items: {quantity} </p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h4>Grand Total: ${grandTotal.toFixed(2)} </h4>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                Clear Cart
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;