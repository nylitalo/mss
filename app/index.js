import React from 'react'
import ReactDOM from 'react-dom'
require('./main.css')

class App extends React.Component {
  render () {
    return <h1> Marinas Städservice</h1>
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
)
