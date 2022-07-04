import React from "react";
import "./page_CSS/Settings.css";
import { TextField, Button } from "@mui/material";

const Settings = () => {
  return (
    <div className="settings">
      {/* ユーザー設定変更 */}
      <div className="user-settings-box">
        <p>ユーザー設定変更</p>
        <hr />
        <div className="email-box">
          <span>メールアドレス</span>
          <TextField id="standard-basic" variant="standard" fullWidth={true} />
        </div>

        <div className="user-settings-buttons">
          <Button variant="contained" color="inherit" sx={"color:#607d8b"}>
            キャンセル
          </Button>
          <Button variant="contained">登録</Button>
        </div>
      </div>

      {/* パスワード変更 */}
      <div className="password-settings-box">
        <p>パスワード変更</p>
        <hr />
        <div className="password-box">
          <span>現在のパスワード</span>
          <TextField id="standard-basic" variant="standard" fullWidth={true} />
        </div>
        <div className="password-box">
          <span>変更後のパスワード</span>
          <TextField id="standard-basic" variant="standard" fullWidth={true} />
        </div>
        <div className="password-box">
          <span>再入力</span>
          <TextField id="standard-basic" variant="standard" fullWidth={true} />
        </div>

        <div className="password-settings-buttons">
          <Button variant="contained" color="inherit" sx={"color:#607d8b"}>
            キャンセル
          </Button>
          <Button variant="contained">登録</Button>
        </div>
      </div>

      {/* 固定費の編集 */}
      <div className="fixed-settings-box">
        <p>固定費の編集</p>
        <hr />
      </div>
    </div>
  );
};
export default Settings;
