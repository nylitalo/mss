import React from 'react'

export default class Map extends React.Component {
  componentDidMount() {
    const {lat, lng} = this.props.initialPosition
    new google.maps.Map(this.refs.map, {
      center: {lat, lng},
      zoom: 18
    })
  }

  render() {
    return (
      <div ref='map' className='google-map'>
      </div>
    )
  }
}
