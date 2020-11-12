
import React from 'react';

class App extends React.Component {

  state = {
    seconds : 0,
    min : 0 ,
    hours : 0,
    val : true ,
    timerID : 0
  }



  startCounter = () => {
    this.setState(
      prevState => ({
        seconds : prevState.seconds + 1
      })
    )
    
    if(this.state.seconds === 60){
      this.setState({seconds : 0})
      this.setState({min : this.state.min + 1})
    }
    if(this.state.min === 60){
      this.setState({min : 0})
      this.setState({hours : this.state.hours + 1})
    }
    this.setState({
      timerID : setTimeout(this.startCounter , 1)
    })
    
  }

  stopCounter = () => {
    clearTimeout(this.state.timerID)
  }

  clearCounter = () => {
    clearTimeout(this.state.timerID)
    this.setState({
      seconds : 0 ,
      min : 0 ,
      hours : 0
    });
  }
  render(){
    
    return(
      <div className="name">
        <h2>
          {this.state.hours}:{this.state.min}:{this.state.seconds}
        </h2>
        <Button onClick = {this.startCounter}>
          Start
        </Button>

        <Button onClick = {this.stopCounter}>
          Stop !
        </Button>

        <Button onClick = {this.clearCounter}>
          Clear
        </Button>
      </div>
    );
  }
}

let Button =(props) => {
  return (
    <button onClick = {props.onClick}>
      {props.children}
    </button>
  );
}
export default App;
