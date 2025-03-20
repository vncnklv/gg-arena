import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import App from './App'

import './index.css'
import { AuthProvider } from './providers/UserProvider'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <BrowserRouter basename='/gg-arena'>
                <App />
            </BrowserRouter>
        </AuthProvider>
    </StrictMode>
)
