import "../Common/css/styles.css";
import logo from "../Assets/Images/hdts.png";
import { ReactElement } from "react";
import text from "../Assets/Text/Text.json"

interface Props {
  children: ReactElement;
}

export default function AuthLogin({ children }: Readonly<Props>) {
  return (
    <div className="main-outer-container">
      <div className="login-container">
        <div className="login-header">
          <img className="logo" src={logo} alt="" />
          <span className="login-header-text">{text.authLoginPage.header}</span>
        </div>
        <div className="login-content-container middle">
          <div className="login-outer">{children}
          </div>
        </div>
      </div>
    </div>
  );
}
