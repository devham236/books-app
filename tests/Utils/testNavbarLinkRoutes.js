import { fireEvent, screen } from "@testing-library/react"

function testNavbarLinkRoutes(name, route) {
  const homeLink = screen.getByRole("link", { name })
  fireEvent.click(homeLink)
  expect(location.pathname).toBe(route)
}

export default testNavbarLinkRoutes
