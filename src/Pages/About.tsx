import CommanLayout from "src/Layouts/Comman";
import "../Common/css/styles.css"
import Construction from "src/Components/Construction";

export default function AboutPage() {
  return (
    <CommanLayout name="About Page" path="/about">
      <div className="comman-outer">
        <Construction />
      </div>
    </CommanLayout>

  )
}