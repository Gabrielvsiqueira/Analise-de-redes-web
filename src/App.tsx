import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyForms from './pages/MyForms';
import Graficos from './pages/Graficos';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MyForms/>}/>
          <Route path='/graficos' element={<Graficos />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
