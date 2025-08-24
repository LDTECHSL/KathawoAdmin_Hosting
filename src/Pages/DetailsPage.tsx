import "../Common/css/styles.css"
import Construction from "src/Components/Construction";

export default function DetailsPage(){
    return(
        <div className="comman-outer">
        <div className="comman-header-outer">
          <span className="content-title-text">Details Page</span>
        </div>        
        <div className="space-bar"></div>
        <Construction/>
        <div className="space-bar"></div>
      </div>    
    )
}