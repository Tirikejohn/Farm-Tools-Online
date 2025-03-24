import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProduct from './components/AddProduct';
import GetProduct from './components/GetProduct';
import SingleProduct from './components/SingleProduct';
import Footer from './components/Footer';
import "bootstrap/dist//css/bootstrap.min.css"
import "bootstrap/dist//js/bootstrap.min.js"
function App() {
  return (
    <Router>

    <div className="App">
      <header className="App-header">
        <h1>Farm Tools-Online</h1>
      </header>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/Addproduct' element={<AddProduct/>}/>
        <Route path='/' element={<GetProduct/>}/>
        <Route path="/singleproduct" element={<SingleProduct/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
