import './Test.css';
// import EventElement from '../../components/eventElement/EventElement';
import {ReactComponent as Door} from "../../icon/Door.svg"
import {ReactComponent as Heater} from "../../icon/Heater.svg"

import EventElementBox from '../../components/eventElementBox/EventElementBox';
import EventHead from '../../components/eventHead/EventHead';

function Test() {

  const events = [
    { id: 1, eventsName: "Door", icon: <Door className="img" /> },
    { id: 2, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 3, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 4, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 5, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 6, eventsName: "Door", icon: <Door className="img" /> },
  ];  

  return (
    <div className="Test">
      <EventHead eventname="idn"/>
      <EventElementBox events={events}/>
    </div>
  );
}

export default Test;
