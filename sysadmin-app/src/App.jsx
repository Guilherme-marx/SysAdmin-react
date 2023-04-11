import React from 'react';
// import { Route, BrowserRouter } from '@react-navigation/native';
import './App.css';
import Tabela from './components/table/table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Sys<span>Admin</span>
        </h1>
      </header>
      <div className='box1'>
        <h3>Olá, Seja Bem Vindo ao SysAdmin</h3>
        <div>
          <p>
            No SysAdmin você cadastra os usuários da sua empresa de forma segura
            e rápida.
          </p>
          <button className='cadastrar'>cadastrar</button>
        </div>
      </div>
      <section className='tabela'>
        <Tabela/>
      </section>
      
    </div>
  );
}

export default App;
