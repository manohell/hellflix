import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;