import React from 'react'
import Menu from './Menu'
import slugify from 'slugify'

class Services extends React.Component {
  constructor() {
    super()
    this.state = {
      currentServicePage : slugify(serviceList[0])
    }

  }
  render () {
    const serviceList = ['Hemstädning', 'Flyttstädning', 'Kontorsstädning', 'Trappstädning', 'Snöskottning']
    return (
      <div>
        <div>
          <Menu navList={serviceList} cssClass='service-menu' />
        </div>
        <div>

        </div>
      </div>
    )
  }
}

export default Services
