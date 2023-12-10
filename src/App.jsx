import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import './App.css'
import authService from './appwrite/auth.js'
import {login,logout} from './store/authSlice.js'
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';


function App() {
  const [loading, setloading] = useState(true);
  const dispatch =useDispatch();

  useEffect(() => {
    
authService.getuser().then((data)=>{
  if (data) {
    dispatch(login({data}))
  }else{
    dispatch(logout())
  }
}).finally(()=>setloading(false))
  }, []);

  return loading ? (null) : (
    <div className=' min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className=' w-full block'>
        <Header/>
        <main>

        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App
