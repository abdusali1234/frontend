import './Commonspaces.css';
// import EventElement from '../../components/eventElement/EventElement';
import {ReactComponent as Microwave} from "../../icon/Microwave.svg"
import {ReactComponent as Dirty} from "../../icon/Dirty-floors.svg"
import {ReactComponent as Trash} from "../../icon/Trashcan.svg"
import {ReactComponent as GeneralDirt} from "../../icon/Generaldirt.svg"
import {ReactComponent as VendingMachine} from "../../icon/Vendingmachines.svg"
import {ReactComponent as WaterFountain} from "../../icon/Waterfountain.svg"
import {ReactComponent as Other} from "../../icon/Other.svg"

import EventElementBox from '../../components/eventElementBox/EventElementBox';
import EventHead from '../../components/eventHead/EventHead';

function Commonspaces() {

  const events = [
    { id: 1, eventsName: "Microwave", icon: <Microwave className="img" /> },
    { id: 2, eventsName: "Dirty Floors", icon: <Dirty className="img" /> },
    { id: 3, eventsName: "Trashcan", icon: <Trash className="img" /> },
    { id: 4, eventsName: "General Dirt", icon: <GeneralDirt className="img" /> },
    { id: 5, eventsName: "Vending Machine", icon: <VendingMachine className="img" /> },
    { id: 6, eventsName: "Water Fountain", icon: <WaterFountain className="img" /> },
    { id: 7, eventsName: "Other", icon: <Other className="img" /> },
  ];

  return (
    <div className="Commonspaces">
      <EventHead eventname="Report a problem" eventlocation="Student centre kitchen"/>
      <EventElementBox events={events}/>
    </div>
  );
}

export default Commonspaces;
