import React from 'react'
import ServicePriceCalculator from './ServicePriceCalculator'
import slug from 'slug'
import './servicecontent.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateService } from '../actions/updateServiceAction'
import serviceData from '../static/data/serviceData.json';

@connect((store) => {
  return {
    service: store.service.service,
  }
})

class ServiceContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            info: "",
            banner: ""
        }
    }
    componentWillMount() {
        let service = this.props.match.params.service;

        this.props.dispatch(updateService(service));

        Object.keys(serviceData).map((key, i) => {
            if(service === key) {
                console.log("I EXIST, Render me please!");
            } else {
                console.log("No service like this: ", service, " please add to json file");
            }
        })
    }
  render () {
      let service = this.props.match.params.service;

    return(
        <div>
            <h1></h1>
        </div>
    )
  }
}

export default ServiceContent
