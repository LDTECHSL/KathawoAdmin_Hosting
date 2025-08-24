import "../Common/css/styles.css";
import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export default function AuthLogin({ children }: Readonly<Props>) {
  return (
    <div className="main-outer-container">
      <div className="login-container">
        <div className="login-header">
        </div>
        <div className="login-content-container middle">
          <div className="login-outer">{children}
          </div>
        </div>
      </div>
    </div>
  );
}
