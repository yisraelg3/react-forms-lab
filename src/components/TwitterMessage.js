import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
      //counter: 0
    };
  }

  handleChange = (event) => {
    //console.log(event.target.value.length )
    
    this.setState({
      message: event.target.value
      //counter: newCounter
    })
  }

  render() {
    //console.log(this.state.message)
    let newCounter = this.props.maxChars - this.state.message.length 
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
       {newCounter}
      </div>
    );
  }
}

export default TwitterMessage;
