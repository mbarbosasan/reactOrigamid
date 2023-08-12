const ButtonModal = ({modal ,setModal}: {modal: boolean, setModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
    function handleClick() {
        setModal((modal) => !modal)
    }

    return <button onClick={handleClick} disabled={modal}>Abrir</button>
}

export default ButtonModal