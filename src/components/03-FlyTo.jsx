import React, { useRef, useEffect } from "react"
import mapboxgl from "!mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax
import withStyles from "react-jss"

const styles = {
  container: {
    height: "100vh",
  },
}

const FlyTo = ({ classes }) => {
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-96, 37.8],
      zoom: 7,
    })
    map.current.on("load", () => {
      setTimeout(() => {
        map.current.flyTo({
          center: [-13, 20],
          zoom: 12,
        })
      }, 3000)
    })
  }, [])

  return <div className={classes.container} ref={mapContainer} />
}

export default withStyles(styles)(FlyTo)
