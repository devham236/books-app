import { screen } from "@testing-library/react"

function testRenderElements(role) {
  const element = screen.getByRole(role)
  expect(element).toBeInTheDocument()
}

export default testRenderElements
