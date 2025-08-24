import "../Common/css/card.css";
import { ReactElement } from "react";

interface Props {
  children: ReactElement;
  width?: string; // Optional width prop
}

export default function Card({ children }: Readonly<Props>) {
  return <div className="card">{children}</div>;
}

export function MainCard({ children, width }: Readonly<Props>) {
  return (
    <div className="mainCard" style={{ width: width || 'auto' }}>
      {children}
    </div>
  );
}
