import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'

class QuestionOne extends PureComponent {

	state = {
		label: "I've been clicked: ",
		counter: 0
	}

  handleOnClick = () => {
	this.setState((prevState) => ({
	  counter: prevState.counter + 1
	}))
  }

  render () {
    return (
      <div style={{ marginTop: 48 }}>
        <Button variant='contained' onClick={this.handleOnClick}>
          {this.state.label} {this.state.counter} times
        </Button>
      </div>
    )
  }
}

export default QuestionOne
