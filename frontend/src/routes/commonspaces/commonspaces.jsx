import "./Commonspaces.css";
// import EventElement from '../../components/eventElement/EventElement';
import {ReactComponent as Vendingmachines} from "../../icon/Vendingmachines.svg"
import {ReactComponent as Microwave} from "../../icon/Microwave.svg"
import {ReactComponent as Generaldirt} from "../../icon/Generaldirt.svg"
import {ReactComponent as Trashcan} from "../../icon/Trashcan.svg"
import {ReactComponent as Waterfountain} from "../../icon/Waterfountain.svg"
import {ReactComponent as Other} from "../../icon/Other.svg"

import EventElementBox from '../../components/eventElementBox/EventElementBox';
import EventHead from '../../components/eventHead/EventHead';

function Commonspaces() {

  const events = [
    { id: 1, eventsName: "Vending Machines", icon: <Vendingmachines className="img" /> },
    { id: 2, eventsName: "Microwave", icon: <Microwave className="img" /> },
    { id: 3, eventsName: "General Dirt", icon: <Generaldirt className="img" /> },
    { id: 4, eventsName: "Trashcan", icon: <Trashcan className="img" /> },
    { id: 5, eventsName: "Water Fountain", icon: <Waterfountain className="img" /> },
    { id: 5, eventsName: "Other", icon: <Other className="img" /> },
  ];  

  return (
    <div className="Commmonspaces">
      <EventHead eventname="Common Spaces"/>
      <EventElementBox events={events}/>
    </div>
  );
}

export default Commonspaces;