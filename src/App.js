import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Movie from './pages/movieDetail/Movie'
import MovieList from './components/movieList/MovieList'
import NotFound from './components/notFound/NotFound'

const App = () => {


  return (
      <>

      <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/Movie_React_App" index element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
        
      </>
            
  
  )
}

export default App