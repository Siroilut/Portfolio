import './App.css'
import { useState, useEffect } from 'react'
import projectsJSON from '../projetos/projetos.json'

// link entre paginas
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import SearchForm from './components/SearchForm'

import ProjetosRecentes from './components/ProjetosRecentes.jsx'

function App() {
  const [projects, setProjects] = useState(projectsJSON);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        
        
        setProjects(projectsJSON);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchProjects();
  }, []);
  return (
      <div className='App'>
         
         <header>
        <h1>Tulio Evangelista</h1>
        <p>Desenvolvedor Web Full Stack</p>
        <Navbar/>
        <SearchForm/>
      </header>
      <main>
      <section className="projects">
          <h2>Projetos Recentes</h2>
          {/* os projetos mais recentes */}
          <div className='lista-projetos'>
          {projects.map((project, id) => (
             <ProjetosRecentes key={id} {...project} />
          ))}

          </div>
        </section>
        <section className="skills">
          <h2>Habilidades Principais</h2>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>JavaScript (ES6+)</li>
            {/* Adicione mais habilidades conforme necessário */}
          </ul>
        </section>
        </main>
        <Outlet/>
        <footer>
        <button>contatos</button>
      </footer>
      </div>
     )
}

export default App