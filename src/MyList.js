import React, { Component } from "react";
import "./App.css";
import ListItem from "./ListItem";

class MyList extends Component {
  state = {
    taskArray: this.props.theList,
    newItem: ""
  }
  clearList = () => {
    console.log("clearing list");
    this.setState({
      taskArray: []
    });
  }
  handleChange = e => {
    this.setState({
      newItem: e.target.value
    })
  }
  addItem = e => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem: ""
      };
    })
  }
  render() {
    const todoItems = this.state.taskArray.map((item, index) => {
      return (<ListItem task={item} key={index} />);
    })
    return (
      <div className="flex flex-col items-center mt-3">
        <h1 className="text-3xl text-center font-bold w-4/12">Things I should stop procrastinating:</h1>
        <form onSubmit={this.addItem} className="mt-2">
          <label htmlFor="item">New task:</label>
          <input id="item" type="text" value={this.state.newItem} onChange={this.handleChange} 
          className="mx-1 bg-black border rounded"
          />
          <button type="submit" className="hover:underline">Add to list</button>
        </form>
        <ul className="list-disc mt-1 w-fit">
          {todoItems}
        </ul>
        <button onClick={this.clearList} className="border rounded px-2 py-1 mt-2 bg-green-500 hover:bg-green-700">Finished the list!</button>
      </div>
    );
  }
}

export default MyList;
