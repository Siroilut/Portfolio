import { useState } from "react"
import { useNavigate } from "react-router-dom"


const SearchForm = () => {
const navigate = useNavigate();
const [query, setQuery] = useState();

const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?q=" + query)
};


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=> setQuery(e.target.value)} value='pesquise um projeto'/>
        <input type="submit" value="Buscar"/>
    </form>
  );
}

export default SearchForm