import React,{useState, useContext, useEffect} from 'react'
import useFetch from '../useFetch/useFetch'

const AppContext = React.createContext()
const apiKey = '04d3d1d7381fc6a469d9a3c3368d88de'

export const API_ENDPINT =`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`

const AppProvider = ({children}) => {
  const [query, setQuery] = useState('아이언맨')  
  const {isLoading, error, data: movies} = useFetch(`&query=${query}`)
  
  return (
    <AppContext.Provider value={{query,setQuery,isLoading,error,movies}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}


export {AppContext, AppProvider}
