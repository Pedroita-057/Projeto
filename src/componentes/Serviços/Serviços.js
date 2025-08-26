import './serviços.css'

export default function Serviços() {
    return(
        <>
            <div className='serviços' id="servicos"> 
                 <h1>Serviços:</h1>

                 <ul>
                     <li>1. Corte Clássico
                         <p>👉 Corte de cabelo tradicional com acabamento impecável.
                         Inclui: lavagem e finalização com pomada modeladora.</p>
                     </li>
                     <li >2. Corte Moderno
                         <p>
                            👉 Tendências atuais para quem gosta de estilo diferenciado.
                             Inclui: lavagem, finalização e dicas de cuidado diário.
                         </p>
                     </li>
                     <li>3. Barba Completa
                        <p>
                            👉 Modelagem e alinhamento da barba.
                            Inclui: toalha quente, navalha e óleo hidratante.
                        </p>
                     </li>
                     <li>4. Combo Premium
                        <p>
                            👉 Corte de cabelo + barba em um só pacote.
                             Inclui: lavagem especial, massagem capilar e hidratação.
                        </p>
                     </li>
                     <li>5. Tratamentos Especiais
                        <p>
                          👉 Hidratação capilar, pigmentação de fios, sobrancelha e 
                          cuidados mascliinos personalizados.  
                        </p>
                     </li>
                 </ul>
            </div>
        </>
    )
}