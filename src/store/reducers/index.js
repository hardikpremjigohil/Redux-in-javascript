import { combineReducers } from 'redux';

import counterreducer from './Counterreducer' 
import personreducer from './Personreducer' 

const rootReducer = combineReducers({
    app : counterreducer,
    prsn : personreducer,
  });

  export default rootReducer;
