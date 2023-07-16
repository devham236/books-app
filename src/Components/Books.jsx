import React from "react"
import { Context } from "../Context"
import { useContext } from "react"
import Book from "./Book"

const Books = () => {
  const { books } = useContext(Context)

  const bookElements = books.map((book) => <Book key={book.id} book={book} />)

  return <div className="img-container">{bookElements}</div>
}

export default Books
