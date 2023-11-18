import React from 'react';
import { Link } from 'react-router-dom';

const ProjetosRecentes = ({ id, title, description, link, tecnologia }) => {
  return (
    <div className='projetos-recentes'>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{link}</p>
      <p>{tecnologia}</p>
      <Link to={`/projeto/${id}`}>Ver Detalhes</Link>
    </div>
  );
};

export default ProjetosRecentes;