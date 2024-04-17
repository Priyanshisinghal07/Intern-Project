import Registration from './Components/Registration'
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Components/Login'

function App() {
  return (
 <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Registration/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>
</BrowserRouter>
 </>
  );
}

export default App;
