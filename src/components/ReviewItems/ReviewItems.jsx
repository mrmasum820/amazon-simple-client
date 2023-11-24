import './ReviewItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({ product, handleRemoveFromCart }) => {
    const { _id, img, name, price, quantity } = product
    return (
        <div className="review-item">
            <img src={img} alt="" />
            <div className='review-details'>
                <h4 className='review-name'>{name}</h4>
                <p>Price: <span className='review-price'>${price}</span></p>
                <p>Order Quantity: <span className='review-price'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(_id)} className='btn-delete'>
                <FontAwesomeIcon className='btn-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItems;