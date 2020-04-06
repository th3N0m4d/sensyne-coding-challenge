import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

import { Container } from './atoms'

const propTypes = {
  onClick: PropTypes.func
}

const Counter = ({ count, onClick }) => (
  <Container>
    <Button variant='contained' onClick={onClick}>
      {`I've been clicked: ${count} times`}
    </Button>
  </Container>
)

Counter.propTypes = propTypes

export default Counter
