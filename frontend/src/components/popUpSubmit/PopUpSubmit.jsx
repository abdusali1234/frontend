import "./PopUpSubmit.css";
import ActionButton from "../actionButton/ActionButton";

function PopUpSubmit(props) {

  return(
      <div className="pop-up-submit">
          <div className="pop-up-submit-child">
            <div className="pop-up-submit-header">Confirmation</div>
            <div className="pop-up-submit-p">Are you sure you want to report this issue to ucl estate team</div>
            <div className="pop-up-btn">
                <ActionButton action='Cancel' changeCloseStat={props.changeCloseStat}/>
                <ActionButton action='Confirm' fetchedResult={props.fetchedResult} changeCloseStat={props.changeCloseStat} fetchResult={props.fetchResult} />
            </div>
          </div>
      </div>

  );
}

export default PopUpSubmit;
