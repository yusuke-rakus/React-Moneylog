import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import HouseholdBudgetButton from "./components/HouseholdBudgetButton";
import ModalWindow from "./components/ModalWindow";
import SwitchBalanceButton from "./components/SwitchBalanceButton";
import CategoryWindow from "./components/CategoryWindow";
import AddSavingWindow from "./components/AddSavingWindow";

const App = () => {
  return (
    <>
      <Sidebar />
      <div className="homeArea">
        {/* <HouseholdBudgetButton BoxText={"追加"} /> */}
        {/* <ModalWindow /> */}
        <AddSavingWindow />
      </div>
    </>
  );
};

export default App;
