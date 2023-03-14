import { useFetch, useCounter } from "./hooks";

export const BreakingBad = () => {
    const { count, add } = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`https://api.breakingdabquotes.xyz/v1/quotes/${count}`)
    return (
    <>
        <h3>BreakingBad Quotes</h3>
        {
            isLoading ? (
                <div>
                    Loading...
                </div>
            ) : (
                <div>
                    <p>{data[0]?.quote}</p>
                    <footer>{data[0]?.author}</footer>
                </div>
            )
        }
        <button onClick={() => add()}>Next Quote</button>
        
    </>
    )



}