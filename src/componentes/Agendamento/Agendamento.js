
import './agendamento.css'
import { useState } from 'react';

export default function Agendamento() {
         
         const [agendar, setAgendar] = useState ("")
         const displayMsg = () => {
            setAgendar(!mensagem);
        }  
         const [mensagem, setMensagem] = useState(false);



    return(
                
        <>
      <div className="agendamento">
        <div className="agendamento_2">
          <form>
              <label>Nome:</label>
              <input type="text"
                     onChange={(event)=>{
                        setAgendar(event.target.value);
                     }}
              />

              <label>Horário:</label>
              <input type="time"
                      onChange={(event)=>{
                        setAgendar(event.target.value);
                     }}
            
              />

              
              <label>Dia:</label>
              <input type="date"
                       onChange={(event)=>{
                        setAgendar(event.target.value);
                     }}
              
              />

              <label>Telefone:</label>
              <input type="number"
                        onChange={(event)=>{
                        setAgendar(event.target.value);
                     }}
              
              />
              <button onClick={displayMsg} type='submit'>Agendar</button>
          </form>
           <p>{ mensagem ?`Agendamento realizado com sucesso ${agendar}` : ""}</p>
           </div>
       </div>

            

        
        </>
    )
  }

