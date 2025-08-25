import "../Common/css/styles.css";
import { ReactElement } from "react";

interface Props {
  children: ReactElement;
  name: string;
  path: string;
}

export default function CommanLayout({ children,name,path }: Readonly<Props>) {

  return (
    <div className="comman-outer-container">
      <div className="comman-path-outer">
        <span className="comman-path">Home {path}</span>
      </div>
      <div className="comman-path-outer">
        <span className="comman-header"><b>{name}</b></span>
      </div>
      <div className="space"></div>
      <div className="comman-path-outer">
        {children}
      </div>
    </div>
  );
}
