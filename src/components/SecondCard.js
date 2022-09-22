import "./SecondCard.css";
import {BsHeadset}from "react-icons/bs";

function SecondCard(props) {
  return (
    <>
      <div className="cardno2">
        <div className="one">
        <BsHeadset className="calling-icon"/>
          <span className="span2">Total Calls</span>
          <br></br>
          <h1 className="h1num">346</h1>
          <a className="links" href="#">View Call Details</a>
        </div>

        <div className="two">
          <div className="child1">
             <span className="span2center">Average Meeting Time</span>
          <br></br>
          <h1 className="h1numcenter">00:05:29</h1>
          </div>
          <div className="child2">
          <span className="span2center">Average Customer Rating</span>
          <br></br>
          <h1 className="h1numcenter">4.6</h1>
          </div>
        </div>

        <div className="one">
        <span className="span2">Average Waiting Time</span>
          <br></br>
          <h1 className="h1num">{props.num}</h1>
         
        </div>
        <div className="four"></div>
      </div>
    </>
  );
}

export default SecondCard;
