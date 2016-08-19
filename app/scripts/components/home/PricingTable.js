import React from 'react'
import store from '../../store'

import Product from './Product'



const PricingTable = React.createClass({
  getInitialState() {
    return {
      basicStats: store.plans.get('basic').get('stats')
    }
  },
  componentDidMount() {
    store.plans.on('update', this.updateState)
  },
  componentWillUnmount() {
    store.plans.off('update', this.updateState)
  },
  updateState() {
    this.setState({basicStats: store.plans.get('basic').get('stats')})
  },
  render() {
    return (
      <section className="pricing-table">
        <div className="content">
          <h2 className="title">Features & Pricing</h2>
          <div className="divider"></div>
          <h3 className="subtitle">Compare the products and find the right solution for you</h3>
          <div className="plans">
            <Product name="Basic" price="50" stats={store.plans.get('basic').get('stats')} billed="Monthly" signupText="Start Free Month" info={store.plans.get('basic').get('info')}/>
            <Product name="Premium" price="100" stats={store.plans.get('premium').get('stats')} billed="Monthly" signupText="Get Started" info={store.plans.get('premium').get('info')}/>
            <Product name="Business" price="20,000" stats={store.plans.get('business').get('stats')} billed="Yearly" signupText="Get Started" info={store.plans.get('business').get('info')}/>
            <Product name="Fund" price="120,000" stats={store.plans.get('fund').get('stats')} billed="Yearly" signupText="Get Started" info={store.plans.get('fund').get('info')}/>
          </div>
          <p className="disclaimer">
            Information in pricing tables does represent, warrant or guarantee any specific level of future investment performance.
            Historical numbers are based on backtested performance from 1975 - 2009, whereas data from 2009 - 2016 reflects actual investment results.
            Investing always involve varying degrees of risk.
          </p>
        </div>
      </section>
    )
  }
})

export default PricingTable
