import React from "react";


const App = () => {

    const [comentarios, setComentarios] = React.useState<string[]>([]);
    const [input, setInput] = React.useState<string>("");
    const inputElement = React.useRef<HTMLInputElement>(null)
    function handleClick() {
        setComentarios([...comentarios, input])
        setInput("")
        inputElement.current?.focus()
    }

    return <>
        <ul>
            {comentarios.map((comentario) => {
                return <li key={comentario} style={{
                    display: "flex",
                    gap: "10px",
                }}>
                    <p>{comentario}</p>
                    <button onClick={() => setComentarios(comentarios.filter((c) => c !== comentario))}>Remover</button>
                </li>
            })}
            <input ref={inputElement} type="text" value={input} onChange={({target}) => setInput(target.value)}/>
            <button style={{
                marginTop: "10px"
            }} onClick={handleClick}>Enviar</button>
        </ul>
    </>
};

export default App

