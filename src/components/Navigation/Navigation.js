import React, {useState} from 'react'; 
import {NavLink} from 'react-router-dom';
import './Navigation.scss'; 

const Navigation = props  => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const mobileToggleMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    return <div className="navigation-container">
        <div className="menu-icon" onClick={() => mobileToggleMenu()}>
            <i className="fa fa-bars"></i>
        </div>
        <ul className={`list-container ${mobileMenu ? 'show' : 'hide'}`}>
        {props.MenuItems.length > 0 ? (
            props.MenuItems.map(item => (
                <li className="list-item" key={item.id}>
                    <NavLink className="item-link" to={item.link}>
                        {item.item}
                    </NavLink>
                </li>
            ))
        ) : (
          <li className="nav-item">
            No Items
          </li>
        )}
        </ul>
    </div>
}

export default Navigation;
