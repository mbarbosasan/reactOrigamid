import React from "react";


const App = () => {
    const [carrinho, setCarrinho] = React.useState(0);
    const [notificacao, setNotificacao] = React.useState<string | null>(null);
    const timeoutRef = React.useRef<number | undefined>(undefined);
    function handleClick() {
        setCarrinho(carrinho + 1)
        setNotificacao("Item adicionado ao carrinho")
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            setNotificacao(null)
        }, 2000)
        console.log(timeoutRef.current)
    }

    return <>
        <p>{notificacao}</p>
        <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </>
};

export default App

