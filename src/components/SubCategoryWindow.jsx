import React from "react";
import "./components_CSS/SubCategoryWindow.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";

const SubCategoryWindow = (props) => {
  const {
    closeModalWindow,
    SubCategoryWindowModal,
    setSubCategoryWindowModal,
    closeCategoryWindow,
  } = props;

  const SubCategoryList = [
    { name: "住宅", value: 1 },
    { name: "家賃", value: 2 },
    { name: "住宅設備", value: 3 },
    { name: "保険", value: 4 },
  ];

  const closeSubCategoryWindow = () => {
    setSubCategoryWindowModal(false);
  };

  const backModalWindow = () => {
    closeSubCategoryWindow();
    closeCategoryWindow();
  };

  let enterCount = 0;
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      enterCount++;
      if (enterCount === 2) {
        backModalWindow();
      }
    } else {
      enterCount = 0;
    }
  };

  return (
    <>
      <div className="sub-category-window">
        {/* 戻る / Closeボタン */}
        <span className="back-button" onClick={closeSubCategoryWindow}>
          <ChevronLeftIcon />
          戻る
        </span>
        <CloseIcon
          onClick={closeModalWindow}
          style={{ cursor: "pointer", color: "#a9a9a9" }}
          className="close-button"
        />

        {/* カテゴリリスト */}
        <h3 className="modal-title">サブカテゴリを選択</h3>
        <div className="sub-category-items">
          {SubCategoryList.map((category) => {
            return (
              <div onClick={backModalWindow} className="sub-category-item">
                {category.name}{" "}
                <span>
                  <ChevronRightIcon />
                </span>
              </div>
            );
          })}
          <TextField
            id="standard-basic"
            label="カテゴリを作成"
            variant="standard"
            fullWidth={true}
            onKeyUp={onEnter}
          />
        </div>
      </div>
    </>
  );
};
export default SubCategoryWindow;
