import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

const propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.any,
  body: PropTypes.any,
  classes: PropTypes.object
}

const defaultProps = {
  title: '',
  imgSrc: null,
  body: '',
  classes: {}
}

const AnimalBio = ({ title, imgSrc, body, classes }) => (
  <div className={classes.container}>
    <Card className={classes.card}>
      {
        imgSrc &&
          <CardMedia
            className={classes.media}
            image={imgSrc}
            title={title}
          />
      }
      <CardContent className={classes.content}>
        <Typography gutterBottom variant='h5' component='h2'>
          {title}
        </Typography>
        <div
          className={classes.body}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </CardContent>
    </Card>
  </div>
)

AnimalBio.propTypes = propTypes
AnimalBio.defaultProps = defaultProps

export default withStyles(styles)(AnimalBio)
