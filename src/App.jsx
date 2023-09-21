import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {


  return (
    <>

<Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/sign-in" element={<Signin/>}/>
              <Route path="dashboard" element={ <Dashboard/> }/>
             
                
          </Routes>
    </>
  )
}

export default App
