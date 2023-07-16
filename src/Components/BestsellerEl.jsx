import React, { useState, useContext } from "react"
import { Context } from "../Context"
import { Link } from "react-router-dom"

const BestsellerEl = ({ best }) => {
  const [hovered, setHovered] = useState(false)
  const {
    addItem,
    favoritesItems,
    removeItem,
    setFavoritesItems,
    ytrItems,
    setYtrItems,
    setPathName,
  } = useContext(Context)

  function heartIcon() {
    const addedToFavorites = favoritesItems.some((item) => item.id === best.id)

    return addedToFavorites ? (
      <div className="icon-div heart">
        <i
          className="fa-solid fa-heart"
          onClick={() => removeItem(best, setFavoritesItems)}
        ></i>
      </div>
    ) : hovered ? (
      <div className="icon-div heart">
        <i
          className="fa-regular fa-heart"
          onClick={() => addItem(best, setFavoritesItems)}
        ></i>
      </div>
    ) : (
      ""
    )
  }

  function bookmarkIcon() {
    const addedtoYetToRead = ytrItems.some((item) => item.id === best.id)

    return addedtoYetToRead ? (
      <div className="icon-div bookmark">
        <i
          className="fa-solid fa-bookmark"
          onClick={() => removeItem(best, setYtrItems)}
        ></i>
      </div>
    ) : hovered ? (
      <div className="icon-div bookmark">
        <i
          className="fa-regular fa-bookmark"
          onClick={() => addItem(best, setYtrItems)}
        ></i>
      </div>
    ) : (
      ""
    )
  }

  return (
    <div className="bestseller-element">
      <div
        className="bs-img hover-item icon-container"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link to={`/${best.id}`} onClick={() => setPathName("")}>
          <img src={best.volumeInfo?.imageLinks?.thumbnail} alt="" />
        </Link>
        {heartIcon()}
        {bookmarkIcon()}
      </div>
      <div className="bestseller-info">
        <div className="title-author">
          <h4>{best.volumeInfo.title}</h4>
          <p>{best.volumeInfo.authors[0]}</p>
        </div>
        <div className="publisher">
          <p>{best.volumeInfo.publisher}</p>
        </div>
        <div className="buy-btn">
          <button
            onClick={(e) => {
              e.preventDefault()
              window.location.href = best.volumeInfo.infoLink
            }}
            target="_blank"
          >
            <i className="fa-brands fa-google"></i> Info Link
          </button>
        </div>
      </div>
    </div>
  )
}

export default BestsellerEl
