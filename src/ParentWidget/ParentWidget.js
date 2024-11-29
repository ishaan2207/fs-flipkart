import { useState } from "react";
import Electronics from "../Electronics";
import ItemInfo from "../ItemInfo/ItemInfo";

function ParentWidget() {

    const [productId, setProductId] = useState(null);

    function getId(id) {
        setProductId(id);
    }

    return (
        <>
            {productId ? <ItemInfo id={productId} getId={getId} /> : <Electronics getId={getId} />}
        </>

    )
}

export default ParentWidget;