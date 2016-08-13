import React from 'react'
import store from '../../store'

import unnamedChartComponent from '../../libraries/amcharts3-react';

const TheResults = React.createClass({
  getInitialState() {
    return {fetched: false}
  },
  componentDidMount() {
    store.plans.basic.data.on('change', () => {
      this.setState({fetched: true})
    })
    store.plans.premium.data.on('change', () => {
      this.setState({fetched: true})
    })
    store.plans.business.data.on('change', () => {
      this.setState({fetched: true})
    })
    store.plans.fund.data.on('change', () => {
      this.setState({fetched: true})
    })
  },
  render() {
    let basicData = store.plans.basic.data.get('annualData')
    let premiumData = store.plans.premium.data.get('annualData')
    let businessData = store.plans.business.data.get('annualData')
    // let fundData = store.plans.fund.data.get('annualData')

    let fixedData = basicData.map((point, i) => {
      // console.log(point.balance);
      console.log(businessData[i].balance);
      return {
        basic: point.balance,
        premium: premiumData[i].balance,
        business: businessData[i].balance,
        // fund: fundData[i].balance,
        basicBalloon: formatPrice(point.balance),
        premiumBalloon: formatPrice(premiumData[i].balance),
        businessBalloon: formatPrice(businessData[i].balance),

        date: `${point.date.year}-${point.date.month}-${point.date.day}`
      }
    })

    function formatPrice(value) {
  		while(/(\d+)(\d{3})/.test(value.toString())) {
  			value = value.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
  		}
  		var price = '$' + value;
  		return price;
  	}

    // var chartData = [{title:"sample 1",value:130},{title:"sample 2",value:26}];
    var chartData = fixedData;
    var config = {
      type: "serial",
      theme: "dark",

      marginRight: 30,
	    marginTop: 17,
	    autoMarginOffset: 20,

      dataProvider: chartData,

      balloon: {
        // adjustBorderColor: true,
        color: '#49494A',
        // color: '#FFF',
        // cornerRadius: 3,
        // fillColor: "#27A5F9",
        fillAlpha: 1,
        // offsetX: 0,
      },

      graphs: [{
        id: "basic",
        lineColor: "#fff",

        bullet: "round",
        bulletBorderAlpha: 1,
        bulletColor: "#FFF",
        bulletSize: 5,
        hideBulletsCount: 50,
        lineThickness: 2,
        title: "red line",
        useLineColorForBulletBorder: true,
        valueField: "basic",
        balloonText: "<div class=\"chart-balloon\"><span class=\"plan-name\">Basic</span><span class=\"balloon-value\">[[basicBalloon]]</span></div>"
      },
      {
        id: "premium",
        lineColor: "#fff",

        bullet: "round",
        bulletBorderAlpha: 1,
        bulletColor: "#FFF",
        bulletSize: 5,
        hideBulletsCount: 50,
        lineThickness: 2,
        title: "red line",
        useLineColorForBulletBorder: true,
        valueField: "premium",
        balloonText: "<div class=\"chart-balloon\"><span class=\"plan-name\">Premium</span><span class=\"balloon-value\">[[premiumBalloon]]</span></div>"
      },
      {
        id: "business",
        lineColor: "#fff",

        bullet: "round",
        bulletBorderAlpha: 1,
        bulletColor: "#FFF",
        bulletSize: 5,
        hideBulletsCount: 50,
        lineThickness: 2,
        title: "red line",
        useLineColorForBulletBorder: true,
        valueField: "business",
        "balloonText": "<div class=\"chart-balloon\"><span class=\"plan-name\">Business</span><span class=\"balloon-value\">[[businessBalloon]]</span></div>",
        // balloonText: "<span style='font-size:18px;'> business $[[business]]</span>"
      }],

      valueAxes: [{
        logarithmic: true,
        unit: '$',
        unitPosition: 'left',
			}],

      // chartScrollbar: {
  	  //   enabled: true,
  	  //   scrollbarHeight: 10,
  	  //   dragIconWidth: 20
      // },

      chartCursor: {
	        valueLineEnabled: true,
	        // valueLineBalloonEnabled: true,
	        valueLineAlpha: 0.5,
	        fullWidth: true,
	        cursorAlpha: 0.5
	    },

      categoryField: "date",
      categoryAxis: {
        parseDates: true,
      },
    };





    let chart = (
      <div id="result-chart">
        {React.createElement(AmCharts.React, config)}
      </div>
    )

    return (
      <section className="the-results">
        <div className="content">
          <h2>The Results</h2>
          {chart}
        </div>
      </section>
    )
  }
})

export default TheResults
