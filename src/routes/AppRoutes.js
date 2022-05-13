import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Articles } from 'pages/Articles'
import { Company } from 'pages/Company'
import { Home } from 'pages/Home'
import { NavBar } from 'components/NavBar'
import { Footer } from 'components/Footer'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route path='/company' element={<Company />} />
				<Route path='/articles' element={<Articles />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}
