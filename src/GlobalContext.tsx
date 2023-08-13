import React from "react";
import {Product} from "./TableProducts.tsx";

export const GlobalContext = React.createContext({});

export const GlobalStorage = ({children}: { children: React.ReactNode }) => {
    const [dados, setDados] = React.useState<Product[] | null>(null);

    React.useEffect(() => {
        fetch("https://ranekapi.origamid.dev/json/api/produto/")
            .then(response => response.json())
            .then(json => setDados(json)
        )
    }, [])

    function limparDados() {
        setDados(null);
    }

    return <GlobalContext.Provider value={{dados, limparDados}}>
        {children}
    </GlobalContext.Provider>
}