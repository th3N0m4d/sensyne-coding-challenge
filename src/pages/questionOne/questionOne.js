import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

import { Container } from './atoms'

const propTypes = {
  onClick: PropTypes.func
}

const QuestionOne = ({ count, onClick }) => (
  <Container>
    <Button variant='contained' onClick={onClick}>
      {`I've been clicked: ${count} times`}
    </Button>
  </Container>
)

QuestionOne.propTypes = propTypes

export default QuestionOne
