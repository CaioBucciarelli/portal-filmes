import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import MoviesList from './pages/MovieListPage.jsx'
import MoviesDetails from './pages/MovieDetailPage.jsx'
import GenreList from './pages/GenreListPage.jsx'
import MoviesByGenre from './pages/MoviesByGenrePage.jsx'
import PageNotFound from './pages/MoviesByGenrePage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: "/movies", element: <MoviesList/>},
      {path: "/movies/:id", element: <MoviesDetails/>},
      {path: "/genre", element: <GenreList/>},
      {path: "/genre/:id", element: <MoviesByGenre/>},
      {path: "*", element: <PageNotFound/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
