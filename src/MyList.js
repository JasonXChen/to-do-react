import React, { Component } from "react";
import "./App.css";
import ListItem from "./ListItem";

class MyList extends Component {
  render() {
    const todoItems = this.props.theList.map((item, index) => {
      return (<ListItem task={item} key={index} />);
    })
    return (
      <div class="mt-3 text-center">
        <h1 class="text-3xl font-bold">Things I should stop procrastinating:</h1>
        <ul >
          {todoItems}
        </ul>
      </div>
    );
  }
}

export default MyList;
