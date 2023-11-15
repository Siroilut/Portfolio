

const ProjetosRecentes = ({id, title, description, link, tecnologia, image}) =>{

    return (
        <div className="projetos-recentes">
          <li key={id}>
          <h3>{title}</h3>
          {image && <img src={`/images/${image}`} alt={title}/> }
          <p>{description}</p>
          <p>tecnologia: {tecnologia.join(', ')}</p>
          <p>{image}</p>
          <p>{link}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
          </li>
        </div>
      );
    };




export default ProjetosRecentes
