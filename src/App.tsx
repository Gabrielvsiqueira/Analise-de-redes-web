import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import MyForms from './pages/MyForms';
import Graficos from './pages/Graficos';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/MyForms' element={<MyForms/>}/>
          <Route path='/graficos' element={<Graficos />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
