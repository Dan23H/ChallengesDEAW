import { useFetch, useCounter } from "./hooks";

export const BreakingBad = () => {
    const { count, add } = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`https://api.breakingdabquotes.xyz/v1/quotes/${count}`)
    return (
    <>
        <h3>BreakingBad Quotes</h3>
        {
            isLoading ? (
                <div></div>
            ) : (
                <div></div>
            )
        }
        
    </>
    )



}