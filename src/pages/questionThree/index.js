import React from 'react'
import Android from '@material-ui/icons/Android'
import BugReport from '@material-ui/icons/BugReport'
import Pets from '@material-ui/icons/Pets'

import ErrorBoundary from '../../components/errorBoundary'
import QuestionThree from './questionThree'
import Question from './question'
import { createRowData } from './mocks'

const createMockData = () => {
  /* Please do not refactor this function */
  return [
	  createRowData({ species: 'Robot', name: 'T-100', Icon: Android, description: "Likes long walks, walking over the bones of it's enemies" }),
	  createRowData({ species: 'Bug', name: 'Barry', Icon: BugReport, description: 'Likes long walks, and creating problems in all your code' }),
	  createRowData({ species: 'Rabbit', name: 'Roger', Icon: Pets, description: 'Likes long walks and getting to know the inner you' }),
	  createRowData({ species: null, name: null, Icon: null, description: null })
  ]
}

const questionThree = () => {
  const mockData = createMockData()

  return (
    <ErrorBoundary question={Question}>
      <QuestionThree items={mockData} />
    </ErrorBoundary>
  )
}

export default questionThree
