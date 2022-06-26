import React from "react";
import "./components_CSS/CategoryWindow.css";
import { CSSTransition } from "react-transition-group";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CategoryWindow = (props) => {
  const { CategoryWindowModal, setCategoryWindowModal, closeModalWindow } =
    props;

  const CategoryList = [
    { name: "食費", value: 1 },
    { name: "外食", value: 2 },
    { name: "コンビニ", value: 3 },
    { name: "住宅", value: 4 },
  ];

  const closeCategoryWindow = () => {
    setCategoryWindowModal(false);
  };

  return (
    <>
      <CSSTransition
        in={CategoryWindowModal}
        timeout={100}
        unmountOnExit
        classNames="Modal-show"
      >
        <div className="category-window">
          {/* 戻る / Closeボタン */}
          <span className="back-button" onClick={closeCategoryWindow}>
            <ChevronLeftIcon />
            戻る
          </span>
          <CloseIcon
            onClick={closeModalWindow}
            style={{ cursor: "pointer", color: "#a9a9a9" }}
            className="close-button"
          />

          <h3 className="modal-title">カテゴリを選択</h3>
          <div className="category-items">
            {CategoryList.map((category) => {
              return (
                <div className="category-item">
                  {category.name}{" "}
                  <span>
                    <ChevronRightIcon />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
export default CategoryWindow;
