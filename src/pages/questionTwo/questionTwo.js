import React, { PureComponent } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Async from 'react-async'
import CircularProgress from '@material-ui/core/CircularProgress'

import { getCardDetails } from './api'
import styles from './styles'
import { Container } from './atoms'

class QuestionTwo extends PureComponent {
  render () {
    const { classes } = this.props

    return (

      <Async promiseFn={getCardDetails}>
        <Async.Loading>
          <div className={classes.spinner}>
            <CircularProgress />
          </div>
        </Async.Loading>
        <Async.Resolved>
          {
            ({ title, imgSrc, body }) => (
              <div className={classes.container}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={imgSrc}
                    title={title}
                  />
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
          }
        </Async.Resolved>
        <Async.Rejected>
          {
            error => (
              <Container>
                {error.message}
              </Container>
            )
          }
        </Async.Rejected>
      </Async>
    )
  }
}

export default withStyles(styles)(QuestionTwo)
