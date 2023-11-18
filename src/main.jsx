import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home.jsx'
import ProjetoDetalhes from './components/ProjetoDetalhes.jsx'
import projectsJSON from '../projetos/projetos.json';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"projeto/:id",
        element:<ProjetoDetalhes />,
       },
    ]
  },
])

const Main = () => {
  const projects = projectsJSON;

  return (
    <React.StrictMode>
      <RouterProvider router={router} projects={projects}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projeto/:id' element={<ProjetoDetalhes />} />
        </Routes>
      </RouterProvider>
    </React.StrictMode>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);