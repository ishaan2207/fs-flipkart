import CartItem from "./CartItem/CartItem";
import './Cart.css';
import { useItem } from "../Context/ItemContext";

function Cart() {
    const cartItems = [
        {
            productName: "Samsung Galaxy S23 Ultra",
            image: "https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/p/w/p/-original-imah4zp8tfzndmmh.jpeg?q=90",
            price: 124999,
            deliveryDate: "2024-12-02",
            quantity: 1
        },
        {
            productName: "Sony WH-1000XM5 Bluetooth Headphones",
            image: "https://rukminim2.flixcart.com/image/612/612/l1dwknk0/headphone/8/m/r/wh-1000xm4-sony-original-imagcywfzfwjmvbr.jpeg?q=70",
            price: 29999,
            deliveryDate: "2024-12-05",
            quantity: 1
        },
        {
            productName: "Apple MacBook Air M2",
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/2/v/v/-original-imagfdeqter4sj2j.jpeg?q=70",
            price: 109900,
            deliveryDate: "2024-12-07",
            quantity: 1
        },
        {
            productName: "Boat Stone 1200 Bluetooth Speaker",
            image: "https://rukminim2.flixcart.com/image/612/612/ktszgy80/speaker/mobile-tablet-speaker/b/u/m/stone-1200f-boat-original-imag72dhvchsxmrz.jpeg?q=70",
            price: 3499,
            deliveryDate: "2024-12-03",
            quantity: 1
        }
    ];

    const { updateNumItems } = useItem();
    updateNumItems(cartItems.length);

    const totalCost = cartItems.reduce((acc, item) => acc + item.price, 0);
    const deliveryCost = 0;

    return (
        <div id="cartContainer">
            <div id="cartItems">
                {cartItems.map((cartItem) => <CartItem name={cartItem.productName} image={cartItem.image} price={cartItem.price} deliveryDate={cartItem.deliveryDate} quantity={cartItem.quantity} />)}
                <button id="placeOrder">PLACE ORDER</button>
            </div>
            <div id="priceDetails">
                <p id="priceHeader">Price Details</p>
                <p>Price: ₹{totalCost.toLocaleString("en-IN")}</p>
                <p>Delivery Cost: ₹{deliveryCost}</p>
                <p>Total Amount: ₹{(totalCost + deliveryCost).toLocaleString("en-IN")}</p>
            </div>
        </div>
    )
}

export default Cart;