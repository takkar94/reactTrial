import logo from './logo.svg';
import Menu from './components/MenuComponent';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import  {DISHES} from './shared/dishes';
import { useState } from 'react';


function App() {

  const [count, setCount] = useState([DISHES]);
  return (
    <div >
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={count}/>
    </div>
  );
}

export default App;
