import logo from './logo.svg';
import './App.css';
// import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbarlogin from './components/Navbarlogin';
//import employeeform from './components/employeeform';
import Employeelist from './components/Employeelist';
import Employeeform from './components/Employeeform';
// import Mj from './components/Mj';
function App() {
  return (
     
    
    <div>
      {/* <Navbarlogin/> */}
    <BrowserRouter>
      <Routes>
         <Route path='/' element ={<Navbarlogin/>} ></Route> 
         <Route path='/employeelist' element={<Employeelist/>}></Route>
         
        <Route path='/newemployee' element={<Employeeform/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>

  );
}

export default App;
