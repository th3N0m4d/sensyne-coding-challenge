import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles({
  header: {
    fontWeight: 'bold',
    display: 'inline',
    marginRight: 4
  },
  label: {
    display: 'inline'
  }
})

const QuestionListItem = props => {
  const { icon: Icon, name, species, id, divider, description } = props.item
  const classes = useStyles()

  return (
    <>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar>
            <Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={`${name}: ${species || 'Other'}`}
          secondary={
            <>
              <div>
                <Typography
                  variant='subtitle2'
                  className={classes.header}
                >
					Description:
                </Typography>
                <Typography
                  variant='body2'
                  className={classes.label}
                >
                  {description}
                </Typography>
              </div>
              <div>
                <Typography
                  variant='subtitle2'
                  className={classes.header}
                >
					Guid:
                </Typography>
                <Typography
                  variant='body2'
                  className={classes.label}
                >
                  {id || 'ERROR '}
                </Typography>
              </div>

            </>
          }
        />
      </ListItem>
      {divider && <Divider variant='middle' />}
    </>
  )
}

export default QuestionListItem
