import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import './vendor/datatables/dataTables.bootstrap4.min.css'
import './vendor/fontawesome-free/css/all.min.css'
import './css/sb-admin-2.min.css'
import Button from './Components/Button'
import Cards from './Components/Cards';
import Colors from './Components/Colors';
import Borders from './Components/Borders';
import Animation from './Components/Animation';
import Dashboard from './Components/Dashboard';
import Others from './Components/Others';
import Login1 from './Components/Login1';
import Register from './Components/Register';
import ForgetPassword from './Components/ForgetPassword';
import Error from './Components/404';
import Blank from './Components/Blank';
import Charts from './Components/Charts';
import Tables from './Components/Tables';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path='/button' element={<Button/>}/>
      <Route path='/cards' element={<Cards/>}/>
      <Route path='/colors' element={<Colors/>}/>
      <Route path='/borders' element={<Borders/>}/>
      <Route path='/animation' element={<Animation/>}/>
      <Route path='/others' element={<Others/>}/>
      <Route path='/login1' element={<Login1/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgetpass' element={<ForgetPassword/>}/>
      <Route path='/error' element={<Error/>}/>
      <Route path='/blank' element={<Blank/>}/>
      <Route path='/charts' element={<Charts/>}/>
      <Route path='/tables' element={<Tables/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
