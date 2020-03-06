import React from 'react';
import {donateContent} from '../../data/config';
import './Donate.scss';

const Donate = () => {
    return (
        <React.Fragment>
            <div className="container donate-container">
                <div className="row">
                    <h2 className="title">{donateContent.title}</h2>
                    <p className="description">{donateContent.content}</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Donate;
