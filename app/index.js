import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import {Contact} from './components/Contact'
import Header from './components/Header'
require('./main.css')

class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <div className='main-container'>
              <Route exact path="/" component={Home} />
              <Route path="/kontakt" component={Contact} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}


ReactDOM.render(
  <App />, document.getElementById('app')
)
