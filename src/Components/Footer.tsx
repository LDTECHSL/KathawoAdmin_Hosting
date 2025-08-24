import "../Common/css/footer.css"
import env from "../env"

export default function Footer(){
    return(
        <div className="footer">
            <span className="company-text">
            Copyright © {env.COMPANY} -
            </span>
            <span className="version-txt">
                {env.VERSION}
            </span>
        </div>
    )
}
