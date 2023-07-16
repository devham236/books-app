/* eslint-disable react/react-in-jsx-scope */
import { screen, fireEvent, waitFor } from "@testing-library/react"
import Navbar from "../../src/Components/Navbar"
import renderWithWrappers from "../Utils/renderWithWrappers"
import testNavbarLinkStyles from "../Utils/testNavbarLinkStyles"
import testNavbarLinkRoutes from "../Utils/testNavbarLinkRoutes"
import testRenderElements from "../Utils/testRenderElements"

describe("Navbar Elements render and function as intended", () => {
  beforeEach(() => {
    renderWithWrappers(<Navbar />)
  })

  test("Renders heading", () => {
    testRenderElements("heading")
  })

  test("Renders links", () => {
    const links = screen.getAllByRole("link")
    expect(links).toHaveLength(3)
  })

  test("Renders switch", () => {
    testRenderElements("checkbox")
  })

  test("input name is light on first render", async () => {
    const input = await waitFor(() => screen.getByRole("checkbox"))
    expect(input.getAttribute("name")).toBe("light")
  })

  test("input name is dark after click", () => {
    const input = screen.getByRole("checkbox")
    fireEvent.click(input)
    expect(input.getAttribute("name")).toBe("dark")
  })
})

describe("Navbar links navigate to correct routes", () => {
  beforeEach(() => {
    renderWithWrappers(<Navbar />)
  })

  test("home link", () => {
    testNavbarLinkRoutes("Home", "/")
  })

  test("favorites link", () => {
    testNavbarLinkRoutes("Favorites", "/favorites")
  })

  test("yetToRead link", () => {
    testNavbarLinkRoutes("Yet to Read", "/yetToRead")
  })
})

describe("Navbar links get active class when clicked", () => {
  beforeEach(() => {
    renderWithWrappers(<Navbar />)
  })

  test("home link", () => {
    testNavbarLinkStyles("Home")
  })

  test("favorites link", () => {
    testNavbarLinkStyles("Favorites")
  })

  test("yetToRead link", () => {
    testNavbarLinkStyles("Yet to Read")
  })
})
