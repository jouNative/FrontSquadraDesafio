import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './page/Dashboard'
import { UFPage } from './page/UF'
import { MunicipioPage } from './page/Municipio'
import { BairroPage } from './page/Bairro'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/uf" element={<UFPage />} />
      <Route path="/municipio" element={<MunicipioPage />} />
      <Route path="/bairro" element={<BairroPage />} />
    </Routes>
  )
}
