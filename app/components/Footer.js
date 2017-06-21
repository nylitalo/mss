import React from 'react'
import Menu from './Menu'

class Footer extends React.Component {
  render () {
    return (<div className='footer'>
      <Menu navList={this.props.links}/>
    </div>)
  }
}

export default Footer
