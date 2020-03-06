import React from 'react';
import {bookAVisitContent} from '../../data/config';
import './BookAVisit.scss';

const BookAVisit = () => {
    return (
        <React.Fragment>
            <div className="container book-a-visit-container">
                <div className="row">
                    <h2 className="title">{bookAVisitContent.title}</h2>
                    <p className="description">{bookAVisitContent.content}</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default BookAVisit;
