import React from "react";
import TableProducts from "./TableProducts.tsx";


const App = () => {

    const [products, setProducts] = React.useState<"tablet" | "smartphone" | "notebook" | null>(null);

    React.useEffect(() => {
        const product = localStorage.getItem("product")
        if (product != null) {
            setProducts(product as "tablet" | "smartphone" | "notebook")
        }
    }, [])

    React.useEffect(() => {
        if (products != null) {
            localStorage.setItem("product", products)
        }
    }, [products])

    function handleClick(product: "tablet" | "smartphone" | "notebook") {
        setProducts(product)
    }

    return <>
        <h2>Preferência: {localStorage.getItem("product")}</h2>
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "8px",
        }}>
            <button onClick={() => handleClick("tablet")}>Tablet</button>
            <button onClick={() => handleClick("smartphone")}>Smartphone</button>
            <button onClick={() => handleClick("notebook")}>Notebook</button>
        </div>
        {products && <TableProducts product={products}/>}
    </>;
};

export default App

