import {useState} from 'react';
import HamburgerMenu from "./HamburgerMenu";
import NavDisp from './NavDisp';

const Navbar = () => {

    const [hamburgerVal,setHamburgerVal] = useState(true);
    
    const getVal = (val) => {
        setHamburgerVal(val);
    }

    const closehamMenu = (val) => {
        setHamburgerVal(val)
    }

  return (
    <>
        {hamburgerVal?<NavDisp ongetHamburgerVal={getVal}/>:<HamburgerMenu onhandleclose = {closehamMenu}/>}
    </>
  );
};

export default Navbar;
