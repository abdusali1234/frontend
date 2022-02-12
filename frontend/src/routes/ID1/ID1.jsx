import './ID1.css';
// import EventElement from '../../components/eventElement/EventElement';
import {ReactComponent as Door} from "../../icon/Door.svg"
import {ReactComponent as Heater} from "../../icon/Heater.svg"
import {ReactComponent as PC} from "../../icon/PC.svg"

import EventElementBox from '../../components/eventElementBox/EventElementBox';
import EventHead from '../../components/eventHead/EventHead';

function ID1() {

  const events = [
    { id: 1, eventsName: "Door", icon: <Door className="img" /> },
    { id: 2, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 3, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 4, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 5, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 6, eventsName: "Door", icon: <Door className="img" /> },
    { id: 7, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 8, eventsName: "PC", icon: <PC className="img" /> },
    { id: 9, eventsName: "Door", icon: <Door className="img" /> },
    { id: 10, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 11, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 12, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 13, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 14, eventsName: "Door", icon: <Door className="img" /> },
    { id: 15, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 16, eventsName: "PC", icon: <PC className="img" /> },
  ];  

  return (
    <div className="id_1">
      <EventHead eventname="idn"/>
      <EventElementBox events={events}/>
    </div>
  );
}

export default ID1;
