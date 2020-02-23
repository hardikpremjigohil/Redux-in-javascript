import { PERSON_NAME_UPDATE } from '../actions/actionTypes'

const initialState = {
    name:'Initial Name',
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case PERSON_NAME_UPDATE:
            return {
                ...state,
                name: action.name 
            }    
    }
    return state;
};

export default reducer;