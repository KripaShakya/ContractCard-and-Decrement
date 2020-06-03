import React, { Component } from "react";
import propsTypes from "prop-types";

class Decrement extends Component{
    constructor(props){
        super(props);
            this.state ={ number: props.start };   
    }

    handleDecrement = (state) => {
        this.setState({ number: state.number - 1 });
    };

    render(){
        return (
         <div>
            {this.state.number}{" "}
             <button onclick={() => this.handleDecrement}> 
             decrement 
             </button>
        </div>
        ); 
    }
}

Decrement.propTypes = {
    start: PropTypes.number.isRequired,
};

export default Decrement;