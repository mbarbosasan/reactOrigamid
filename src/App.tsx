import {UserContext} from "./UserContext.tsx";
import {GlobalStorage} from "./GlobalContext.tsx";
import {ProductList} from "./ProductList.tsx";

const App = () => {
    console.log(UserContext)
    return <>
        <GlobalStorage>
            <ProductList/>
        </GlobalStorage>
    </>
};

export default App

