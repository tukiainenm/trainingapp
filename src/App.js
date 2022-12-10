import './App.css';
import Customers from './components/Customers';
import Trainings from './components/Trainings';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div classname='App'>
      <BrowserRouter>
        <Link to='/'>Customers</Link>{''}
        <Link to='/trainings'>Trainings</Link>{''}

        <Routes>
          <Route path='/' element={<Customers />} />
          <Route path='/trainings' element={<Trainings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
