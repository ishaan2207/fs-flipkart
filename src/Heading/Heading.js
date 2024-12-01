import './Headings.css';
import { useItem } from "../Context/ItemContext";

function Heading() {
    const { numItems } = useItem();

    return (
        <div id="headerContainer">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="logo" />
            <input type="text" placeholder="Search"></input>
            <div className="headerItem">
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" />
                <p>Login</p>
            </div>
            <div className="headerItem">
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" />
                <p>Cart ({numItems})</p>
            </div>
            <div className="headerItem">
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" />
                <p>Become a Seller</p>
            </div>
        </div>
    )
}

export default Heading;