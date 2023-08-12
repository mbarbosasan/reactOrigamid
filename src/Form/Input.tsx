const Input = ({label, id, type, ...props}: {label: string, id: string, type: string, props?: any}) => {
    return (
        <>
        <label htmlFor={id}>{label}</label>
        <input type={type} {...props}/>
        </>
    )
}

export default Input