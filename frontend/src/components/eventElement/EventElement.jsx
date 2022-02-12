import "./EventElement.css";

function EventElement(props) {
  return (
    <div className="EventElement">
      <div>
        <h3>{props.eventname}</h3>
      </div>
      <div>{props.icon}</div>
    </div>
  );
}

export default EventElement;
