import { FC } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './App'
import Register from './pages/auth/Register'
import NotFound from './pages/NotFound'

interface RouterProps {}

const AppRouter: FC<RouterProps> = (): JSX.Element => (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound message='なし' />} />
        </Routes>
    </HashRouter>
)

export default AppRouter