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
import ProtectedRoute from './components/protected-route/ProtectedRoute'
import GamesAdd from './components/games-add/GamesAdd'
import TournamentAdd from './components/tournament-add/TournamentAdd'
import TournamentDetails from './components/tournament-details/TournamentDetails'

import './App.css'

function App() {
    return (
        <main>
            <Header />

            <Routes>
                <Route index element={<Home />} />
                <Route path='leaderboard' element={<Leaderboard />} />
                <Route path='games'>
                    <Route index element={<Games />} />
                    <Route path=':id' element={<Tournaments />} />

                    <Route element={<ProtectedRoute redirectPath='/games' />}>
                        <Route path=':id/add' element={<TournamentAdd />} />
                    </Route>

                    <Route element={<ProtectedRoute redirectPath='/games' />}>
                        <Route path='add' element={<GamesAdd />} />
                    </Route>
                </Route>
                <Route path='profile' element={<Profile />} />
                <Route path='tournament/:id' element={<TournamentDetails />} />

                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='logout' element={<Logout />} />

            </Routes>

            <Footer />
        </main>
    )
}

export default App
