import logo from "./logo.svg"
import './App.css';
import React from 'react';


class App extends React.Component {
  person = {
    FullName: "Sara",
    bio:"Jjj",
    imgSrc:{logo},
    profession:"Ingenieur"
  };
 state={etat:true};

change=()=>{if(this.state.etat) return (this.setState({etat:false})) 
else return(this.setState({etat:true}))};

  render(){
    return (<div>
     
      <button onClick ={() => this.change()} >
     Show/Hide
    </button>
    {(this.state.etat) ? (

  <div>

  <h1>{this.person.FullName}</h1>
  <h2>{this.person.bio}</h2>
  <h3>{this.person.profession}</h3>
  

  </div>
      ) : (
        <h1></h1>
      )}

    </div>
      );
  }
}


export default App;
