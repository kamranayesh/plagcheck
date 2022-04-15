import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/card.scss";

const AssignmentsCard = (props) => {
  const navigate = useNavigate();
  const { questionNumber, question } = props.item;
  //  { state: { duplicateLifecycle
  // navigate("/blog", { state: { author_name: "John Doe" } });

  return (
    <div
      className="cardBox"
      onClick={() => {
        navigate("/teacherhome/classes/assignment/assignnum", {
          state: { item: props.item, code: props.code },
        });
      }}
    >
      <div className="cardBoxHeader">
        <img
          className="cardBoxImg"
          src={require("../Images_copy/blackboard.png")}
          height="40"
        ></img>
        <div className="cardTitle2">{questionNumber}</div>
      </div>
      <div className="cardBoxBody">
        <div>{question}</div>
      </div>
      {/* <div className="cardBoxFooter"></div> */}
    </div>
  );
};

export default AssignmentsCard;
