import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage'
import ProfilePage from './pages/ProfilePage'
import HistoryPage from './pages/HistoryPage'
import AppointmentsPage from './pages/AppointmentsPage'
import BookAppointmentPage from './pages/BookAppointmentPage'
import AddPetPage from './pages/AddPetPage'
import VetsPage from './pages/VetsPage'
import HealthTipsPage from './pages/HealthTipsPage'

function App() {
  const location = useLocation()
  const isAuthPage = location.pathname === '/auth'

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="/vets" element={<VetsPage />} />
          <Route path="/health-tips" element={<HealthTipsPage />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </>
  )
}

export default App
