import { rest } from "msw"

const handlers = [
  rest.get("https://www.googleapis.com/books/v1/volumes", (req, res, ctx) => {
    const { input } = req.url.searchParams
    if (input !== "") {
      const responseArray = [
        { id: 1, title: "Book 1" },
        { id: 2, title: "Book 2" },
      ]
      return res(ctx.status(200), ctx.json(responseArray))
    } else {
      return res(ctx.status(400), ctx.json({ error: "Input empty" }))
    }
  }),
]

export default handlers
