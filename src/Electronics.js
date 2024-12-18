import './Electronics.css';
import ElectronicsItem from './ElectronicsItem/ElectronicsItem.js'
import { useState } from 'react';
import { useEffect } from 'react';
import SingleItem from './SingleItem/SingleItem.js';

function Electronics({ getId }) {

    const products1 = [
        {
            source:
                "https://rukminim2.flixcart.com/image/210/210/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=90",
            alt: "best truewireless headphones",
            name: "Best Truewireless Headphones",
        },
        {
            source:
                "https://rukminim2.flixcart.com/image/210/210/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=90",
            alt: "smarttrack smartwatches",
            name: "Fastrack Smartwatches",
        },
        {
            source:
                "https://rukminim2.flixcart.com/image/210/210/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xpytszpgx.jpeg?q=90",
            alt: "printers",
            name: "Printers",
        },
        {
            source:
                "https://rukminim2.flixcart.com/image/210/210/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=90",
            alt: "best selling mobile speakers",
            name: "Best Selling Mobile Speakers",
        },
    ];

    const products2 = [
        {
            source:
                "https://rukminim2.flixcart.com/image/210/210/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=90",
            alt: "best truewireless headphones",
            name: "Mobiles",
        },
        {
            source:
                "https://rukminim2.flixcart.com/image/210/210/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=90",
            alt: "smarttrack smartwatches",
            name: "Watches",
        },
        {
            source:
                "https://rukminim2.flixcart.com/image/210/210/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xpytszpgx.jpeg?q=90",
            alt: "printers",
            name: "Books",
        },
        {
            source:
                "https://rukminim2.flixcart.com/image/210/210/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=90",
            alt: "best selling mobile speakers",
            name: "Perfume",
        },
    ];

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((data) => data.json())
            .then((response) => setProducts(response));
    }, [])

    function changeProducts() {
        setProducts(products2);
    }

    return (
        <div className='electronicsContainer'>
            <h1>Best of Electronics</h1>
            <div className='navContainer'>
                {products.map((product) =>
                    <SingleItem source={product.image} alt={product.id} name={product.title} getId={getId} />
                )}
            </div>
            <button onClick={changeProducts}>Change Products</button>
        </div>
    )
}

export default Electronics;