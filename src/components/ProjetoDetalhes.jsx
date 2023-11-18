// ProjetoDetalhes.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjetoDetalhes = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        
        const response = await fetch('../projetos/projetos.json');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchData();
  }, [id]);

  const projetoSelecionado = projects.find((project) => project.id === parseInt(id));

  if (!projetoSelecionado) {
    return <div>Projeto não encontrado.</div>;
  }

  const { title, description, link, tecnologia, image } = projetoSelecionado;

  return (
    <div>
      <h2>{title}</h2>
      {image && <img src={`./image/${image}`} alt={title} />}
      <p>{description}</p>
      <p>Tecnologia: {tecnologia.join(', ')}</p>
      <p>{image}</p>
      <p>{link}</p>
      {/* Adicione mais detalhes conforme necessário */}
    </div>
  );
};

export default ProjetoDetalhes;
