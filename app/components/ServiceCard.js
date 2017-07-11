import React from 'react'
import slugify from 'slugify'

class ServiceCard extends React.Component {
  render () {
    return (
      <a href={'/tjanster/'+slugify(this.props.title)}>
      <div className='sc-container hvr-float'>
        <div className='sc-header'>
          <h1>{this.props.title}</h1>
        </div>
        <div className='sc-richmedia'>
          <img src={this.props.thumbnail} alt={this.props.title} />
        </div>
        <div className='sc-text'>
          <p>{this.props.text}</p>
        </div>
      </div>
      </a>
    )
  }
}

export default ServiceCard
