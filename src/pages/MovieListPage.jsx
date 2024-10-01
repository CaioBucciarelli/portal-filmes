import { useState } from "react";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard";

export default function MovieListPage(){

    const [search, setSearch] = useState('')
    const [listaFilmes, setListaFilmes] = useState(movies)

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const filmesFiltrados = movies.filter( filme => filme.titulo.toLowerCase().includes(search.toLowerCase()))

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

                filmesFiltrados.length > 0 ?
                    filmesFiltrados
                    .map(filme => (
                        <MovieCard key={filme.id} {...filme}/>
                    ))
                :
                <p>Filme não encontrado</p>
                }
            </div>

        </>
    )
}