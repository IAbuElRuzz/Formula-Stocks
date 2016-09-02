import React from 'react'
import Scroll from 'react-scroll'


const OurProducts = React.createClass({
  downloadBrochure(name) {
    window.open(`/assets/downloads/${name}.pdf`)
  },
  render() {
    let Element = Scroll.Element;
    let ScrollLink = Scroll.Link
    return (
      <section className="our-products bg-gray">
        <div className="content">
          <Element name="ourProducts"></Element>
          <div className="title-container">
            <h2>Our <span className="blue-color">products</span></h2>
            <div className="divider"></div>
          </div>
          <p>
          We offer four products, each of which gives you access to a secure dashboard.
          You will be able to track our model portfolio, access our purchase and
          sales transactions in real-time as they occur,
          and obtain valuable information about stocks selected for purchase or sale.<br/><br/>


          You can choose to use this information to buy stocks through your regular broker/bank,
          either by using our selections on an ongoing basis, or by mirroring the model portfolio
          and keeping abreast of changes as they regularly occur.<br/><br/>

          Once you have made your purchases, you simply wait. Later,
          a sales recommendation will suggest when to sell the stock.
          The average holding period is 2.2 years.
          </p>

          <div className="icon-container">
            <div className="plan-icon">
              <img src="assets/icons/icon-user.svg"/>
              <p className="blue-color">Basic</p>
            </div>
            <div className="plan-icon">
              <img src="assets/icons/icon-briefcase.svg"/>
              <p className="blue-color">Premium</p>
            </div>
            <div className="plan-icon">
              <img src="assets/icons/icon-chart.svg"/>
              <p className="blue-color">Business</p>
            </div>
            <div className="plan-icon">
              <img src="assets/icons/icon-building.svg"/>
              <p className="blue-color">Fund</p>
            </div>
          </div>

          <p>
          <span className="bold">Basic</span> and <span className="bold">Premium</span> are both diversified retail products with excellent value propositions and targeted at the private investor.
          <span className="bold"> Business</span> is designed for CEOs, accredited investors, and enterprising investors focusing on performance and margin of safety,
          at the expense of diversification. Our <span className="bold">Fund</span> product is for institutional capital,
          capable of handling large diversified AUMs, which other products cannot.
           Each product utilizes a different number of Intelligent Investment Technology formulas.
          You can explore our <ScrollLink className="blue-color" to="pricing" smooth={true} offset={-100} duration={1000}>product matrix</ScrollLink> below.
          Or see our <a className="blue-color" onClick={this.downloadBrochure.bind(null, 'FAQ')}>FAQ</a> or <a className="blue-color" onClick={this.downloadBrochure.bind(null,'business')}>business brochure</a>.<br/><br/>

          <span className="disclaimer">Formula Stocks does not provide personalized investment advice. We respect your privacy
          and receive no financial information in the process.
          We do not manage money or recommend stocks with which we have any affiliation.</span>
          </p>
        </div>
      </section>
    )
  }
})

export default OurProducts
