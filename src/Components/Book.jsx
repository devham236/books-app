import React, { useState, useContext } from "react"
import img_not_available from "../images/img_not_available.jpg"
import { Context } from "../Context"
import { Link } from "react-router-dom"
import { Grid } from "@mui/material"

const Book = ({ book }) => {
  const [hovered, setHovered] = useState(false)
  const {
    favoritesItems,
    removeItem,
    addItem,
    setFavoritesItems,
    ytrItems,
    setYtrItems,
    setPathName,
  } = useContext(Context)

  function heartIcon() {
    const addedToFavorites = favoritesItems.some((item) => item.id === book.id)
    return addedToFavorites ? (
      <div className="icon-div heart">
        <i
          className="fa-solid fa-heart"
          onClick={() => removeItem(book, setFavoritesItems)}
        ></i>
      </div>
    ) : hovered ? (
      <div className="icon-div heart">
        <i
          className="fa-regular fa-heart"
          onClick={() => addItem(book, setFavoritesItems)}
        ></i>
      </div>
    ) : (
      ""
    )
  }

  function bookmarkIcon() {
    const addedtoYetToRead = ytrItems.some((item) => item.id === book.id)

    return addedtoYetToRead ? (
      <div className="icon-div bookmark">
        <i
          className="fa-solid fa-bookmark"
          onClick={() => removeItem(book, setYtrItems)}
        ></i>
      </div>
    ) : hovered ? (
      <div className="icon-div bookmark">
        <i
          className="fa-regular fa-bookmark"
          onClick={() => addItem(book, setYtrItems)}
        ></i>
      </div>
    ) : (
      ""
    )
  }

  return (
    <Grid
      item
      className="grid-item hover-item icon-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={`/${book.id}`}
        className="link-div"
        onClick={() => setPathName("")}
      >
        <img
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : img_not_available
          }
          alt=""
        />
      </Link>

      {heartIcon()}
      {bookmarkIcon()}
    </Grid>
  )
}

export default Book
