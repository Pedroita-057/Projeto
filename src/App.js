
import Menu from "./componentes/Menu/Menu";
import Maim from "./componentes/Maim/Maim"
import Barra from "./componentes/Barra/Barra"
import Sobre from "./componentes/Sobre/Sobre"
import Serviços from "./componentes/Serviços/Serviços";
import Rodape from "./componentes/Rodape/Rodape";



function App() {
  return (
   <>
   
    
    <Menu/>
    <Maim />
    <Barra/>

    <Sobre
       size={450}
    />
    
    <Serviços/>
    <Rodape/>
    
    


   </>
  );
}

export default App;
