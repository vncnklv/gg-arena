import Header from './components/header/Header'
import { Routes, Route } from 'react-router'

import Tournaments from './components/tournaments/Tournaments'
import Leaderboard from './components/leaderboard/Leaderboard'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Games from './components/games/Games'
import Home from './components/home/Home'
import Profile from './components/profile/Profile'

import './App.css'
import Footer from './components/footer/Footer'

function App() {
    return (
        <main>
            <Header />

            <Routes>
                <Route index element={<Home />} />
                <Route path='/tournaments' element={<Tournaments />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
                <Route path='/games' element={<Games />} />
                <Route path='/profile' element={<Profile />} />

                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>

            <Footer />
        </main>
    )
}

export default App
