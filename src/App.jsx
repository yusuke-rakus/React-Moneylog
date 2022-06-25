import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import HouseholdBudgetButton from "./components/HouseholdBudgetButton";
import ModalWindow from "./components/ModalWindow";
import SwitchBalanceButton from "./components/SwitchBalanceButton";

const App = () => {
  return (
    <>
      <Sidebar />
      <div className="homeArea">
        {/* <HouseholdBudgetButton BoxText={"追加"} /> */}
        {/* <ModalWindow /> */}
        <SwitchBalanceButton />
      </div>
    </>
  );
};

export default App;
