import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { CSSTransition } from "react-transition-group";
import "./components_CSS/HouseholdBudgeButton.css";

const HouseholdBudgetButton = (props) => {
  // 変数を宣言
  const { BoxText } = props;
  const [BoxStatus, setBoxStatus] = useState(false);

  const ButtonStyle = {
    position: "fixed",
    right: "50px",
    bottom: "50px",
    zIndex: "5",
  };

  const BoxStyle = {
    position: "fixed",
    right: "50px",
    bottom: "50px",
    zIndex: "4",
    height: "56px",
    backgroundColor: "#d5d5d5",
    borderRadius: "28px",
    display: "table",
  };

  const BoxTextStyle = {
    color: "#ffffff",
    fontSize: "20px",
    paddingLeft: "20px",
    paddingRight: "70px",
    display: "table-cell",
    verticalAlign: "middle",
  };

  return (
    <>
      <CSSTransition
        in={BoxStatus}
        timeout={200}
        unmountOnExit
        classNames="HouseholdBudgetButton-show"
      >
        <div style={BoxStyle} className="HouseholdBudgetButton">
          <p style={BoxTextStyle}>{BoxText}</p>
        </div>
      </CSSTransition>
      <Fab
        onMouseEnter={() => setBoxStatus(true)}
        onMouseLeave={() => setBoxStatus(false)}
        style={ButtonStyle}
        color="info"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default HouseholdBudgetButton;
