// Import css information and useful functions
import "./Toilet.css";
import React, {useState} from "react";

// Imported saved icons
import {ReactComponent as Toiletbowl} from "../../icon/Toiletbowl.svg"
import {ReactComponent as Toiletpaper} from "../../icon/Toiletpaper.svg"
import {ReactComponent as Dryer} from "../../icon/Dryer.svg"
import {ReactComponent as Trashcan} from "../../icon/Trashcan.svg"
import {ReactComponent as Other} from "../../icon/Other.svg"

// Import Elements needed for the page
import EventElementBox from '../../components/eventElementBox/EventElementBox';
import EventHead from '../../components/eventHead/EventHead';
import PopUpSubmit from "../../components/popUpSubmit/PopUpSubmit";

// Construct webpage
function Toilet() {
  const [isClose, setIsClose] = useState(false);
  const [eventStatus, setEventStatus] = useState("");
  // Add the events
  const events = [
    { id: 1, eventsName: "Toiletbowl", icon: <Toiletbowl className="img" /> },
    { id: 2, eventsName: "Toiletpaper", icon: <Toiletpaper className="img" /> },
    { id: 3, eventsName: "Dryer", icon: <Dryer className="img" /> },
    { id: 4, eventsName: "Trashcan", icon: <Trashcan className="img" /> },
    { id: 5, eventsName: "Other", icon: <Other className="img" /> },
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
    <div className="Toilet">
      {isClose ? <PopUpSubmit changeCloseStat={changeCloseStat} eventStatus={eventStatus}/> : null}
      <EventHead eventname="Report a problem" eventlocation="toilet at Student centre"/>
      <EventElementBox events={events} close={isClose} changeEventStatus={changeEventStatus}/>
      
    </div>
  );
}

export default Toilet;
