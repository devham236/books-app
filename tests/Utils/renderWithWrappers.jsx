/* eslint-disable react/react-in-jsx-scope */
import { ContextProvider } from "../../src/Context"
import { BrowserRouter } from "react-router-dom"
import { render } from "@testing-library/react"
import { createMemoryHistory } from "history"

function renderWithWrappers(component, options = {}) {
  const history = options.history || createMemoryHistory()
  return render(
    <ContextProvider>
      <BrowserRouter history={history}>{component}</BrowserRouter>
    </ContextProvider>
  )
}

export default renderWithWrappers
