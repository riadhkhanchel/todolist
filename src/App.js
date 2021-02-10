import React, { Component } from "react";
import AddItems from "./AddItems/AddItems";
import ListItems from "./ListItems/ListItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems : [{id:Math.random(),item:"task1"}, {id:Math.random(),item:"task2"}]
    };
      }

      handleItems =(item)=>{this.setState({listItems:this.state.listItems.concat({id:Math.random(),item:item})})}
      handledelete =(x)=>{this.setState({listItems:this.state.listItems.filter(el =>el.id!==x)})}

  render() {
    return (
      <div>
        <AddItems handleItems ={this.handleItems}/>
        <ListItems listItems ={this.state.listItems} handledelete={this.handledelete}/>
      </div>
    );
  }
}

export default App;
