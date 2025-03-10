import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/Home"
import SignupPage from "./pages/Signup"
import LoginPage from "./pages/Login"
import SettingsPage from "./pages/Settings"
import ProfilePage from "./pages/Profile"
// import {useAuthStore} from "./store/useAuthStore"

function App() {
// const {authUser} =  useAuthStore();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

    </div>
  )
}

export default App
