import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Link to="/pomodoro" style={{ fontSize: '1.25rem', color: '#123dd8', textDecoration: 'underline' }}>
        Go to Pomodoro Screen
      </Link>
    </>
  )
}

export default App
