import "./EventElementBox.css";
import EventElement from "../eventElement/EventElement";

function EventElementBox(props) {
  const events = props.events;

  return (
    <div className="element-box">
      {events.map((event) => {
        return <EventElement eventname={event.eventsName} icon={event.icon} />;
      })}
    </div>
  );
}

export default EventElementBox;
