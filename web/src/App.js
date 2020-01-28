import React from 'react';
import Header from './Header';

//Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Estado
//Propriedade: Informações que o componente PAI passa para o componente FILHO

function App() {
  return (
    <> 
      <h1>Contador: 0</h1>
      <button>Incrementar</button>
    </>
  );
}

export default App; 
