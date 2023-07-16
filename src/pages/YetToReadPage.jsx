import React, { useContext } from "react"
import { Context } from "../Context"
import ListItem from "../Components/ListItem"
import EmptyContainer from "../Components/EmptyContainer"
import { Grid } from "@mui/material"

const YetToReadPage = () => {
  const { ytrItems, setYtrItems } = useContext(Context)

  const ytrElements = ytrItems.map((item) => (
    <ListItem key={item.id} item={item} />
  ))
  return ytrItems.length > 0 ? (
    <div className="list-container">
      <div className="list-title">
        <h1>Yet to Read</h1>
        <p onClick={() => setYtrItems([])}>Remove All</p>
      </div>
      <Grid container className="list-elements">
        {ytrElements}
      </Grid>
    </div>
  ) : (
    <EmptyContainer
      strings={{
        title: "Yet to Read",
        pg: "Bookmark",
        icon: "fa-regular fa-bookmark",
      }}
    />
  )
}

export default YetToReadPage
