import React, { useContext } from "react"
import { Context } from "../Context"

const Titel_Search = () => {
  const { handleChange, getBooks, handleKeyDown, inputEmpty } =
    useContext(Context)

  return (
    <div className="title-search-div">
      <div className="title">
        <h1>
          Search &<br /> Find
        </h1>
        <p>Titles, Authors, Topics etc.</p>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={getBooks}
          role="icon"
        ></i>
        {inputEmpty ? (
          <div className="input-empty animation">
            <p>Input empty !</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default Titel_Search
