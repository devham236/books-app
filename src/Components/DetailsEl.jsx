import React from "react"
import img_not_available from "../images/img_not_available.jpg"

const DetailsEl = ({ match, bookmark, heart, setHovered }) => {
  return (
    <div className="details-img-info">
      <div className="title">
        <h1>{match.volumeInfo.title}</h1>
      </div>
      <div className="details-img-info-elements">
        <div
          className="details-img"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={
              match.volumeInfo.imageLinks
                ? match.volumeInfo.imageLinks.smallThumbnail
                : img_not_available
            }
            alt=""
          />
          {heart()}
          {bookmark()}
        </div>

        <div className="details-info">
          <div className="desc">
            <h3>Description:</h3>
            <div className="desc-div">
              <span>{match.volumeInfo.description}</span>
            </div>
          </div>

          <div className="author same-width">
            <h3>Author:</h3>
            <span>
              {match.volumeInfo.authors
                ? match.volumeInfo.authors[0]
                : "Not found"}
            </span>
          </div>

          <div className="publisher same-width">
            <h3>Publisher:</h3>
            <span>{match.volumeInfo.publisher}</span>
          </div>

          <div className="date same-width">
            <h3>Published Date:</h3>
            <span>{match.volumeInfo.publishedDate}</span>
          </div>

          <div className="rating same-width">
            <h3>Rating:</h3>
            <div className="rating-icons">
              <i className="fa-solid fa-star"></i>
              <span>
                {match.volumeInfo.averageRating}/5 (
                {match.volumeInfo.ratingsCount})
              </span>
            </div>
          </div>

          <div className="button">
            <button
              onClick={(e) => {
                e.preventDefault()
                window.location.href = match.volumeInfo.infoLink
              }}
            >
              <i className="fa-brands fa-google"></i> Info Link
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsEl
