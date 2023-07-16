import React, { useContext } from "react"
import img_not_available from "../images/img_not_available.jpg"
import { Context } from "../Context"
import { Link } from "react-router-dom"
import { Grid } from "@mui/material"

const ListItem = ({ item }) => {
  const { locateRemoveItem } = useContext(Context)

  return (
    <Grid item xs={12} sm={6} md={4} className="list-element animation">
      <div className="ls-img hover-item">
        <Link to={`/${item.id}`}>
          <img
            src={item.volumeInfo.imageLinks.thumbnail || img_not_available}
            alt=""
          />
        </Link>
      </div>
      <div className="list-info">
        <div className="title-author">
          <h4>{item.volumeInfo.title}</h4>
          <p>{item.volumeInfo.authors ? item.volumeInfo.authors[0] : ""}</p>
        </div>
        <div className="info">
          <p>{item.volumeInfo.publisher || ""}</p>
        </div>
        <div className="button-icon">
          <button
            onClick={(e) => {
              e.preventDefault()
              window.location.href = item.volumeInfo.infoLink
            }}
          >
            <i className="fa-brands fa-google"></i>
          </button>
          <i
            className="fa-regular fa-trash-can"
            onClick={() => locateRemoveItem(item)}
          ></i>
        </div>
      </div>
    </Grid>
  )
}

export default ListItem
