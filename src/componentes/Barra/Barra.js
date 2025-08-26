import FotoSobre from "../../assets/foto1.avif"
import './barra.css'

export default function Barra() {
    return(
        <>
           
          <aside className='barra'>
                <h1>ESCOLHA O SEU ESTILO QUE A GENTE CAPRICHA!</h1>

          </aside>
            

          <div className="pagina">
          
          <div className="lado-esquerdo">
        
                <h1>Sobre nós</h1>

                <p> Nossa Barbearia é um espaço dedicado ao cuidado masculino,
                    unindo tradição e modernidade. Nosso trabalho vai além do 
                    simples corte de cabelo: oferecemos uma experiência completa,
                    com atendimento personalizado e ambiente acolhedor. Contamos
                    com profissionais qualificados, sempre atualizados nas últimas
                    tendências de cortes e estilos. Prezamos pelo cuidado com a saúde,
                    a higiene e a excelência em cada serviço. Cada detalhe é pensado 
                    para proporcionar conforto, confiança e satisfação a todos os clientes.               
                </p>
            
          </div>

         <div className="lado-direito">

         <img src={FotoSobre} alt='Foto sobre' className='Foto' />
         
         </div>    
        
          </div>
            


        </>
    )
}
