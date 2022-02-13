import './Toilet.css';
import Door from "../../icon/Door.svg"
import Heater from "../../icon/Heater.svg"


function Toilet() {

  const events = [
    { id: 1, eventsName: "Door", icon: <Door className="img" /> },
    { id: 2, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 3, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 4, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 5, eventsName: "Heater", icon: <Heater className="img" /> },
    { id: 6, eventsName: "Door", icon: <Door className="img" /> }
  ];  

  return (
    <div className="Toilet">
      dis is toilet
    </div>
  );
}

export default Toilet;
