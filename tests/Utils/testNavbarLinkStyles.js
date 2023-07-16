import { fireEvent, screen } from "@testing-library/react"

function testNavbarLinkStyles(name) {
  const link = screen.getByRole("link", { name })
  fireEvent.click(link)
  expect(link.parentElement).toHaveClass("active")
}

export default testNavbarLinkStyles
