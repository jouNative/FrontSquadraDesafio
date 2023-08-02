import { UFPage } from './../UF/index'
import { MunicipioPage } from './../Municipio/index'
import { BairroPage } from './../Bairro/index'
import { Container, Content } from './styles'

export const Dashboard = () => {
  return (
    <Container>
      <Content>
        {/* <UFPage /> */}
        {/* <MunicipioPage /> */}
        <BairroPage />
      </Content>
    </Container>
  )
}
