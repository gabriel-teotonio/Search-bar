import { useMemo, useState } from "react"
import './style.css'


const filmes = [
  "Homem-Aranha",
  "The Batman",
  "Clube da Luta",
  "Interestelar",
  "Wall-e",
  "Homem-Formiga",
  "Forest Gump"
]

function App() {
  const [ search, setSearch ] = useState("")

  const filmesFiltrados = useMemo(() => {
    const lowerSearch = search.toLowerCase()
    return filmes
      .filter((filme) => filme.toLowerCase().includes(lowerSearch))
  }, [search])


  return (
    <div className="container">
      <input 
      type="text" 
      placeholder="sua pesquisa"
      id="search"
      value={search}
      className="form-control"
      onChange={(e) => setSearch(e.target.value)}
      />

      <div className="movie-list"> 
        {filmesFiltrados != "" ? filmesFiltrados.map((filme, index) => (
          <div className="movie-item" key={index}>{filme}</div>
        )): <span>Nenhum filme encontrado!</span>
        }
      </div>
    </div>
  )
}

export default App
