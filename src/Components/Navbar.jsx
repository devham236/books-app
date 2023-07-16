import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context"
import pic from "../images/pic.png"

const Navbar = () => {
  const {
    changeTheme,
    favoritesItems,
    ytrItems,
    pathname,
    setPathName,
    theme,
  } = useContext(Context)

  return (
    <div className="navbar animation">
      <div className="nav-title">
        <h3>Books</h3>
      </div>

      <div className="links">
        <div className={`link ${pathname === "/" ? "active" : ""}`}>
          <i className="fa-solid fa-house"></i>
          <Link to="/" className="Link" onClick={() => setPathName("/")}>
            Home
          </Link>
        </div>

        <div className={`link ${pathname === "/favorites" ? "active" : ""}`}>
          <i className="fa-solid fa-heart">
            {favoritesItems.length > 0 ? (
              <div>{favoritesItems.length}</div>
            ) : (
              ""
            )}
          </i>
          <Link
            to="/favorites"
            className="Link"
            onClick={() => setPathName("/favorites")}
          >
            Favorites
          </Link>
        </div>

        <div className={`link ${pathname === "/yetToRead" ? "active" : ""}`}>
          <i className="fa-solid fa-bookmark">
            {ytrItems.length > 0 ? <div>{ytrItems.length}</div> : ""}
          </i>
          <Link
            to="/yetToRead"
            className="Link"
            onClick={() => setPathName("/yetToRead")}
            name="YetToRead"
          >
            Yet to Read
          </Link>
        </div>
      </div>

      <div className="nav-elements">
        <label className="switch">
          <input type="checkbox" onClick={changeTheme} name={theme} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  )
}

export default Navbar
