import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import {Contact} from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Prices from './components/Prices'
import Header from './components/Header'
import Footer from './components/Footer'
import {Flyttstadning} from './components/Services/Flyttstadning'
import {Hemstadning} from './components/Services/Hemstadning'


require('./main.css')

class App extends React.Component {
  render () {
    const links = ['Hem', 'Tjänster', 'Om oss', 'Priser', 'Kontakt']
    return (
      <div className='container'>
        <Router>
          <div>
            <header>
              <Header links={links} />
            </header>
            <section>
              <div className='route-container'>
                <Route exact path='/' component={Home} />
                <Route path='/tjanster' component={Services} />
                <Route path='/om-oss' component={About} />
                <Route path='/priser' component={Prices} />
                <Route path='/kontakt' component={Contact} />
              </div>
              <div className='service-container'>
                <Route path='/tjanster/hemstadning' component={Hemstadning} />
                <Route path='/tjanster/flyttstadning' component={Flyttstadning} />
              </div>
            </section>
            <footer>
              <Footer links={links} />
            </footer>
          </div>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
)
