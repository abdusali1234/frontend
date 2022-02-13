import "./UrgentPopUp.css";
import {ReactComponent as Phone} from "../../icon/Cell_Phone.svg";

function UrgentPopUp(props) {

  return(
      <div className="urgent-pop-up" onClick={props.changeCloseStat}>
          <div className="urgent-pop-up-child">
            <div className="urgent-i"><a href="tel:05076790000"><Phone className="u-img" /></a></div>
            <div className="sub-detail">Call &nbsp;<a href="tel:05076790000"> 020 7679 0000</a>&nbsp; or UCL ext 30000</div> 
          </div>
      </div>

  );
}

export default UrgentPopUp;
