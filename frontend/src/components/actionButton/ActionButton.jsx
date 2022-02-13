import "./ActionButton.css";
// import APIService from "../apiService/ApiService";

function ActionButton(props) {
  // const fetchResult = () => {
  //   APIService.fetchResult()
  //     .then((response) => props.fetchedResult(response))
  //     .catch((error) => console.log("error", error));
  // };

  function submit() {
    if (props.action === "Confirm") {
      console.log("confirm");
    } else if (props.action === "Cancel") {
      props.changeCloseStat();
    }
  }

  // function Cancel() {
  //   props.changeCloseStat()
  // }

  return (
    <div className="event-head">
      <button className={`event-button ${props.action}`} onClick={props.changeCloseStat}>{props.action}</button>
    </div>
  );
}

export default ActionButton;
