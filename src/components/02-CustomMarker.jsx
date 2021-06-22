import React, { useRef, useEffect } from "react"
import mapboxgl from "!mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax
import withStyles from "react-jss"
import { Marker } from "../assets"
import geojson from "../data/marker"

const styles = {
  container: {
    height: "100vh",
  },
  marker: {
    backgroundImage: `url('${Marker}')`,
    backgroundSize: "cover",
    width: "6vmin",
    height: "6vmin",
    borderRadius: "50%",
    cursor: "pointer",
  },
}

const CustomMarker = ({ classes }) => {
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-96, 37.8],
      zoom: 3,
    })
    map.current.on("load", () => {
      geojson.features.forEach((marker) => {
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<h3>${marker.properties.title}</h3>
          <p>${marker.properties.description}</p>`
        )

        // Default marker
        const defaultMarker = new mapboxgl.Marker()
          .setLngLat(marker.geometry.coordinates)
          .setPopup(popup)
          .addTo(map.current)

        // Custom marker
        // let el = document.createElement("div")
        // el.className = classes.marker

        // const customMarker = new mapboxgl.Marker(el)
        //   .setLngLat(marker.geometry.coordinates)
        //   .setPopup(popup)
        //   .addTo(map.current)
      })
    })
  }, [])

  return <div className={classes.container} ref={mapContainer} />
}

export default withStyles(styles)(CustomMarker)
