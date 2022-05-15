import { useEffect, useState } from "react"
const useFetch = (url) => {
    const [data, setData] = useState()
    const [dataError, setDataError] = useState()
    const [isPending, setIsPending] = useState(true)
    useEffect(() => {
          fetch(url)
            .then(response => {
              if(!response.ok){
                throw Error("could not get data from server")
              }
              return response.json();
            })
            .then(result => {
              setData(result)
              setIsPending(false)
              setDataError(null)
            })
            .catch(error => {
              setIsPending(false)
              setDataError(error.message)
            });
    }, [url])
    return {data, dataError, isPending}
}

export default useFetch;