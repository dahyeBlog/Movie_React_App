import {useState,useEffect} from 'react'
const apiKey = '04d3d1d7381fc6a469d9a3c3368d88de'
const API_SEARCH_ENDPINT =`https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&language=ko-KR`

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({show: false, msg:''})
  const [data, setData] = useState(null)
  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json()

      if(data.results.length > 0) {
        setData(data.results)
        setError({show: false, msg:''})
      } else {
        setError({show: true, msg: data.Error})
      }
    
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      
    }

  }

  // console.log(data);
  
  useEffect(() => {
    fetchMovies(`${API_SEARCH_ENDPINT}${urlParams}`)
  }, [urlParams])

  return {isLoading,setIsLoading,error,data}
}

export default useFetch
