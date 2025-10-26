import FotoLogo from  "../../assets/logo.jpeg"
import './menu.css'
import { FaInstagram } from "react-icons/fa";



export default function Menu() {
    return(
        <>
            <header className='menu1'>

               
                <img src={FotoLogo} alt='Logo do menu' className='logo' />
               
                    
                
                    <a href='#pagina-sobre'>Sobre</a>
                    <a href='#servicos'>Serviços</a>
                    <a href='https://wa.me/5582991218950' target="blank">Contato</a>
                    <a href=' https://www.instagram.com/' target="_blank" className="insta" > <FaInstagram/></a>
                    
             </header> 


            

            


        </>
    )
}
