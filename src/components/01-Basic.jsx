import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "!mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax
import withStyles from "react-jss"

const styles = {
  container: {
    height: "100vh",
  },
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "black",
    color: "white",
    padding: "0.5em 1em",
    margin: "1em",
    borderRadius: "6px",
    zIndex: 100,
  },
}

const Basic = ({ classes }) => {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    })
  }, [])

  useEffect(() => {
    if (!map.current) return // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })

  return (
    <>
      <div className={classes.sidebar}>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div className={classes.container} ref={mapContainer} />
    </>
  )
}

export default withStyles(styles)(Basic)
