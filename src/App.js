import './App.css';
import Topbar from './components/header/Topbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Profkom from './pages/Profkom';
import Documents from './pages/Documents';
import TrustBox from './pages/TrustBox' 
import Contacts from './pages/Contacts'
import Navbar from './components/header/Navbar';
import Chummery from './pages/Сhummery';
import Footer from './components/header/Footer'



function App() {
  return (
      <BrowserRouter>
      <Topbar/>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/profkom" element={<Profkom/>}/>
            <Route path="/documents" element={<Documents/>}/>
            <Route path="/chummery" element={<Chummery/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/trustBox" element={<TrustBox/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
     
  );
}

export default App;
