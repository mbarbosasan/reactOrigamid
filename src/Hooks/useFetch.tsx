import React from "react";
import {Product} from "../TableProducts.tsx";

const useFetch = () => {
    const [data, setData] = React.useState<Product[] | null>(null)
    const [error, setError] = React.useState<unknown | null>(null);
    const [loading, setLoading] = React.useState<boolean | null>(null);

    const request = React.useCallback(async (url: string, options: RequestInit = {})=> {
        setTimeout(async () => {
            let response;
            let json;
            try {
                setError(null);
                setLoading(true)
                response = await fetch(url, options);
                json = await response.json();
            } catch (erro: unknown) {
                json = null;
                setError(erro as Error)
            } finally {
                setData(json)
                setLoading(false)
                // eslint-disable-next-line no-unsafe-finally
                return {response, json};
            }

        }, 3000)
    }, [])
    return {data, error, loading, request} as const;
}
export default useFetch