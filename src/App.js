/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homescreen from './Screens/Homescreen';
import  Cart from "./Screens/Cart";
import Registerscreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreens";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{backgroundImage: 'url("https://scontent-mxp1-1.xx.fbcdn.net/v/t39.30808-6/238387957_4889805811034040_2467701335978513974_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=sDagL3xEzUUAX-TO4Wu&_nc_ht=scontent-mxp1-1.xx&oh=00_AfCmyHA2wW-Qeafk3yPHdDFxUpIMF8yfsTksbm4FK9KMvw&oe=64692EA5")'}}>
      <Navbar />
    
      <Router>
        <Routes>
            <Route path="/" element={<Homescreen/>}>
            </Route>
            <Route path="/Register" element={<Registerscreen/>}>
            </Route>
            <Route path="/Login" element={<LoginScreen/>}>
            </Route>
            <Route path="/Cart" element={<Cart/>}></Route>
        </Routes>
    </Router>
      

    </div>
  );
}
export default App;