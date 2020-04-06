import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import React from 'react'

import Profile from './Profile'

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

const QuestionThree = ({ items }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Paper>
        <List className={classes.root}>
          {items.map((item, i) => (
            <Profile {...item} key={item.id} divider={i !== items.length - 1} />
		      ))}
        </List>
      </Paper>
    </div>
  )
}
export default QuestionThree
