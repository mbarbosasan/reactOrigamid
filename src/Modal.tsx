const Modal = ({modal, setModal}: {modal: boolean, setModal: React.Dispatch<React.SetStateAction<boolean>>}) => {

    if (!modal) return null
    return <div className={modal ? 'modal active' : 'modal'}>
        <p>Modal</p>
        <button onClick={() => setModal(false)}>Fechar</button>
    </div>
}

export default Modal