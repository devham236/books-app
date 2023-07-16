import React from "react"
import { useContext } from "react"
import { Context } from "../Context"
import ListItem from "../Components/ListItem"
import EmptyContainer from "../Components/EmptyContainer"
import { Grid, Container } from "@mui/material"

const FavoritesPage = () => {
  const { favoritesItems, AniProps, setPathName, setFavoritesItems } =
    useContext(Context)

  const favoritesElements = favoritesItems.map((item) => (
    <ListItem key={item.id} item={item} />
  ))

  return favoritesItems.length > 0 ? (
    <div className="list-container">
      <div className="list-title">
        <h1>Your Favorites</h1>
        <p onClick={() => setFavoritesItems([])}>Remove All</p>
      </div>
      <Grid container className="list-elements">
        {favoritesElements}
      </Grid>
    </div>
  ) : (
    <EmptyContainer
      strings={{ title: "Favorites", pg: "Heart", icon: "fa-regular fa-heart" }}
    />
  )
}

export default FavoritesPage

/*
    favoritesItems.length > 0 ? (
      <div className="list-container">
      <div className="list-title">
        <h1>Your Favorites</h1>
      </div>
      <Grid container className="list-elements">{favoritesElements}</Grid>
    </div>
    ) : (
      <EmptyContainer/>
    )
  */
