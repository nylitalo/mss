import React from 'react'

class Menu extends React.Component {
  constructor() {
    super (props)
  }
  render () {
    return (
      { this.props.navList.map((link) => {
        return (
          <div>
            {link}
          </div>)
      })}
    )
  }
}

export default Menu
