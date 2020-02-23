import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {onnamechange}  from '../store/actions/personaction' 

import {connect } from  'react-redux'

class Person extends Component{
    constructor(props){
        super(props);
        this.state={
            name:''
        }
    }
    handleChange=()=>{
        this.setState({
            name :event.target.value,
        })
        console.log(this.state.name)
    }
    render(){
        return(
            <div>
                <h1>Person Folder</h1>
                <input onChange={this.handleChange}  />
                <Button variant="contained"  onClick={()=>this.props.onnamechange(this.state.name)}>
                    submit Name
                </Button>
                <p>Name:-{this.props.name}</p>
                {console.log(this.props.name)}
                <h1>End Person Folder</h1>
            </div>
        )
    }
}


const maptostate=({prsn})=>{
    const {name} = prsn
    return { name }
    // return{
    //     name : state.name,
    // }
}

export default connect(maptostate,{onnamechange})(Person);