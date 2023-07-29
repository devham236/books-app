import setItem from "./utils/setItemLS"
import React, { createContext, useState, useEffect } from "react"

const Context = createContext()

function ContextProvider({ children }) {
  const [input, setInput] = useState("")
  const [inputEmpty, setInputEmpty] = useState(false)
  const [pathname, setPathName] = useState(window.location.pathname)
  const [bestSeller, setBestSeller] = useState([])
  const [theme, setTheme] = useState(
    () => JSON.parse(localStorage.getItem("theme")) || "light"
  )
  const [books, setBooks] = useState(
    () => JSON.parse(localStorage.getItem("books")) || []
  )
  const [favoritesItems, setFavoritesItems] = useState(
    () => JSON.parse(localStorage.getItem("favorites")) || []
  )
  const [ytrItems, setYtrItems] = useState(
    () => JSON.parse(localStorage.getItem("yetToRead")) || []
  )
  useEffect(() => {
    setItem("favorites", favoritesItems)
    setItem("yetToRead", ytrItems)
    setItem("theme", theme)
    setItem("books", books)
  }, [favoritesItems, ytrItems, books, theme])

  function showInputEmptyDiv() {
    setInputEmpty(true)
    setTimeout(() => {
      setInputEmpty(false)
    }, 2000)
  }

  /*ADD/REMOVE BOOKS TO/FROM LISTS - HANDLE CLICKS/KEYSTROKE*/
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      if (input === "") {
        showInputEmptyDiv()
      } else {
        getBooks()
      }
    }
  }

  function addItem(newItem, setFunction) {
    setFunction((prevItems) => [...prevItems, newItem])
  }

  function removeItem(addedItem, setFunction) {
    setFunction((prevItems) =>
      prevItems.filter((item) => item.id !== addedItem.id)
    )
  }

  function handleChange(event) {
    setInput(event.target.value)
  }

  function locateRemoveItem(item) {
    if (pathname === "/favorites") {
      removeItem(item, setFavoritesItems)
    } else if (pathname === "/yetToRead") {
      removeItem(item, setYtrItems)
    } else {
      return
    }
  }

  /*FETCH DATA - API CALLS*/
  async function getBooks() {
    if (input !== "") {
      try {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${input}&printType=books&maxResults=8&key=${
          import.meta.env.VITE_G_API_KEY
        }`
        const response = await fetch(url)
        const data = await response.json()
        setBooks(data.items)
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Input empty.")
      showInputEmptyDiv()
    }
  }

  async function getBestSellerIsbns() {
    try {
      const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?&api-key=${
        import.meta.env.VITE_NYT_API_KEY
      }`
      const response = await fetch(url)
      const data = await response.json()
      const isbns = data.results.books.map((book) => book.primary_isbn10)
      getBooksWithIsbn(isbns)
    } catch (error) {
      console.log(error)
    }
  }

  async function getBooksWithIsbn(isbnList) {
    try {
      let arr = []
      for (let isbn of isbnList) {
        {
          const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&printType=books`
          const response = await fetch(url)
          const data = await response.json()
          arr.push(data.items[0])
        }
      }
      setBestSeller(arr)
    } catch (error) {
      console.log(error)
    }
  }

  function changeTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return (
    <Context.Provider
      value={{
        changeTheme,
        handleChange,
        getBooks,
        addItem,
        removeItem,
        setFavoritesItems,
        setYtrItems,
        setPathName,
        getBestSellerIsbns,
        locateRemoveItem,
        handleKeyDown,
        showInputEmptyDiv,
        inputEmpty,
        pathname,
        theme,
        books,
        bestSeller,
        ytrItems,
        favoritesItems,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
