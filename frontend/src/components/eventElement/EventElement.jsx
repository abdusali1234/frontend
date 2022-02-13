import "./EventElement.css";

function EventElement(props) {
  
  return (
    <div className="EventElement" onClick={() => {props.changeEventStatus(props.eventname)}}>
      <div>
        <h3>{props.eventname}</h3>
      </div>
      <div className="event-element-icon">{props.icon}</div>
    </div>
  );
}

export default EventElement;
