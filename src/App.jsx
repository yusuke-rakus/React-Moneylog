import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import HouseholdBudgetButton from "./components/HouseholdBudgetButton";
import ModalWindow from "./components/ModalWindow";
import SwitchBalanceButton from "./components/SwitchBalanceButton";
import CategoryWindow from "./components/CategoryWindow";
import AddSavingWindow from "./components/AddSavingWindow";
import BlurView from "./components/BlurView";
import AddTargetWindow from "./components/AddTargetWindow";
import Settings from "@mui/icons-material/Settings";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SettingsPage from "./page/Settings";
import SidebarData from "./components/SidebarData";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="homeArea">
        {/* <HouseholdBudgetButton BoxText={"追加"} /> */}
        {/* <ModalWindow /> */}
        {/* <AddSavingWindow /> */}
        {/* <AddTargetWindow /> */}

        <Routes>
          <Route path="/" element={<SettingsPage />}></Route>
          <Route path="/home" element={<SettingsPage />}></Route>
          <Route path="/timeline" element={<SettingsPage />}></Route>
          <Route path="/variable" element={<SettingsPage />}></Route>
          <Route path="/fixed" element={<SettingsPage />}></Route>
          <Route path="/savingList" element={<SettingsPage />}></Route>
          <Route path="/amount" element={<SettingsPage />}></Route>
          <Route path="/settings" element={<SettingsPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
