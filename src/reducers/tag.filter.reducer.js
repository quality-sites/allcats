import {ADD_TAG_TO_FILTER, REMOVE_TAG_FROM_FILTER} from "../actions";

export const  tagFilterReducer = (state = '', action) => {
    switch (action.type) {
        case ADD_TAG_TO_FILTER:
            if(state.includes(action.tag)) return state;
            return state += action.tag;
        case REMOVE_TAG_FROM_FILTER:
            const reg = new RegExp(action.tag, 'gi');
            return state.replace(reg, '');
        default:
            return state;
    }
};

