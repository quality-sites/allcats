import React from 'react';
import {connect} from 'react-redux';
import './TagFilter.scss';
import {tags} from "../../data/config";
import {addTagToFilter, removeTagFromFilter} from "../../actions";


const TagFilter = (props) => {

    const {dispatch, tagItemsCount} = props;
    const handleSelectBox = (e) => {
        const name = e.target.name;
        if(e.target.checked) {
            dispatch(addTagToFilter(name));
        } else {
            dispatch(removeTagFromFilter(name));
        }
    };

    return (
        <div className="card mb-3">
            <div className="card-header">
                <h3>Tags</h3>
            </div>
            <ul className="list-group flex-row flex-wrap">
                {tags.map(tag => (
                    <li className="list-group-item flex-50" key={tag}>
                        <label className="custom-checkbox text-capitalize"> {tag} ({tagItemsCount[tag]})
                            <input type="checkbox"
                                    name={tag}
                                    className="custom-checkbox__input" onInput={handleSelectBox}/>
                            <span className="custom-checkbox__span"></span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );

};

const mapStateToProps = (state) => {
    const tagItemsCount = {};
    state.shop.products.forEach(p => {
        tagItemsCount[p.tag] = tagItemsCount[p.tag] + 1 || 1;
    });
    return {
        tagItemsCount
    }
};

export default connect(mapStateToProps)(TagFilter);