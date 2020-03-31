import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import React from 'react'

import QuestionListItem from './questionListItem'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  root: {
    width: '100%'
  },
  inline: {
    display: 'inline'
  }
})

const QuestionThree = ({ data }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Paper>
        <List className={classes.root}>
          {data.map((item, i) => (
            <QuestionListItem item={item} key={item.id} divider={i !== data.length - 1} />
		      ))}
        </List>
      </Paper>
    </div>
  )
}
export default QuestionThree
