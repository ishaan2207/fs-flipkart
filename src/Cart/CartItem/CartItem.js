import './CartItem.css';

function CartItem({ name, image, price, deliveryDate, quantity }) {
    return (
        <div id='cartItem'>
            <div id='productInfo'>
                <img src={image} alt={name} />
                <div className="productDetails">
                    <p className="productName">{name}</p>
                    <p className="productPrice">₹{price}</p>
                    <p className="productDelivery">Delivery by {deliveryDate} | Free</p>
                </div>
            </div>
            <div id='productButtons'>
                <div className="quantityControl">
                    <button>-</button>
                    <p>{quantity}</p>
                    <button>+</button>
                </div>
                <p>Save For Later</p>
                <p>Remove</p>
            </div>
        </div>
    );
}

export default CartItem;
