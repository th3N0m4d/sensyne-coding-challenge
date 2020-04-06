import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import AcUnit from '@material-ui/icons/AcUnit'

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

const propTypes = {
  Icon: PropTypes.any,
  name: PropTypes.string,
  species: PropTypes.string,
  divider: PropTypes.bool,
  description: PropTypes.string,
  id: PropTypes.any
}

const defaultProps = {
  id: 'Other',
  name: 'N/A',
  species: 'Other',
  Icon: AcUnit
}

const Profile = ({ id, Icon, name, species, divider, description }) => {
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
          primary={`${name}: ${species}`}
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
                  {id}
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

Profile.propTypes = propTypes
Profile.defaultProps = defaultProps

export default Profile
