//started my app.js
import React, { Component } from "react";
import ContractCard from "./ContractCard";
import Decrement from"./Decrement";

import ".//App.js";

// class HelloWorld extends Component {
//   render() {
//     return <h1> Hello World! </h1>;
//   }
// }

// class HelloFriend extends Component{
//   constructor(props){
//     super(props);
//     this.state ={
//       name: props.name,
//     };
  
//   setTimeout(this.updateName.bind(this), 2000);
// }

 
//   updateName(){
//     this.setState ({ name: "Jeff"});
//   }

//   render(){
//     return <h1> Hello {this.state.name} </h1>;
//   }
// }
// <HelloWorld /> (instead Contractcard line at bottom)
// <HelloFriend name ="Tom" />
class App extends Component {
  render(){
    return (
    <>
    {/* <ContractCard name= "John" 
    mobile="2125555555" 
    work="0000121222"
    email="hello.com"
    /> */}
    <Decrement start = {5} />
    <Decrement start = {15} />
    <Decrement start = {25} />
    </>

    );
  }

}


export default App;

//testing 