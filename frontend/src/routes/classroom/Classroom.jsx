// Import css information and useful functions
import './Classroom.css';
import React, {useState} from "react";

// Imported saved icons
import {ReactComponent as Dirty} from "../../icon/Dirty-floors.svg"
import {ReactComponent as Trash} from "../../icon/Trashcan.svg"
import {ReactComponent as Door} from "../../icon/Door.svg"
import {ReactComponent as GeneralDirt} from "../../icon/Generaldirt.svg"
import {ReactComponent as Heater} from "../../icon/Heater.svg"
import {ReactComponent as PC} from "../../icon/PC.svg"
import {ReactComponent as Plug} from "../../icon/Plug.svg"
import {ReactComponent as Projector} from "../../icon/Projector.svg"
import {ReactComponent as Other} from "../../icon/Other.svg"

// Import Elements needed for the page
import EventElementBox from '../../components/eventElementBox/EventElementBox';
import EventHead from '../../components/eventHead/EventHead';
import PopUpSubmit from "../../components/popUpSubmit/PopUpSubmit";
import UrgentButton from "../../components/urgentButton/UrgentButton";

// Construct webpage
function Classroom() {
  const [isClose, setIsClose] = useState(false);
  const [eventStatus, setEventStatus] = useState("");
  // Add the events
  const events = [
    { id: 1, eventsName: "Dirty Floors", icon: <Dirty className="img" /> },
    { id: 2, eventsName: "Trashcan", icon: <Trash className="img" /> },
    { id: 3, eventsName: "Door", icon: <Door className="img" /> },
    { id: 4, eventsName: "General Dirt", icon: <GeneralDirt className="img" /> },
    { id: 5, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 6, eventsName: "PC", icon: <PC className="img" /> },
    { id: 7, eventsName: "Plug", icon: <Plug className="img" /> },
    { id: 8, eventsName: "Projector", icon: <Projector className="img" /> },
    { id: 9, eventsName: "Other", icon: <Other className="img" /> },
  ];

  // Modify the query to later send to API and open the pop-up
  function changeEventStatus(text) {
    console.log(text);
    setEventStatus(text);
    console.log(eventStatus);
    setIsClose(!isClose);
  }

  // Close the pop-up
  function changeCloseStat() {
    setIsClose(!isClose);
  }


  return (
    <div>
      <div className="Classroom">
        {isClose ? <PopUpSubmit changeCloseStat={changeCloseStat} eventStatus={eventStatus}/> : null}
        <EventHead eventname="Report a problem" eventlocation="Main Quad"/>
        <EventElementBox events={events} close={isClose} changeEventStatus={changeEventStatus}/>
      </div>
      <UrgentButton />
    </div>
  );
}

export default Classroom;
