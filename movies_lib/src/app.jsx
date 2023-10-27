import './app.css'

import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'


export function App() {
  return (
    <div className='App'>
      <Navbar />
      <h2>Top Movies</h2>
      <Outlet />
    </div>
  )
}

export default App