import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [numItems, setNumItems] = useState(0);

    function updateNumItems(newNumItems) {
        setNumItems(newNumItems);
    }

    return (
        <UserContext.Provider value={{ numItems, updateNumItems }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => {
    return useContext(UserContext);
}

export { UserProvider, useUser };