import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Async from 'react-async'
import CircularProgress from '@material-ui/core/CircularProgress'

import { getCardDetails } from './api'
import styles from './styles'
import { Container } from './atoms'
import AnimalBio from './AnimalBio'

const QuestionTwo = ({ classes }) => (

  <Async promiseFn={getCardDetails}>
    <Async.Loading>
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    </Async.Loading>
    <Async.Resolved>
      {
        childProps => <AnimalBio {...childProps} />
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

export default withStyles(styles)(QuestionTwo)
