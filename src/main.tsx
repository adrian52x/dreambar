import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import { DespreNoiPage } from './pages/DespreNoiPage.tsx'
import { ServiciiPage } from './pages/ServiciiPage.tsx'
import { OfertePage } from './pages/OfertePage.tsx'
import { RecenziiPage } from './pages/RecenziiPage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/old" element={<AppBackup />} />
      <Route path="/cocktails" element={<CocktailsPage />} />
      <Route path="/galerie" element={<GalleryPage />} /> */}
      <Route path="/despre-noi" element={<DespreNoiPage />} />
      <Route path="/servicii" element={<ServiciiPage />} />
      <Route path="/oferte" element={<OfertePage />} />
      <Route path="/recenzii" element={<RecenziiPage />} />
    </Routes>
  </BrowserRouter>
)