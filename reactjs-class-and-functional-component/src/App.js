//import logo from './logo.svg';
import './App.css';
import React from 'react';

// class based component
class Firstcomponent extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>This my Child 1 Component - Class Component</h1>
      </div>
    )
  }
}
// class based component
class Secondcomponent extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>This my Child 2 Component - Class Component</h1>
        <Thirdcomponent></Thirdcomponent>
      </div>
    )
  }
}

// class based component
class Thirdcomponent extends React.Component{
  render(){
    return(
      <div className="App">
        <ol>
          <li>
            <h1>This my Child 3 Component - Class Component</h1>
          </li>
        </ol>
      </div>
    )
  }
}

//Function based component 
function Forthcomponent(){
  return( 
  <div>
    <h1>This my child 4 Component - Function Component</h1>
    <ol>
      <li>
        <Fifthcomponent></Fifthcomponent>
      </li>
    </ol>  
  </div>  
  );
}

//Function based component
function Fifthcomponent(){
  return(
    <h1>This my child 5 Component - Function Component</h1>
  );
}

//This my parent component 
//Function based component

function App() {
  return (
    <div className="App">
      <ol>
        <li>
            <h1>This my Parent Component</h1>
        </li>
        <ol>
          <li><Firstcomponent></Firstcomponent></li>
          <li><Secondcomponent></Secondcomponent></li>
          <li><Forthcomponent></Forthcomponent></li>
        </ol>
      </ol>
    </div>
  );
}

export default App;
