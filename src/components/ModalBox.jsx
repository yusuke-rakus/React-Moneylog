import React, { useState } from "react";
import {
  Button,
  FormControl,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import { CSSTransition } from "react-transition-group";
import "./components_CSS/ModalBox.css";
import "./components_CSS/CategoryWindow.css";
import SwitchBalanceButton from "./SwitchBalanceButton";
import CategoryWindow from "./CategoryWindow";
import CloseIcon from "@mui/icons-material/Close";

const ModalBox = (props) => {
  const { ModalWindow, setModalWindow } = props;
  const [CategoryWindowModal, setCategoryWindowModal] = useState(false);

  const [date, setDate] = useState({ year: "", month: "", day: "" });
  const setYear = (event) => setDate({ ...date, year: event.target.value });
  const setMonth = (event) => setDate({ ...date, month: event.target.value });
  const setDay = (event) => setDate({ ...date, day: event.target.value });

  const openCategoryWindow = () => {
    setCategoryWindowModal(true);
  };

  const closeModalWindow = () => {
    setModalWindow(false);
  };

  return (
    <>
      <div className="modal-window">
        <CloseIcon
          onClick={closeModalWindow}
          style={{ cursor: "pointer", color: "#a9a9a9" }}
          className="close-button"
        />
        <h3 className="modal-title">支出または収入の入力</h3>

        {/* 日付入力 */}
        <div className="input-date-box">
          <span className="input-span">日付</span>
          <div className="date-group">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={date.year}
                onChange={setYear}
                defaultValue={2020}
              >
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
              </Select>
            </FormControl>
            <span>年</span>
            <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={date.month}
                onChange={setMonth}
              >
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
              </Select>
            </FormControl>
            <span>月</span>
            <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={date.day}
                onChange={setDay}
              >
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={26}>26</MenuItem>
              </Select>
            </FormControl>
            <span>日</span>
          </div>
        </div>

        {/* 金額入力 */}
        <div className="input-amount-box">
          <SwitchBalanceButton />
          <div className="amount-group">
            <span className="input-span">金額</span>
            <div className="input-amount">
              <TextField
                id="standard-basic"
                variant="standard"
                fullWidth={true}
              />
              <span className="input-span">円</span>
            </div>
          </div>
        </div>

        {/* 取引名入力 */}
        <div className="input-transaction-box">
          <span className="input-span">取引名</span>
          <div className="input-transaction">
            <TextField
              id="standard-basic"
              variant="standard"
              fullWidth={true}
            />
          </div>
        </div>

        {/* カテゴリ入力 */}
        <div onClick={openCategoryWindow} className="input-category-box">
          <span className="input-span category-span">カテゴリ</span>
          <div className="category-box">
            <span>&gt;</span>
          </div>
        </div>

        {/* 固定費チェックボックス */}
        <FormGroup>
          <FormControlLabel
            className={"fixed-check-box"}
            control={<Checkbox color="default" />}
            label="固定費として計算する"
          />
        </FormGroup>

        {/* 登録ボタン */}
        <Button onClick={closeModalWindow} variant="contained">
          登録
        </Button>
      </div>

      <CSSTransition
        in={CategoryWindowModal}
        timeout={300}
        unmountOnExit
        classNames="Category-show"
      >
        <CategoryWindow
          CategoryWindowModal={CategoryWindowModal}
          setCategoryWindowModal={setCategoryWindowModal}
          closeModalWindow={closeModalWindow}
        />
      </CSSTransition>
    </>
  );
};

export default ModalBox;
