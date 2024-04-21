import React from "react"
import { Link } from "react-scroll"

const Lead = ({ data }) => (
  <section id="lead">
    <div id="lead-content">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
    <Link activeClass="active" to="about" spy smooth duration={500} offset={-70} id="lead-down">
      <span>
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </span>
    </Link>
  </section>
)

export default Lead
