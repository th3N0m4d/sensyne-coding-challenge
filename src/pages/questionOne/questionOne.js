import React from 'react'
import Button from '@material-ui/core/Button'

import { Container } from './atoms'

const QuestionOne = ({ count, onClick }) => (
  <Container>
    <Button variant='contained' onClick={onClick}>
      {`I've been clicked: ${count} times`}
    </Button>
  </Container>
)

export default QuestionOne
