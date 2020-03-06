import React from 'react'; 
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {websiteDetails} from '../../data/config';
import Home from '../../assets/Allcats_home.svg';
import Logo from '../../assets/Allcats_logo.svg';
import Basket from '../../assets/Allcats_basket.svg';
import './Header.scss'; 
import Navigation from '../Navigation/Navigation';

const Header = ({cartLength}) => {

    const MenuItems = [{
        id: 1,
        item: 'Cat Delivery',
        link: '/cat-delivery'
    },{
        id: 2,
        item: 'Book a Visit',
        link: '/book-a-visit'
    },{
        id: 3,
        item: 'Donate',
        link: '/donate'
    },{
        id: 4,
        item: <><img src={Basket} alt="Basket" />{cartLength ? `(${cartLength})`: ''} </>,
        link: '/cart',
    },{
        id: 5,
        item: <img src={Home} alt="Home" />,
        link: '/'
    }];

    return (
        <nav className="header-nav navbar navbar-expand-lg fixed-top">
            <div className="container">
                <NavLink className="logo-brand" to="/">
                    <img src={Logo} alt={websiteDetails.brandName} />
                </NavLink>
                <Navigation MenuItems={MenuItems} />
            </div>
        </nav>
    );
};


const mapStateToProps = (state) => {
  return {
      cartLength: state.shop.cart.length
  }
};

export default connect(mapStateToProps, null)(Header);
