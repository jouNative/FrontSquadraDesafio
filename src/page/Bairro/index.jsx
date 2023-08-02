import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import { Container, Content } from './styles'

export const BairroPage = () => {
  const [codigoMunicipio, setCodigoMunicipio] = useState('')
  const [nome, setNome] = useState('')
  const [status, setStatus] = useState(1)

  const [municicipioOptions, setMunicipioOptions] = useState([])
  const [loading, setLoading] = useState(true)

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await api.post('/bairro', { codigoMunicipio, nome, status })
      setCodigoMunicipio(0)
      setNome('')
      setStatus(1)
    } catch (error) {
      console.error(error)
    }
  }

  async function getUFOptions() {
    try {
      const response = await api.get('/municipio')
      setMunicipioOptions(response.data)
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
            value={codigoMunicipio}
            onChange={(e) => setCodigoMunicipio(Number(e.target.value))}
          >
            <option>Selecione</option>
            {municicipioOptions.map((muni, index) => (
              <option key={index} value={muni.codigoMunicipio}>
                {muni.nome}
              </option>
            ))}
          </select>
          <Input
            placeholder="Nome Bairro"
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
