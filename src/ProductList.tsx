import {GlobalContext} from "./GlobalContext.tsx";
import {Product} from "./TableProducts.tsx";
import React, {MouseEventHandler} from "react";

export function ProductList() {

    const {dados, limparDados} = React.useContext<{dados: Product[], limparDados: MouseEventHandler}>(GlobalContext);
    console.log(dados);
    return <>
        <button onClick={limparDados}>Limpar</button>
        {dados && dados.map((product: Product) => {
        return <li key={product.id}>
                <p>{product.nome}</p>
                <p>{product.preco}</p>
                <p>{product.descricao}</p>
                <p>{product.vendido ? "Sim" : "Não"}</p>
                {product.fotos.map((foto) => {
                    return <img src={foto.src} alt={foto.titulo} style={
                        {width: "100px", height: "100px", objectFit: "cover"}
                    }/>
                })}
            </li>
        })}
    </>
}