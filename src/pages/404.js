import React from "react"
import { Link } from "gatsby"

const NotFound = () => (
  <div
    style={{
      backgroundImage:
        "url('https://image.freepik.com/free-vector/error-404-concept-landing-page_23-2148246765.jpg') ",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundSize: "70% 100%",
    }}
  >
    <h1 className="absolute-center" style={{ fontSize: 40 }}>
      Hmmmm... <br /> <br />
      Looks like you <br /> have stumbled on <br /> an off beaten path
      <Link
        to="/"
        style={{ backgroundColor: "#212529", position: "relative", top: 220 }}
      >
        Go back to track
      </Link>
    </h1>
  </div>
)

export default NotFound
