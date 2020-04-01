import React from 'react'
import Typography from '@material-ui/core/Typography'
import { CardMedia } from '@material-ui/core'
import solution from './images/solution.png'

const question = () => {
  return (
    <div>
      <Typography variant='h4' gutterBottom>
				Question Four
      </Typography>
      <Typography variant='h5' gutterBottom>
				UK's crop circle map
      </Typography>
      <Typography variant='body1' gutterBottom>
				Ah Great Britain! The whole island has so much to offer to keen adventurers and tourists alike!
        Some would even say that travelers from outer space have visited this beautiful place leaving some messages on crop fields.
      </Typography>
      <Typography variant='body1' gutterBottom>
        The map you see below shows how many crop circles were cataloged this year.
      </Typography>
      <Typography variant='body1' gutterBottom>
				Unfortunately someone left the component unattended and committed the code with bugs before going on vacation. Could you fix the bugs and refactor the code if you have spare time? Sweet!
      </Typography>
      <CardMedia
        image={solution}
        style={{
          width: '100%',
          height: 500,
          backgroundSize: 'contain'
        }}
        title='The Solution'
      />
    </div>
  )
}

export default 	question
