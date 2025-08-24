import CommanLayout from "src/Layouts/Comman";
import "../Common/css/styles.css"
import Construction from "src/Components/Construction";

export default function ContactPage() {
  return (
    <CommanLayout name="Contact Page" path="/contact">
      <div className="comman-outer">
        <Construction />
      </div>
    </CommanLayout>
  )
}