import { Navigate, Route, Routes } from "react-router-dom"
import { Loader } from "lucide-react"
import Navbar from "./components/Navbar"
import HomePage from "./pages/Home"
import SignupPage from "./pages/Signup"
import LoginPage from "./pages/Login"
import SettingsPage from "./pages/Settings"
import ProfilePage from "./pages/Profile"

import { useEffect } from "react"
import { useAuthStore } from "./store/useAuthStore"
import { useThemeStore } from "./store/useThemeStore"

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const {theme} = useThemeStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth])

  console.log({ authUser })
  if (isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
  )

  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>

    </div>
  )
}

export default App
