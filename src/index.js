import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

// Desafio master blaster na descrição
// Colocar um jogo ou brincadeira nessa página:
const Pagina404 = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
    <h1>Ops, essa página não existe...</h1>
    <p>
      <a href="/">Você pode jogar ou voltar pra home :)</a>
    </p>
    <iframe
      title="Flappy Bird Game"
      src="https://mariosouto.com/flappy-bird-devsoutinho/"
      width="340"
      height="600" />
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);