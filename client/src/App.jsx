import Header from './components/header/Header'
import { Routes, Route, Navigate } from 'react-router'

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
import TournamentDetailsContent from './components/tournament-details/tournament-details-content/TournamentDetailsContent'

import './App.css'
import TournamentParticipants from './components/tournament-details/tournament-details-content/tournament-participants/TournamentParticipants'
import GuestRoute from './components/guest-route/GuestRoute'

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
                <Route path='tournament/:id' element={<TournamentDetails />} >
                    <Route index element={<Navigate replace to='details' />} />
                    <Route path='details' element={<TournamentDetailsContent />} />
                    <Route path='participants' element={<TournamentParticipants />} />
                </Route>

                <Route element={<GuestRoute />}>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>

                <Route element={<ProtectedRoute redirectPath='/login'/>}>
                    <Route path='logout' element={<Logout />} />
                </Route>

            </Routes>

            <Footer />
        </main>
    )
}

export default App
