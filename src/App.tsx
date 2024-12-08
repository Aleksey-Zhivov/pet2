import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { AuthForm } from './components/Auth'
import { useCustomDispatch } from './services/store';
import { GeneralPage } from './pages/ganeral-page';


const AppRouter = () => {
  const navigate = useNavigate();
  const dispatch = useCustomDispatch();

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to ='/auth' replace />} />
        <Route path='/auth' element={<AuthForm />} />
        <Route path='/general' element={<GeneralPage />} />
      </Routes>
    </>
  )
}

export const App = () => {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
