import CommanLayout from "src/Layouts/Comman";
import "../Common/css/styles.css"
import Construction from "src/Components/Construction";

export default function FeedbackPage() {
  return (
    <CommanLayout name="Feedback Page" path="/feedback">
      <div className="comman-outer">
        <Construction />
      </div>
    </CommanLayout>
  )
}