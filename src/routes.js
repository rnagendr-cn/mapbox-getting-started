import { Base, Basic, CustomMarker, FlyTo, RuntimeStyling } from "./components"

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
  {
    path: "/02",
    text: "Custom Marker",
    component: <CustomMarker />,
  },
  {
    path: "/03",
    text: "Fly to a particular coordinate",
    component: <FlyTo />,
  },
  {
    path: "/04",
    text: "Change the style of the map dynamically",
    component: <RuntimeStyling />,
  },
]

export default routes
