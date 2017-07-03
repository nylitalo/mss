import React from 'react'
import Menu from './Menu'

class Services extends React.Component {
  render () {
    const serviceList = ['Hemstädning', 'Flyttstädning', 'Kontorsstädning', 'Trappstädning', 'Snöskottning']
    return (
      <div>
        <Menu navList={serviceList} cssClass='service-menu'/>
      </div>
    )
  }
}

export default Services
