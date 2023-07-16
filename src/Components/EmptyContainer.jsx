import React, { useContext } from "react"
import { Context } from "../Context"
import { Link } from "react-router-dom"

const EmptyContainer = ({ strings }) => {
  const { setPathName } = useContext(Context)

  return (
    <div className="empty-container animation">
      <div className="empty-div">
        <div className="empty-icon">
          <i className={strings.icon}></i>
        </div>
        <div className="empty-title">
          <h1>Your {strings.title} Page is empty.</h1>
          <p>Add Books by clicking on the {strings.pg}.</p>
        </div>
        <div className="back-home-btn">
          <Link to="/" onClick={() => setPathName("/")}>
            <button>Back to Homepage</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmptyContainer
