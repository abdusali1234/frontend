import "./ActionButton.css";
import APIService from "../apiService/ApiService";

function ActionButton(props) {
  function fetchResult() {
    const body = {
      "id": 'id_1', 
      "event": props.eventStatus
    }
    console.log(JSON.stringify(body))
    APIService.fetchResult(body)
      .then(response => console.log(response))
      .catch((error) => console.log("error", error));
  };

  function submit() {
    if (props.action === "Confirm") {
      fetchResult();
    } else if (props.action === "Cancel") {
      props.changeCloseStat();
    }
  }

  return (
    <div className="event-head">
      <button className={`event-button ${props.action}`} onClick={submit}>{props.action}</button>
    </div>
  );
}

export default ActionButton;
