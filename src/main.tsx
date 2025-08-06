import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import { CocktailsPage } from './pages/CocktailsPage.tsx'
import './index.css'
import { GalleryPage } from './pages/GalleryPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cocktails" element={<CocktailsPage />} />
      <Route path="/galerie" element={<GalleryPage />} />
    </Routes>
  </BrowserRouter>
)