import React from 'react';
import {catDeliveryContent} from '../../data/config';
import './CatDelivery.scss';

const Donate = () => {
    return (
        <React.Fragment>
            <div className="container cat-delivery-container">
                <div className="row">
                    <h2 className="title">{catDeliveryContent.title}</h2>
                    <p className="description">{catDeliveryContent.content}</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Donate;