/**
 * Represents Highcharts' setup options
 * @param {*} mapData - Actual data rendered by Highcharts
 * @param {*} data  - Provides simplified interface to adding data to a chart
 */
const getMapOptions = (mapData = [], data = []) => {
  return {
    title: {
      text: ''
    },
    colorAxis: {
      min: 0,
      stops: [[0.4, '#ffff00'], [0.65, '#bfff00'], [1, '#40ff00']]
    },

    series: [
      {
        mapData,
        name: 'UK',
        data
      }
    ]
  }
}

export default { getMapOptions }
