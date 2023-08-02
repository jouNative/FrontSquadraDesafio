import { useState, useEffect } from 'react'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import { Container, Content } from './styles'

export const MunicipioPage = () => {
  const [codigoUF, setCodigoUF] = useState(0)
  const [nome, setNome] = useState('')
  const [status, setStatus] = useState(1)

  const [ufOptions, setUFOptions] = useState([])
  const [loading, setLoading] = useState(true)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await api.post('/municipio', { codigoUF, nome, status })
      setCodigoUF(0) // Fix the typo here
      setNome('')
      setStatus(1)
    } catch (error) {
      console.error(error)
    }
  }

  async function getUFOptions() {
    try {
      const response = await api.get('/uf')
      setUFOptions(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching UF options:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getUFOptions()
  }, [])

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <select
            value={codigoUF}
            onChange={(e) => setCodigoUF(Number(e.target.value))}
          >
            <option>Selecione</option>
            {ufOptions.map((uf, index) => (
              <option key={index} value={uf.codigoUF}>
                {uf.nome}
              </option>
            ))}
          </select>
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
          <button type="submit">Criar</button>
        </form>
      </Content>
    </Container>
  )
}
