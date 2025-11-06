import './agendamento.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Agendamento() {

  const [nome, setNome] = useState('')
  const [horario, setHorario] = useState('')
  const [dia, setDia] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState(false)


  function agendar(e) {

    e.preventDefault() 

// Envia os dados para o servidor
    axios.post('http://localhost:3001/agendar', {
      nome,
      horario,
      dia,
      telefone
    })
    .then(() => {
      setMensagem(true)
      setNome('')
      setHorario('')
      setDia('')
      setTelefone('')
    })
    .catch((err) => {
      console.error('Erro ao enviar dados:', err)
      setMensagem(false)
    })
  }
// Esse alert exibe a mensagem de sucesso por 3 segundos
  useEffect(() => {
    if (mensagem) {
      alert('Agendamento realizado com sucesso!')
      const timer = setTimeout(() => setMensagem(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [mensagem])

  return (
    <>
      <div className="agendamento">
        <div className="agendamento_2">
          <form onSubmit={agendar}>
            <label>Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              required
            />

            <label>Horário:</label>
            <input
              type="time"
              value={horario}
              onChange={(event) => setHorario(event.target.value)}
              required
            />

            <label>Dia:</label>
            <input
              type="date"
              value={dia}
              onChange={(event) => setDia(event.target.value)}
              required
            />

            <label>Telefone:</label>
            <input
              type="number"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
              required
            />

            <button type="submit">Agendar</button>
          </form>
        </div>
            <p> {mensagem ? `Agendamento realizado com sucesso!` : ''} </p>
      </div>
    </>
  )
}
