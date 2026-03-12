import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/organisms/MainLayout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import Teleprompter from './pages/Teleprompter'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="history" element={<History />} />
          <Route path="teleprompter" element={<Teleprompter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
