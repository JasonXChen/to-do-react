import React, { Component } from "react";
import "./App.css";
import ListItem from "./ListItem";

class MyList extends Component {
  render() {
    const todoItems = this.props.theList.map((item, index) => {
      return (<ListItem task={item} key={index} />);
    })
    return (
      <div class="flex flex-col items-center mt-3">
        <h1 class="text-3xl text-center font-bold w-4/12">Things I should stop procrastinating:</h1>
        <ul class="list-disc mt-1 w-fit">
          {todoItems}
        </ul>
      </div>
    );
  }
}

export default MyList;
