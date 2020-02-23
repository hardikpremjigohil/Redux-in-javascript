import {
    PERSON_NAME_UPDATE,
} from './actionTypes'


//269 Handling Asynchronous Code Video-269 (Person folder)

export const saveResult = (value) => {
    return {
        type: PERSON_NAME_UPDATE,
        name : value
    };
};
export const nameUpdate = ( val ) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(saveResult(val));
        }, 500 );
    }
};



export const onnamechange = (name) => async dispatch =>{
    dispatch( nameUpdate(name) )
}
