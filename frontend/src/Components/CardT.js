import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/card.scss";

const CardT = (props) => {
  const navigate = useNavigate();
  const { name, title, code, suser } = props.item;
  const deleteClass = async () => {
    const res = await fetch("/deleteclass", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        code,
      }),
    });
    const data = await res.json();
    console.log(data);
    alert(data.message);

    props.deleteUser(props.index);
  };
  const openClass = () => {
    navigate("/teacherhome/classes/assignment", {
      state: props.item,
    });
  };
  return (
    <div className="cardBox">
      <div className="cardBoxHeader" onClick={openClass}>
        <img
          className="cardBoxImg"
          src={"https://gstatic.com/classroom/themes/img_read.jpg"}
          alt="img"
        ></img>
        <div className="cardTitle">{title}</div>
      </div>
      <div className="cardBoxBody">
        <div>{name}</div>
      </div>
      <div className="cardBoxFooter">
        <div>{code}</div>
        <div
          onClick={deleteClass}
          style={{
            height: "30px",
            width: "80px",
            background: "red",
            zIndex: "1",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CardT;
