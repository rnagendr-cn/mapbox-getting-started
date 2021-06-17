import React from "react"
import withStyles from "react-jss"
import { Link } from "react-router-dom"
import routes from "../routes"

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "5vh 10vw",
  },
  item: {
    margin: "10px 0",
  },
}

const Base = ({ classes }) => {
  return (
    <div className={classes.container}>
      {routes.slice(1, routes.length).map(({ path, text }, i) => (
        <Link key={i} to={path}>
          <p className={classes.item}>{`${i + 1}. ${text}`}</p>
        </Link>
      ))}
    </div>
  )
}

export default withStyles(styles)(Base)
