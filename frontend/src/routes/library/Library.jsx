import './Library.css';
// import EventElement from '../../components/eventElement/EventElement';
import {ReactComponent as PC} from "../../icon/PC.svg"
import {ReactComponent as Plug} from "../../icon/Plug.svg"
import {ReactComponent as Dirty} from "../../icon/Dirty-floors.svg"
import {ReactComponent as Trash} from "../../icon/Trashcan.svg"
import {ReactComponent as Printer} from "../../icon/Printer.svg"
import {ReactComponent as Borrow} from "../../icon/Borrow.svg"
import {ReactComponent as Other} from "../../icon/Other.svg"

import EventElementBox from '../../components/eventElementBox/EventElementBox';
import EventHead from '../../components/eventHead/EventHead';

function Library() {

  const events = [
    { id: 1, eventsName: "PC", icon: <PC className="img" /> },
    { id: 2, eventsName: "Plug", icon: <Plug className="img" /> },
    { id: 3, eventsName: "Dirty", icon: <Dirty className="img" /> },
    { id: 4, eventsName: "Trash", icon: <Trash className="img" /> },
    { id: 5, eventsName: "Printer", icon: <Printer className="img" /> },
    { id: 6, eventsName: "Borrow", icon: <Borrow className="img" /> },
    { id: 7, eventsName: "Other", icon: <Other className="img" /> },
  ];

  return (
    <div className="Library">
      <EventHead eventname="Report a problem" eventlocation="Science library"/>
      <EventElementBox events={events}/>
    </div>
  );
}

export default Library;
