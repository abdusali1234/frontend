// Import css information and useful functions
import './Library.css';
import React, {useState} from "react";

// Imported saved icons
import {ReactComponent as PC} from "../../icon/PC.svg"
import {ReactComponent as Plug} from "../../icon/Plug.svg"
import {ReactComponent as Dirty} from "../../icon/Dirty-floors.svg"
import {ReactComponent as Trash} from "../../icon/Trashcan.svg"
import {ReactComponent as Printer} from "../../icon/Printer.svg"
import {ReactComponent as Borrow} from "../../icon/Borrow.svg"
import {ReactComponent as Other} from "../../icon/Other.svg"

// Import Elements needed for the page
import EventElementBox from '../../components/eventElementBox/EventElementBox';
import EventHead from '../../components/eventHead/EventHead';
import PopUpSubmit from "../../components/popUpSubmit/PopUpSubmit";

// Construct webpage
function Library() {
  const [isClose, setIsClose] = useState(false);
  const [eventStatus, setEventStatus] = useState("");
  // Add the events
  const events = [
    { id: 1, eventsName: "PC", icon: <PC className="img" /> },
    { id: 2, eventsName: "Plug", icon: <Plug className="img" /> },
    { id: 3, eventsName: "Dirty", icon: <Dirty className="img" /> },
    { id: 4, eventsName: "Trash", icon: <Trash className="img" /> },
    { id: 5, eventsName: "Printer", icon: <Printer className="img" /> },
    { id: 6, eventsName: "Borrow", icon: <Borrow className="img" /> },
    { id: 7, eventsName: "Other", icon: <Other className="img" /> },
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
      <div className="Library">
        {isClose ? <PopUpSubmit changeCloseStat={changeCloseStat} eventStatus={eventStatus}/> : null}
        <EventHead eventname="Report a problem" eventlocation="Science library"/>
        <EventElementBox events={events} close={isClose} changeEventStatus={changeEventStatus}/>
      </div>
      <UrgentButton />
    </div>
  );
}

export default Library;
