
import Menu from "./componentes/Menu/Menu";
import Maim from "./componentes/Maim/Maim"
import Agendamento from "./componentes/Agendamento/Agendamento"
import Sobre from "./componentes/Sobre/Sobre"
import Serviços from "./componentes/Serviços/Serviços";
import Rodape from "./componentes/Rodape/Rodape";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import FotoLogo from  "./assets/logo.jpeg"

import {
  BrowserRouter as Router,
  Routes,
  Route,    
} from "react-router-dom";

function App() {
  return (
   <>
     <Router>

       <header className='menu1'>
        
            <Link 
            
                    className= "borda"  to="/maim"><img src={FotoLogo} alt='Logo do menu' className='logo' 
            
            /></Link> 
                    <ul>
                        <li> <Link to="/sobre">Sobre</Link></li>
                        <li> <Link to="/servicos">Serviços</Link></li>
                    </ul>
                    
                    <a className="contato" href='https://wa.me/5582991218950' target="blank">Contato</a>
                    <a href=' https://www.instagram.com/' target="_blank" className="insta" > <FaInstagram/></a>
                    
       </header> 



              
      <Routes>

        <Route path="/" element={<Maim />} />

        <Route path="/menu" element={<Menu />} />
        <Route path="/Maim" element={<Maim />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/sobre" element={<Sobre size={450} />} />
        <Route path="/servicos" element={<Serviços />} />
        
      </Routes>
    </Router>
   
    <Rodape />
    
    


   </>
  );
}

export default App;
