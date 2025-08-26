import FotoLogo from  "../../assets/logo.jpeg"
import './menu.css'



export default function Menu() {
    return(
        <>
            <header className='menu1'>

               
                <img src={FotoLogo} alt='Logo do menu' className='logo' />
               
                    
                    <a href='#home'>Home</a>
                    <a href='#pagina-sobre'>Sobre</a>
                    <a href='#servicos'>Serviços</a>
                    <a href='https://wa.me/5582991218950' target="blank">Contato</a>
      
            </header> 


            

            


        </>
    )
}
