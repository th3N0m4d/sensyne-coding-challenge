import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import CircularProgress from '@material-ui/core/CircularProgress'

import { getCardDetails } from './api'
import styles from './styles'

class QuestionTwo extends Component {
	state = {
		title: null,
		imgSrc: null,
		body: '',
		loading: true
	}
	
	componentDidMount() {
		
		getCardDetails().then(({ title, imgSrc, body}) => {
		  this.setState({
        title,
        imgSrc,
        body,
        loading: false
		  })
		})
		
	}
  

  render () {
    const { classes } = this.props
    const { title, imgSrc, body, loading } = this.state
    if (loading) {
      return (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      )
    }
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={imgSrc}
            title={title}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <div
              className={classes.body}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(QuestionTwo)
