import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data , setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data)
    }, [currency])
    console.log(data)
    return data
}

// we don't return either data(state) or state function(setData) infact we return the whole function as our custom hook
export default useCurrencyInfo ;