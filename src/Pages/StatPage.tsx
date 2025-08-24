import "../Common/css/styles.css"
import Construction from "src/Components/Construction";

export default function StatPage(){
    return(
        <div className="comman-outer">
        <div className="comman-header-outer">
          <span className="content-title-text">Stat Page</span>
        </div>        
        <div className="space-bar"></div>
        <Construction/>
        <div className="space-bar"></div>
      </div>         
    )
}