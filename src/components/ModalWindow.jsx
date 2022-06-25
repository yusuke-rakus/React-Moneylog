import React, { useState } from "react";
import { Button } from "@mui/material";
import "./components_CSS/ModalWindow.css";
import { CSSTransition } from "react-transition-group";
import ModalBox from "./ModalBox";

const ModalWindow = () => {
  const [ModalWindow, setModalWindow] = useState(true);

  return (
    <>
      <Button
        onClick={() => {
          setModalWindow(true);
        }}
        variant="contained"
        className="sampleButton"
      >
        OpenModal
      </Button>

      {ModalWindow && (
        <div
          onClick={() => {
            setModalWindow(false);
          }}
          className="modal-blur"
        ></div>
      )}
      <CSSTransition
        in={ModalWindow}
        timeout={100}
        unmountOnExit
        classNames="Modal-show"
      >
        <ModalBox ModalWindow={ModalWindow} setModalWindow={setModalWindow} />
      </CSSTransition>
    </>
  );
};
export default ModalWindow;
