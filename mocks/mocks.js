import { setupServer } from "msw/node"
import handlers from "./mockServiceWorker"

const server = setupServer(...handlers)

export default server
