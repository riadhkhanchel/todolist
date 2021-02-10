import React, { Component } from "react";

class AddItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    };
  }
  handleChange=(e)=>{this.setState({item:e.target.value})}
  render() {
    return (
      <div>
          Add a task
        <input onChange={this.handleChange}
         value={this.state.item} />
        <button onClick={()=> {this.props.handleItems(this.state.item);this.setState({item:""})}}> Add </button>
      </div>
    );
  }
}

export default AddItems;
