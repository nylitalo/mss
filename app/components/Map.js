import React from 'react'

export default class Map extends React.Component {
  componentDidMount() {
    const {lat, lng} = this.props.initialPosition
    const map = new google.maps.Map(this.refs.map, {
      center: {lat, lng},
      zoom: 18
    })
    const marker = new google.maps.Marker({
      position: {lat, lng},
      map: map
    })
  }

  render() {
    return (
      <div ref='map' className='google-map'>
      </div>
    )
  }
}
