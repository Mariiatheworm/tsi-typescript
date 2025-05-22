import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import MainLayout from "./layouts/MainLayout"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/profile" element={<Profile />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
