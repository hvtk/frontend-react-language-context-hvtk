import React, { createContext } from "react";

export const LanguageContext = createContext(null);

function LanguageContextProvider({}) {

    const data = { test: "test"};

    return(
        <LanguageContext.Provider value={data}>

        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;
