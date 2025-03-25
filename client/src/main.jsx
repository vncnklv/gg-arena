import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import App from './App'

import './index.css'
import { AuthProvider } from './providers/UserProvider'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename='/gg-arena'>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
)
