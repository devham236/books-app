/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, screen, waitFor } from "@testing-library/react"
import renderWithWrappers from "../Utils/renderWithWrappers"
import testRenderElements from "../Utils/testRenderElements"
import Titel_Search from "../../src/Components/Titel_Search"
import server from "../../mocks/mocks"

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

describe("Renders and functions as intended", () => {
  beforeEach(() => {
    renderWithWrappers(<Titel_Search />)
  })

  test("renders heading", () => {
    testRenderElements("heading")
  })

  test("renders paragraph", () => {
    const paragraph = screen.getByText(/titles, authors, topics etc/i)
    expect(paragraph).toBeInTheDocument()
  })

  test("renders input", () => {
    testRenderElements("textbox")
  })

  test("renders icon", () => {
    testRenderElements("icon")
  })
})
