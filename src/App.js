

import Topo from './Topo';
import Perfil from './Perfil';
import Stories from './Stories';
import Feed from './Feed';
import TituloSugestoes from './TituloSugestoes';
import Sugestoes from './Sugestoes';
import Sobre from './Sobre.js';


function App() {
  return (
    <div>
      <Topo />
      <div className="container">
            <div className="scroll">
                <Stories /> 
                <Feed />
            </div>
        </div>
    <div className="lateral">
      <Perfil />
      <TituloSugestoes />
      <Sugestoes />
      <Sobre />
    </div>


  </div>
    
  );
}
export default App;
