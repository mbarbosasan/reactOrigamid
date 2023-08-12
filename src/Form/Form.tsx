import Input from "./Input.tsx";
import Button from "./Button.tsx";

const Form = () => {
    return (
        <form>
            <p>
                <Input label={"Nome"} id={"Nome"} type={"text"} props={{
                    style: {
                        color: "red"}

                }} />
            </p>
            <p>
                <Input label={"Email"} id={"Email"} type={"email"} />
            </p>
            <p>
                <Input label={"Senha"} id={"Senha"} type={"password"} />
            </p>
            <Button />
        </form>
    )
}

export default Form