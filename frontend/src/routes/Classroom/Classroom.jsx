import './Classroom.css';
// import EventElement from '../../components/eventElement/EventElement';
import {ReactComponent as Dirty} from "../../icon/Dirty-floors.svg"
import {ReactComponent as Trash} from "../../icon/Trashcan.svg"
import {ReactComponent as Door} from "../../icon/Door.svg"
import {ReactComponent as GeneralDirt} from "../../icon/General-dirt_1.svg"
import {ReactComponent as Heater} from "../../icon/Heater.svg"
import {ReactComponent as PC} from "../../icon/PC.svg"
import {ReactComponent as Plug} from "../../icon/Plug.svg"
import {ReactComponent as Projector} from "../../icon/Projector.svg"
import {ReactComponent as Other} from "../../icon/Other.svg"


import EventElementBox from '../../components/eventElementBox/EventElementBox';
import EventHead from '../../components/eventHead/EventHead';

function Classroom() {

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

  return (
    <div className="Classroom">
      <EventHead eventname="Report a problem on"/>
      <EventElementBox events={events}/>
    </div>
  );
}

export default Classroom;
