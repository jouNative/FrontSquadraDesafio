import { useState } from 'react'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import { Container, Content } from './styles'

export const UFPage = () => {
  const [sigla, setSigla] = useState('')
  const [nome, setNome] = useState('')
  const [status, setStatus] = useState(1)

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await api.post('/uf', { sigla, nome, status })
      setSigla('')
      setNome('')
      setStatus(1)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <h2>Cadastrar UF</h2>
          <Input
            placeholder="Sigla UF"
            type="text"
            value={sigla}
            onChange={(e) => setSigla(e.target.value)}
          />
          <Input
            placeholder="Nome UF"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <select
            value={status}
            onChange={(e) => setStatus(Number(e.target.value))}
          >
            <option value={1}>Ativo</option>
            <option value={2}>Inativo</option>
          </select>
          <button type="submit">Criar UF</button>
        </form>
      </Content>
    </Container>
  )
}
