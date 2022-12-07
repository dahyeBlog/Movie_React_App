import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Movie from './pages/movieDetail/Movie'
import MovieList from './components/movieList/MovieList'
import NotFound from './components/notFound/NotFound'

const App = () => {
  return (
    <div>
      <Router>
       <Header />
        <Routes>
          <Route path='/' index element={<Home />}></Route>
          <Route path='movie/:id' element={<Movie />}></Route>
          <Route path='movies/:type' element={<MovieList />}></Route>
          <Route path='/*' element={<NotFound />}></Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App