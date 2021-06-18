import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import withStyles from 'react-jss'
import conditionalStyles from '../data/styles'

const styles = {
  container: {
    height: '100vh',
  },
  styleToggler: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '0.5em 1em',
    margin: '1em',
    borderRadius: '6px',
    zIndex: 100,
  },
}

const RuntimeStyling = ({ classes }) => {
  const mapContainer = useRef(null)
  const map = useRef(null)

  const [active, setActive] = useState(1)

  const toggleStyle = () => {
    setActive(active + 1 > 3 ? 1 : active + 1)
  }

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: conditionalStyles[active],
      center: [72.8332, 19.049],
      zoom: 10.18,
    })
  }, [])

  useEffect(() => {
    map.current.setStyle(conditionalStyles[active])
  }, [active])

  return (
    <div>
      <button
        className={classes.styleToggler}
        onClick={() => toggleStyle(active)}>
        Toggle Style
      </button>
      <div className={classes.container} ref={mapContainer} />
    </div>
  )
}

export default withStyles(styles)(RuntimeStyling)
