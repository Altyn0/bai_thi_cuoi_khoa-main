import './App.css';
import HomeScreen from './screens/HomeScreen';
import Active from './screens/Active';
import Complete from './screens/Complete';
import { Routes, Route, BrowserRouter, } from 'react-router-dom'
import { Link } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter  >
      <h1 style={{ textAlign: 'center' }}>#Todo</h1>
      <div className='link' style={{ fontSize: '100', display: 'flex', justifyContent: 'space-around', margin:'2%',}}>
       
        <Link to='/'>All</Link>
        <Link to='/Active'>Active</Link>
        <Link to='/Complete'>Complete</Link>
       
      </div>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/Active' element={<Active />} />
        <Route path='/Complete' element={<Complete />} />
      </Routes>

    </BrowserRouter >

  );
}

export default App;
