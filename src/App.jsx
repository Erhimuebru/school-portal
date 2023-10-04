import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ExamScoresPage from './components/ExamScorePage/ExamScorePage';
import ReviewComponent from './components/ReviewComponent/ReviewComponent';


function App() {


  return (
    <>
  
{/* <Navbar/>  */}
<Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/sign-in" element={<Signin/>}/>
              <Route path="/dashboard" element={ <Dashboard/> }/>
              <Route path="/exam-scores" element={<ExamScoresPage/> }/>
              <Route path="/reviews" element={ <ReviewComponent/> }/>

               
          </Routes>
          <Footer/>
  
    </>
  )
}

export default App
