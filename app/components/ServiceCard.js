import React from 'react'

class ServiceCard extends React.Component {
  render () {
    return (
      <div className="sc-container hvr-float">
        <div className="sc-header">
          <h1>{this.props.title}</h1>
        </div>
        <div className="sc-richmedia">
          <img src={this.props.thumbnail} alt={this.props.title} />
        </div>
        <div className="sc-text">
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default ServiceCard
