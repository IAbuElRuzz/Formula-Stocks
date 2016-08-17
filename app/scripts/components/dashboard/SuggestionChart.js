import React from 'React'


const SuggestionChart = React.createClass({
  render() {
    let chartData = this.props.data || []
    chartData = chartData.map((point) => {
      return {
        open: Number(point[1].toFixed(2)),
        high: Number(point[2].toFixed(2)),
        close: Number(point[3].toFixed(2)),
        date: point[0],
      }
    })
    chartData = chartData.slice(0,30)
    chartData = chartData.reverse()

    let color = {
      // positive: '#12D99E',
      // negative: '#da1354'
      positive: '#27A5F9',
      negative: '#49494A'
    }

    var config = {
      "type": "serial",
      "dataProvider": chartData,
      "theme": "light",
      "marginRight": 0,
      "marginLeft": 60,
      "marginTop": 25,
      "marginBottom": 25,
      "autoMargins" : false,
      "valueAxes": [{
          "id": "v1",
          unit: '$',
          unitPosition: 'left',
          "axisAlpha": 0,
          "position": "left",
          "ignoreAxisWidth":true,
          // inside: true,
          gridAlpha: 0.05,
      }],
      balloon: {
        color: '#49494A',
        fillAlpha: 1,
        borderColor: '#27A5F9',
        borderThickness: 1,
      },
      "graphs": [
          {
            "id": "suggestion",
            lineColor: color.negative,
            "lineThickness": 2,
            "negativeLineColor": color.positive,
            "negativeBase": this.props.suggestedPrice + 0.001,
            "valueField": "close",
            "balloonText": `<div class=\"suggestion-balloon\"><p class="ticker">${this.props.ticker}</p> <p>$[[value]]</p></div>`
        }
      ],
      chartCursor: {
	        valueLineEnabled: true,
	        valueLineAlpha: 0.5,
	        cursorAlpha: 0.1
	    },
      categoryField: "date",
      categoryAxis: {
        parseDates: true,
        gridAlpha: 0,
        tickLength: 0,
        axisAlpha: 0,
      },
      "guides": [{
					"value" : this.props.suggestedPrice + 0.001,
					"lineColor" : "#27A5F9",
					"lineAlpha": 0.25,
					"lineThickness": 1,
					"position" : "right"
			}]
    };





    let chart = (
      <div id="suggestion-chart">
        {React.createElement(AmCharts.React, config)}
      </div>
    )

    return chart
  }
})

export default SuggestionChart
