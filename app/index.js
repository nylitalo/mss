import React from 'react'
import ReactDOM from 'react-dom'
import ServiceCard from './components/ServiceCard'
import Header from './components/Header'
require('./main.css')

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className='main-container'>
          <ServiceCard title='Hemstädning'
            thumbnail='./app/static/images/hemstad_card.png'
            text='Tänk att komma hem till ett nystädat hem varje vecka'/>
          <ServiceCard title='Hemstädning'
            thumbnail='./app/static/images/hemstad_card.png'
            text='Tänk att komma hem till ett nystädat hem varje vecka'/>
        </div>
      </div>

    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
)
