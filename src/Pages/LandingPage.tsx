import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing(){
    const navigate = useNavigate()
    React.useEffect(() => {
        navigate("/dashboard")
      }, []);

      return(
        <div>Landing</div>
      )
}