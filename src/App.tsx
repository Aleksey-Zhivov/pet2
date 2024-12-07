import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AuthForm } from './components/Auth'

function App() {

  return (
    <BrowserRouter>
      <AuthForm />
    </BrowserRouter>
  )
}

export default App
