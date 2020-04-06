import React, { useState } from 'react'

import Question from './question'
import ErrorBoundary from '../../components/errorBoundary'
import Counter from './Counter'

const QuestionOneWrapper = () => {
  const [count, setCount] = useState(0)

  return (
    <ErrorBoundary question={Question}>
      <Counter count={count} onClick={() => setCount(count + 1)} />
    </ErrorBoundary>
  )
}
export default QuestionOneWrapper
