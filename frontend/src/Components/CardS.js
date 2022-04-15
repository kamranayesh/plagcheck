import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/card.scss";

const CardS = (props) => {
  const navigate = useNavigate();
  const { name, title, code } = props.item;

  return (
    <div
      className="cardBox"
      onClick={() => {
        navigate("/studenthome/classes/assignment", {
          state: props.item,
        });
      }}
    >
      <div className="cardBoxHeader">
        <img
          className="cardBoxImg"
          // url={"../Images_copy/bonbon-child-at-math-lesson-with-calculator-and-apple-1.png"}

          // height=20px;
          // src={require('../Images_copy/pablo-class.png')} height="40"
          src={"https://gstatic.com/classroom/themes/img_backtoschool.jpg"}
        ></img>
        <div className="cardTitle">{title}</div>
        <div className="cardBoxBody">
          <div>{name}</div>
        </div>
        <div className="cardBoxFooter">
          <div>{code}</div>
        </div>
      </div>
    </div>
  );
};

export default CardS;
