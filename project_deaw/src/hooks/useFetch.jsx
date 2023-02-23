/* implement fetch api which receives any url and returns data from fetch when it changes, as follow:
{
    data: null,
    isLoading: true,
    hasError: null
}
use needed hooks to make it works */

import { useEffect, useState } from "react";

export const useFetch = ({ url }) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {
        const api = await fetch(url)
        const data = await api.json()

        setState({
            data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
        getFetch()
    },[url])


    useEffect(() => {
        getFetch(); // eslint-disable-next-line
    }, [url])
    return {
        ...state
    }
}