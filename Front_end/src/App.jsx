import {Routes} from 'react-router-dom';
import './App.css'
import Home from './Pages/home/Home.jsx';
import Login from './Pages/login/Login.jsx';
import SignUp from './Pages/signup/SignUp.jsx';

function App() {
  

  return (
  <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
      <route path='/' element={<Home/>}/>
      <route path='/login' element={<Login/>}/>
      <route path='/signup' element={<SignUp/>}/>
    </Routes>
    

  </div>
  );
}

export default App
