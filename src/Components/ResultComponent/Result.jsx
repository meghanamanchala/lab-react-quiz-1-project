import { Component } from "react";
import "./Result.css";
class Result extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <h1 className="result-heading">Result</h1>
        <div className="main-container-2">
           <h3 className="p1">You need more Practice!</h3>
            <h2 className="p2">Your Score is 20%</h2>
            <div className="results-acc-result">
                <div className="result-acc-ques">
                <h5 className="q1">Total number of questions</h5>
                <h5 className="a1">15</h5>
                </div>
                <div className="result-acc-ques">
                <h5 className="q1">Number of attempted questions</h5>
                <h5 className="a1">9</h5>
                </div>
                <div className="result-acc-ques">
                <h5 className="q1">Number of correct answers</h5>
                <h5 className="a1">3</h5>
                </div>
                <div className="result-acc-ques">
                <h5 className="q1">Number of Wrong answers</h5>
                <h5 className="q1">6</h5>
                </div>
            </div>
            </div>
            <div className="play-again-back-home-btns">
                <button className="playAgain">Play Again</button>
                <button className="backToHome">Back to home</button>
            </div>
      
      </>
    );
  }
}
export default Result;
