import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Homepage'
import MyForms from './pages/MyForms'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/MyForms' element={<MyForms/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
