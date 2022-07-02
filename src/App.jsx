import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import HouseholdBudgetButton from "./components/HouseholdBudgetButton";
import ModalWindow from "./components/ModalWindow";
import SwitchBalanceButton from "./components/SwitchBalanceButton";
import CategoryWindow from "./components/CategoryWindow";
import AddSavingWindow from "./components/AddSavingWindow";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import BlurView from "./components/BlurView";
import AddTargetWindow from "./components/AddTargetWindow";

const App = () => {
  return (
    <>
      <Sidebar />
      <div className="homeArea">
        {/* <HouseholdBudgetButton BoxText={"追加"} /> */}
        <ModalWindow />
        {/* <AddSavingWindow /> */}
        {/* <AddTargetWindow /> */}
      </div>
    </>
  );
};

export default App;
