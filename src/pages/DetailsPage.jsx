import React, { useEffect } from "react"
import { useContext, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Context } from "../Context"
import setItem from "../utils/setItemLS"
import DetailsEl from "../Components/DetailsEl"

function DetailsPage() {
  const [hovered, setHovered] = useState(false)
  const { id } = useParams()
  const {
    bestSeller,
    books,
    favoritesItems,
    ytrItems,
    removeItem,
    addItem,
    setFavoritesItems,
    setYtrItems,
    setPathName,
  } = useContext(Context)

  const match =
    books.find((book) => book.id === id) ||
    bestSeller.find((best) => best.id === id) ||
    JSON.parse(localStorage.getItem("match"))

  setItem("match", match)

  function heartIcon() {
    const addedToFavorites = favoritesItems.some((item) => item.id === match.id)

    return addedToFavorites ? (
      <div className="icon-div heart">
        <i
          className="fa-solid fa-heart"
          onClick={() => removeItem(match, setFavoritesItems)}
        ></i>
      </div>
    ) : hovered ? (
      <div className="icon-div heart">
        <i
          className="fa-regular fa-heart"
          onClick={() => addItem(match, setFavoritesItems)}
        ></i>
      </div>
    ) : (
      ""
    )
  }

  function bookmarkIcon() {
    const addedtoYetToRead = ytrItems.some((item) => item.id === match.id)

    return addedtoYetToRead ? (
      <div className="icon-div bookmark">
        <i
          className="fa-solid fa-bookmark"
          onClick={() => removeItem(match, setYtrItems)}
        ></i>
      </div>
    ) : hovered ? (
      <div className="icon-div bookmark">
        <i
          className="fa-regular fa-bookmark"
          onClick={() => addItem(match, setYtrItems)}
        ></i>
      </div>
    ) : (
      ""
    )
  }

  return (
    <div className="details-container animation">
      <div className="back-icon">
        <Link to="/" onClick={() => setPathName("/")}>
          <i className="fa-regular fa-circle-left"></i>
        </Link>
      </div>
      <DetailsEl
        match={match}
        bookmark={bookmarkIcon}
        heart={heartIcon}
        setHovered={setHovered}
      />
    </div>
  )
}

export default DetailsPage
