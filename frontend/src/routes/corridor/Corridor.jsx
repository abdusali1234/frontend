import './Corridor.css';
// import EventElement from '../../components/eventElement/EventElement';
import {ReactComponent as Alarm} from "../../icon/Alarm.svg"
import {ReactComponent as Dirty} from "../../icon/Dirty-floors.svg"
import {ReactComponent as Trash} from "../../icon/Trashcan.svg"
import {ReactComponent as Door} from "../../icon/Door.svg"
import {ReactComponent as GeneralDirt} from "../../icon/Generaldirt.svg"
import {ReactComponent as VendingMachine} from "../../icon/Vendingmachines.svg"
import {ReactComponent as WaterFountain} from "../../icon/Waterfountain.svg"
import {ReactComponent as Other} from "../../icon/Other.svg"

import EventElementBox from '../../components/eventElementBox/EventElementBox';
import EventHead from '../../components/eventHead/EventHead';

function Corridor() {

  const events = [
    { id: 1, eventsName: "Alarm", icon: <Alarm className="img" /> },
    { id: 2, eventsName: "Dirty Floors", icon: <Dirty className="img" /> },
    { id: 3, eventsName: "Trashcan", icon: <Trash className="img" /> },
    { id: 4, eventsName: "Door", icon: <Door className="img" /> },
    { id: 5, eventsName: "General Dirt", icon: <GeneralDirt className="img" /> },
    { id: 6, eventsName: "Vending Machine", icon: <VendingMachine className="img" /> },
    { id: 7, eventsName: "Water Fountain", icon: <WaterFountain className="img" /> },
    { id: 8, eventsName: "Other", icon: <Other className="img" /> },
  ];

  return (
    <div className="Corridor">
      <EventHead eventname="Report a problem" eventlocation="KLB-Physics Corridor"/>
      <EventElementBox events={events}/>
    </div>
  );
}

export default Corridor;
