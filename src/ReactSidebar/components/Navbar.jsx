import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons';          // all icons is here...

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{color:'#EB455F'}}>
    <div className="navbar">
      <Link to='#' className='menu-bars'>   {/* I Wil Update '/' to '#' */}
        <FaBars onClick={showSidebar} />
      </Link>
    </div>
    <nav className={ sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className="nav-menu-items" onClick={showSidebar}>
        <li className="navbar-toggle">
          <Link to='#' className="menu-bars">   {/* I Wil Update to '#' */}
            <AiOutlineClose/>
          </Link>
        </li>
        {SidebarData.map((item, index)=>{
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icons} <span>{item.tittle}</span>
              </Link>
            </li>
            /**
             *! How Works Maps
             *<li className="nav-text">
                  <a href="/"> icon <span> Home </span> </a>
              </li>  
            **/
          )
        })}
      </ul>
    </nav>
    </IconContext.Provider>
    </>
  );
}

export default Navbar;
