import "../Common/css/styles.css";
import { ReactElement } from "react";
import "../Common/css/pages.css"
import { PrimaryButton, SecondaryButton, SuccessButton, WarningButton } from "src/Components/CustomButtons";

interface Props {
  children: ReactElement;
  name: string;
  path: string;
  isBtn: boolean;
  btnName?: string;
  onclick?: () => void;
  variety?: string;
}

export default function CommanLayout({ children, name, path, isBtn, btnName, onclick, variety }: Readonly<Props>) {

  return (
    <div className="comman-outer-container">
      <div className="comman-path-outer">
        <span className="comman-header"><b>{name}</b></span>
      </div>
      <div className="comman-path-outer">
        <span className="comman-path">Home {path}</span>
      </div>
      {isBtn && (
        <div className="btn-area">
          {variety === "primary" && (
            <PrimaryButton name={btnName ?? ""} onClick={onclick ?? (() => { })} disabled={false} />
          )}
          {variety === "secondary" && (
            <SecondaryButton name={btnName ?? ""} onClick={onclick ?? (() => { })} disabled={false} />
          )}
          {variety === "warning" && (
            <WarningButton name={btnName ?? ""} onClick={onclick ?? (() => { })} disabled={false} />
          )}
          {variety === "success" && (
            <SuccessButton name={btnName ?? ""} onClick={onclick ?? (() => { })} disabled={false} />
          )}
        </div>
      )}
      <div className="space"></div>
      <div className="comman-path-outer">
        {children}
      </div>


    </div>
  );
}
