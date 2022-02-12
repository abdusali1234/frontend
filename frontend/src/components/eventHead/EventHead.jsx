import "./EventHead.css";

function EventHead(props) {

  return (
    <div className="event-head">
      <h1>{props.eventname}</h1>
    </div>
  );
}

export default EventHead;
