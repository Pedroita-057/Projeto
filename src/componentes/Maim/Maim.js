
import './maim.css'
import Foto1 from  "../../assets/foto1.avif"
import Foto2 from  "../../assets/nova.avif"
import { Link } from "react-router-dom";

export default function Maim() {
    return(
        <>
            <main className='main'>
                <div>
                    <h1>Olá,</h1>
                    <h1>Seja bem vindo</h1>
                    
                   <h2>Barbearia Central</h2>
                 <ul>
                    <li> <button> <Link to="/agendamento">Agende aqui</Link> </button>
                       
                    </li>
                    </ul>
                </div>
            </main>
        </>
    )
}
