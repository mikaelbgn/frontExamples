import React, {useState} from 'react';
import './App.css';
import Navbar from './Navbar';
import NavbarToggle from './NavbarToggle';

function App(){

  const [isVisible, setVisible] = useState(false);
 

  const toggleNav = () =>{
    setVisible(!isVisible);
  }

  return(
   <div>
    <NavbarToggle onClickFct={toggleNav} visible={!isVisible} />
    <Navbar visible={isVisible} />
   </div>
  );
}

export default App;
