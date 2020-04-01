import React, { useState } from 'react'
import Question from './question'
import QuestionOne from './questionOne'
import ErrorBoundary from '../../components/errorBoundary'

const QuestionOneWrapper = () => {
  const [count, setCount] = useState(0)

  return (
    <ErrorBoundary question={Question}>
      <QuestionOne count={count} onClick={() => setCount(count + 1)} />
    </ErrorBoundary>
  )
}
export default QuestionOneWrapper
