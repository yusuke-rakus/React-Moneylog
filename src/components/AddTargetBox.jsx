import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const AddTargetBox = (props) => {
  const { setAddTargetStatus } = props;

  const closeAddTargetStatus = () => {
    setAddTargetStatus(false);
  };

  return (
    <>
      <div className="modal-window">
        <CloseIcon
          onClick={closeAddTargetStatus}
          style={{ cursor: "pointer", color: "#a9a9a9" }}
          className="close-button"
        />
        <h3 className="modal-title">目標を追加</h3>
      </div>
    </>
  );
};
export default AddTargetBox;
