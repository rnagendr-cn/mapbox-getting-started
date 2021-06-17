import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import routes from "./routes"
import mapboxgl from "!mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css"

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

function App() {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component }, i) => (
          <Route key={i} exact path={path}>
            {component}
          </Route>
        ))}
      </Switch>
    </Router>
  )
}

export default App
