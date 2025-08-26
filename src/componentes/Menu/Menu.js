import FotoLogo from  "../../assets/logo.jpeg"
import './menu.css'

export default function Menu() {
    return(
        <>
            <header className='menu1'>

               
                <img src={FotoLogo} alt='Logo do menu' className='logo' />
               
                    
                    <a href='#'>Home</a>
                    <a href='#'>Sobre</a>
                    <a href='#'>Serviços</a>
                    <a href='#'>Contato</a>
      
            </header> 


            

            


        </>
    )
}
