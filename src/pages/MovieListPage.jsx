import { useState } from "react";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard";

export default function MovieListPage(){

    const [search, setSearch] = useState('')
    const [listaFilmes, setListaFilmes] = useState(movies)

    const handleSearch = (e) => {
        setSearch(e.target.value)

        setListaFilmes(filmesFiltrados)
        
    } 

    return(
        <>
            <h1>Veja a lista completa de filmes</h1>
            <input 
                type="text" 
                name="search" 
                id="serach" 
                value={search} 
                onChange={handleSearch} 
            />
            <button>Pesquisar</button>
            <div className="flex">
                {
                    listaFilmes
                    .filter(filme => (filme.titulo).includes(search))
                    .map(filme=>(
                    <MovieCard key={filme.id} {...filme}/>
                    ))
                }
            </div>

        </>
    )
}