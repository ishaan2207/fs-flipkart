import React, { createContext, useContext, useState } from "react";

const ItemContext = createContext();

const ItemProvider = ({ children }) => {
    const [numItems, setNumItems] = useState(0);

    function updateNumItems(newNum) {
        setNumItems(newNum);
    }

    return (
        <ItemContext.Provider value={{ numItems, updateNumItems }}>
            {children}
        </ItemContext.Provider>
    )
}

const useItem = () => {
    return useContext(ItemContext);
}

export { ItemProvider, useItem };