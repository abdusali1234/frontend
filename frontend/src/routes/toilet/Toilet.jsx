import './Toilet.css';
// import EventElement from '../../components/eventElement/EventElement';
import {ReactComponent as Toiletbowl} from "../../icon/Toiletbowl.svg"
import {ReactComponent as Toiletpaper} from "../../icon/Toiletpaper.svg"
import {ReactComponent as Dryer} from "../../icon/Dryer.svg"
import {ReactComponent as Trashcan} from "../../icon/Trashcan.svg"
import {ReactComponent as Other} from "../../icon/Other.svg"

import EventElementBox from '../../components/eventElementBox/EventElementBox';
import EventHead from '../../components/eventHead/EventHead';

function Toilet() {

  const events = [
    { id: 1, eventsName: "Toiletbowl", icon: <Toiletbowl className="img" /> },
    { id: 2, eventsName: "Toiletpaper", icon: <Toiletpaper className="img" /> },
    { id: 3, eventsName: "Dryer", icon: <Dryer className="img" /> },
    { id: 4, eventsName: "Trashcan", icon: <Trashcan className="img" /> },
    { id: 5, eventsName: "Other", icon: <Other className="img" /> },
  ];  

  return (
    <div className="Toilet">
      <EventHead eventname="id18"/>
      <EventElementBox events={events}/>
    </div>
  );
}

export default Toilet;
