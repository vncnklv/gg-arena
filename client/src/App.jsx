import Header from './components/header/Header'
import { Routes, Route } from 'react-router'

import Tournaments from './components/tournaments/Tournaments'
import Leaderboard from './components/leaderboard/Leaderboard'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Games from './components/games/Games'
import Home from './components/home/Home'
import Profile from './components/profile/Profile'
import Logout from './components/logout/Logout'
import Footer from './components/footer/Footer'

import './App.css'
import GamesAdd from './components/games-add/GamesAdd'

function App() {
    return (
        <main>
            <Header />

            <Routes>
                <Route index element={<Home />} />
                <Route path='tournaments' element={<Tournaments />} />
                <Route path='leaderboard' element={<Leaderboard />} />
                <Route path='games'>
                    <Route index element={<Games />} />
                    <Route path='add' element={<GamesAdd />} />
                </Route>
                <Route path='profile' element={<Profile />} />

                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='logout' element={<Logout />} />
            </Routes>

            <Footer />
        </main>
    )
}

export default App
