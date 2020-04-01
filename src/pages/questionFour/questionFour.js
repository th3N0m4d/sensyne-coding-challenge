import React, { PureComponent } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import CircularProgress from '@material-ui/core/CircularProgress'

import { getGeoData, getMapSeries } from './api'
import { getMapOptions } from './helpers'

// Load Highcharts modules
require('highcharts/modules/map')(Highcharts)

class QuestionFour extends PureComponent {
	state = {
		mapData: [],
		data: [],
		loading: true
	}

  componentWillMount () {
	getGeoData().then(mapData => {
		this.setState({
			mapData,
			loading: false
		})
	})

	getMapSeries().then(data=> {
		this.setState({
			data,
			loading: false
		})
	})
  }

  render () {

	const { mapData, loading } = this.state
	  
	if (loading) {
		return <CircularProgress />
	}
	
	const mapOptions = getMapOptions(mapData)
		
    return (
      <div>
        <h1>Map of UK</h1>

        <HighchartsReact
          options={mapOptions}
          constructorType='mapChart'
          highcharts={Highcharts}
        />
      </div>
    )
  }
}

export default QuestionFour
