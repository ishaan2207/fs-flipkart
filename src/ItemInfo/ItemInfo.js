import { useEffect, useState } from "react";
import './ItemInfo.css'

function ItemInfo({ id, getId }) {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
            .then(data => data.json())
            .then(response => setProduct(response))
    })

    function goBack() {
        getId(null);
    }

    return (
        <div id="infoContainer">
            <button onClick={goBack}>Back</button>
            <p>Product Name: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <img src={product.image} />
        </div>
    )

}

export default ItemInfo;