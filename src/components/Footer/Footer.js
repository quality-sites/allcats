import React from 'react';
import {websiteDetails} from '../../data/config';

const Footer = () => {
    return (
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">{websiteDetails.copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;