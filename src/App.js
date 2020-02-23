import React, { Component }  from 'react';
import  './App.css';
import Person from './Person/personComponent'
import AddPerson from './Person/AddPerson'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import{onIncrementCounter ,ondecrementCounter,onADD5,onSUBTRACT5,onAddedPerson} from './store/actions/counteraction'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }, 
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div>
          <div>
            <h1>Value:-{this.props.counter}</h1>
          </div>
          <div >
            <Button variant="contained" className={classes.button} onClick={this.props.onIncrementCounter}>
              Increment
            </Button>
            <Button  variant="contained" className={classes.button} onClick={this.props.ondecrementCounter}>  {/*Without Argument */}
              Decrement
            </Button>
            <Button variant="contained" className={classes.button} onClick={() => this.props.onADD5(5)}>    {/* with Arguments */}      
              Add 5
             </Button>
            <Button variant="contained" className={classes.button} onClick={this.props.onSUBTRACT5}>         {/* With Static Argument As Line -77 Below */}
              Subtract 5
            </Button>
          </div>
        </div>
        
        <div>
          <AddPerson personAdded={this.props.onAddedPerson} />             {/* argument comes from AddPerson Component as shaw in  Line-78 Below*/}
          {this.props.persons.map(person => (
                    <div>
                        <h3>-------------------------------</h3>
                        <h3>name={person.name} </h3>
                        <h3>age={person.age}  </h3>
                    </div>
                ))}
        </div>
        <div>
          <hr />
          <Person/>   {/*  New Component for connect Reducer */}
        </div>    

      </div>
    );
  }
}


const mapStateToProps = ({ app})=> {
     const {counter , persons } = app
     return {counter , persons}
  //   return {
  //     counter: state.counter,
  //     persons: state.persons
  // };
}; 

//import * as actionTypes from './store/actions/actions' 

// const mapDispatchToProps = dispatch => {
//   return {
//       onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
//       ondecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
//       onADD5: (val) => dispatch({type: actionTypes.ADD5,val : val}),
//       onSUBTRACT5: () => dispatch({type: actionTypes.SUBTRACT5,val : 5}),
//       onAddedPerson: (name, age) => dispatch({type: actionTypes.ADD_PERSON, personData: {name: name, age: age}}),
//   };
// };

//export default  (connect(mapStateToProps,mapDispatchToProps))(withStyles(styles)(App));

export default  (connect(mapStateToProps,{onIncrementCounter ,ondecrementCounter,onADD5,onSUBTRACT5,onAddedPerson}))(withStyles(styles)(App));