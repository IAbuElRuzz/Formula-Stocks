import React from 'react'
import Dropzone from 'react-dropzone'

import store from '../../store'
import admin from '../../admin'

const AdminAPI = React.createClass({
  onDrop(files) {
    /* ACCEPTABLE FILENAMES */
    const filenames = [
        "annual_basic.json",
        "annual_premium.json",
        "annual_business.json",
        "annual_fund.json",
        "monthly_basic.json",
        "monthly_premium.json",
        "monthly_business.json",
        "monthly_fund.json",
        "weekly_basic.json",
        "weekly_premium.json",
        "weekly_business.json",
        "weekly_fund.json"
    ];

    let badFiles = files.filter((file,i) => {
      console.log(i);
      if (filenames.indexOf(file.name) === -1) {
        return true
      }
    })

    if (badFiles.length > 0) {
      // console.error('Bad file name! ', badFiles)
      store.session.set('notification', {
        text: `Bad file name: ${badFiles[0].name}`,
        type: 'error'
      })
      return null
    } else {
      admin.filesToUpload = files.length
      let basicFiles = files.filter((file) => { if (file.name.indexOf('basic') > -1) { return true } })
      let premiumFiles = files.filter((file) => { if (file.name.indexOf('premium') > -1) { return true } })
      let businessFiles = files.filter((file) => { if (file.name.indexOf('business') > -1) { return true } })
      let fundFiles = files.filter((file) => { if (file.name.indexOf('fund') > -1) { return true } })

      if (basicFiles.length > 0) {
        store.plans.get('basic').updateData(basicFiles)
      }
      if (premiumFiles.length > 0) {
        store.plans.get('premium').updateData(premiumFiles)
      }
      if (businessFiles.length > 0) {
        store.plans.get('business').updateData(businessFiles)
      }
      if (fundFiles.length > 0) {
        store.plans.get('fund').updateData(fundFiles)
      }
    }
  },
  render() {
    return (
      <div className="admin-api">
        <div className="wrapper white">
          <h2>Upload JSON files</h2>
          <Dropzone className="dropzone" onDrop={this.onDrop}>
            <div>
              <h3>Drag and drop JSON files here</h3>
              <img src="/assets/icons/json_icon.svg"/>
            </div>
          </Dropzone>
        </div>

      </div>
    )
  }
})

export default AdminAPI
