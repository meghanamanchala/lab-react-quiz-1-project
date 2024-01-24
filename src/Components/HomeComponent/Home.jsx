import { Component } from "react";
import "./Home.css";
class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="Home">
          <h1 className="heading-home">Quiz App</h1>
          <button className="play-btn-home"> Play </button>
        </div>
      </>
    );
  }
}
export default Home;
