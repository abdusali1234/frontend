import "./UrgentButton.css";
import React, {useState} from "react";
import {ReactComponent as Alarm} from "../../icon/Alarm.svg";
import UrgentPopUp from "../urgentPopUp/UrgentPopUp";

function UrgentButton() {
  const [isClose, setIsClose] = useState(false);

  function setCloseState() {
    setIsClose(!isClose);
  }

  return (
    <div className="urgent-button">
      {isClose ? <UrgentPopUp changeCloseStat={setCloseState}/> : null}
      <button onClick={setCloseState}>URGENT</button>
    </div>
  );
}

export default UrgentButton;
