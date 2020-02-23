import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
    COUNTER_ADD5,
    COUNTER_SUBTRACT5,
    COUNTER_ADD_PERSON,
} from '../actions/actionTypes'

const initialState = {
    counter: 0,
    name:'Initial Name',
    persons: [],
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case COUNTER_INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case COUNTER_DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case COUNTER_ADD5:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case COUNTER_SUBTRACT5:
            return {
                ...state,
                counter: state.counter - action.val
            } 
        case COUNTER_ADD_PERSON:
            console.log('ADD_PERSON Called')
            const newPerson = {
                
                name: action.personData.name,
                age: action.personData.age
            }
            return {
                ...state,
                persons: state.persons.concat( newPerson )
            }
    }
    return state;
};

export default reducer;