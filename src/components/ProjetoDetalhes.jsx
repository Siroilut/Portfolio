import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const ProjetoDetalhes = ({projects}) => {
    const {id} = useParams();
    const projeto = projects[id];

    if(!projeto){
        return <div>projeto nao encontrado</div>;
        }
    

  return (
    <div>
      <h2>{projeto.title}</h2>
      <p>{projeto.description}</p>
      <p>{projeto.link}</p>
      <p>{projeto.image}</p>
    </div>
  )
}

export default ProjetoDetalhes
