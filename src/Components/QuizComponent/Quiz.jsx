import { Component } from "react";
import "./Quiz.css";
class Quiz extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="main-container">
          <div className="heading">
            <h1 className="heading-quiz">Question</h1>
          </div>
          <h3 className="number-count">1 of 15</h3>
          <div className="question">
            <p className="para-question">Which is the only mammal that can jump?</p>
          </div>
          <div className="optionsbtn-quiz">
            <div className="first-box">
            <button  className="option-1">Dog</button>
            <button className="option-2">Elephant</button>
            </div>
            <div className="second-box">
            <button  className="option-3">Goat</button>
            <button  className="option-4">Lion</button>
            </div>
          </div>
          <div className="prev-next-quit-btns">
            <button className="prev">Previous</button>
            <button className="nxt">Next</button>
            <button  className="quit">Quit</button>
          </div>
        </div>
      </>
    );
  }
}
export default Quiz;
