import React, { useRef, useEffect } from "react"
import mapboxgl from "!mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax
import withStyles from "react-jss"

const styles = {
  container: {
    height: "100vh",
  },
}

const HoverEvent = ({ classes }) => {
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/raagul-conde/ckq6jelye06h518ps7ynsi9ia",
      center: [-97.109, 37.26],
      zoom: 3.37,
    })
  }, [])

  useEffect(() => {
    if (!map.current) return
    map.current.on("mousemove", (e) => {
      // const allLayerData = map.current.queryRenderedFeatures(e.point)
      // console.log(allLayerData)
      // ------------------------------
      // const layerSpecificData = map.current.queryRenderedFeatures(e.point, {
      //   layers: ["statedata-0idaly"],
      // })
      // console.log(layerSpecificData)
    })
  })

  return <div className={classes.container} ref={mapContainer} />
}

export default withStyles(styles)(HoverEvent)
