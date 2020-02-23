import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
    COUNTER_ADD5,
    COUNTER_SUBTRACT5,
    COUNTER_ADD_PERSON,
} from './actionTypes'


export const increment = () => {
    return {
        type: COUNTER_INCREMENT
    };
};
export const decrement = () => {
    return {
        type: COUNTER_DECREMENT
    };
};
export const add5 = (value) => {
    return {
        type: COUNTER_ADD5,
        val : value  
    };
};
export const subtract5 = (value) => {
    return {
        type: COUNTER_SUBTRACT5,
        val : value
    };
};
export const add_person = (name,age) => {
    return {
        type: COUNTER_ADD_PERSON,
        personData: {name: name, age: age}
    };
};



export const onIncrementCounter = () => async dispatch =>{
    dispatch( increment() )
}


export const ondecrementCounter = () => async dispatch =>{
    dispatch( decrement() )
}

export const onADD5 = (val) => async dispatch =>{
    dispatch( add5(val) )
}

export const onSUBTRACT5 = () => async dispatch =>{
    dispatch( subtract5(5) )
}

export const onAddedPerson = (name, age) => async dispatch =>{
    dispatch( add_person(name,age) )
}
 