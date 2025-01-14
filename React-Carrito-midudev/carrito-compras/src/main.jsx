
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FilterersProvider } from './context/Filters.jsx'

createRoot(document.getElementById('root')).render(
  <FilterersProvider>
    <App />
  </FilterersProvider>,
)
