import React from "react";
import CowList from "./CowList"
import exampleData from "./exampleData"

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      list: exampleData
    }
  };
  render() {
    return (
    <div>
      <header className="title">
        <h1>Cow List</h1>
      </header>
      <div className="cowList">
      <table>
        <CowList cows={this.state.list}/>
       </table>
      </div>
    </div>
    );
  }
}
export default App;
