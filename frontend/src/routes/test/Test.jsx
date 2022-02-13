import "./Test.css";
import React, {useState} from "react";
import {ReactComponent as Toiletbowl} from "../../icon/Toiletbowl.svg"
import {ReactComponent as Toiletpaper} from "../../icon/Toiletpaper.svg"
import {ReactComponent as Dryer} from "../../icon/Dryer.svg"
import {ReactComponent as Trashcan} from "../../icon/Trashcan.svg"
import {ReactComponent as Other} from "../../icon/Other.svg"

import EventElementBox from '../../components/eventElementBox/EventElementBox';
import EventHead from '../../components/eventHead/EventHead';
import PopUpSubmit from "../../components/popUpSubmit/PopUpSubmit";

import UrgentButton from "../../components/urgentButton/UrgentButton";

function Test() {
  const [isClose, setIsClose] = useState(false);
  const [eventStatus, setEventStatus] = useState("");
  const events = [
    { id: 1, eventsName: "Toiletbowl", icon: <Toiletbowl className="img" /> },
    { id: 2, eventsName: "Toiletpaper", icon: <Toiletpaper className="img" /> },
    { id: 3, eventsName: "Dryer", icon: <Dryer className="img" /> },
    { id: 4, eventsName: "Trashcan", icon: <Trashcan className="img" /> },
    { id: 5, eventsName: "Other", icon: <Other className="img" /> },
  ];

  function changeEventStatus(text) {
    console.log(text);
    setEventStatus(text);
    console.log(eventStatus);
    setIsClose(!isClose);
  }

  function changeCloseStat() {
    setIsClose(!isClose);
  }

  return (
    <div>
      {isClose ? <PopUpSubmit changeCloseStat={changeCloseStat} eventStatus={eventStatus}/> : null}

      <div className="Toilet">
        <EventHead eventname="toilet" />
        <EventElementBox events={events} close={isClose} changeEventStatus={changeEventStatus} />
      </div>
      <UrgentButton />
    </div>
  );
}

export default Test;
