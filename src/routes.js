import { Base, Basic } from "./components"

const routes = [
  {
    path: "/",
    text: "Home",
    component: <Base />,
  },
  {
    path: "/01",
    text: "Basic Setup",
    component: <Basic />,
  },
]

export default routes
