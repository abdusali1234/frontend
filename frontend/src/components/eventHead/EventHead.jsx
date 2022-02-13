import "./EventHead.css";

function EventHead(props) {

  return (
    <div className="event-head">
      <h1>{props.eventname}</h1>
      <p>What is the problem on&nbsp;<span>{props.eventlocation}</span>?</p>
    </div>
  );
}

export default EventHead;
