import React, { useContext, useEffect } from "react"
import { Context } from "./Context"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import HomePage from "./pages/HomePage"
import FavoritesPage from "./pages/FavoritesPage"
import YetToReadPage from "./pages/YetToReadPage"
import DetailsPage from "./pages/DetailsPage"

import "./Styles/universalStyles.css"
import "./Styles/detailsStyles.css"
import "./Styles/listsStyles.css"
import "./Styles/homepageStyles.css"

const App = () => {
  const { theme } = useContext(Context)

  return (
    <div className={`main-container ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
        <Route path="/yetToRead" element={<YetToReadPage />}></Route>
        <Route path="/:id" element={<DetailsPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
