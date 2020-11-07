import React from "react";
import { withRouter } from "react-router-dom";
import "./style.css";

function Back(props) {
  return (
    <div className="back">
      <svg
        width="9.73"
        height="16.5"
        viewBox="0 0 10 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.86245 2.225L8.37912 0.75L0.137451 9L8.38745 17.25L9.86245 15.775L3.08745 9L9.86245 2.225Z"
          fill="#8692A6"
        />
      </svg>

      <button onClick={() => props.history.goBack()} className="textBack">
        Back
      </button>
    </div>
  );
}
export default withRouter(Back);
