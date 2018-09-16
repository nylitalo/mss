import React from 'react'
import slug from 'slug'
import { connect } from 'react-redux'
import { updateArea } from '../actions/updateAreaAction'
import './mailform.css';

const services = ['Hemstädning', 'Flyttstädning', 'Storstädning'];

@connect((store) => {
  return {
    area: store.area.area,
    service: store.service.service,
  }
})

class MailForm extends React.Component {
  constructor() {
    super();
    this.state = {loading:false, mailSent: true};
  }

  handleChange(event) {
    this.props.dispatch(updateArea(event.target.value))
  }

  handleSubmit(e) {
      e.preventDefault();
      this.setState({loading:true, mailSent: false});

      emailjs.send("gmail","kontakt_form",{name: e.target.name.value, email : e.target.email.value, area: e.target.area.value, service: e.target.service.value, phone: e.target.phone.value, message: e.target.message.value}).then((res) => {

          this.setState({loading:false, mailSent: true});
      });
  }

  componentDidMount() {
      this.setState({mailSent:false, loading: false});
  }

  loader() {
      return(
          <div className="lds-frame">
              <div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
          </div>
      )
  }

  renderContent() {
      if(this.state.mailSent) {
          return <div className="message-sent"><h3>Meddelande Skickat!</h3></div>
      } else {
          return(
              <form id="contact-form" role="form" onSubmit={this.handleSubmit.bind(this)}>
                  <h1>Kontakta Oss</h1>
                  <label htmlFor='name'>För och Efternamn: </label>
                  <input id='name' type='text' name='name' placeholder='Ex. Anna Andersson' />
                  <label htmlFor='email'>Mail: </label>
                  <input id='email' type='email' name='email' placeholder='ex. anna@mail.com' required={true}/>
                  <label htmlFor='phone'>Telefonnummer: </label>
                  <input id='phone' type='tel' name='phone' placeholder='ex. +4673123456789' />
                  <label htmlFor='area'>Area: </label>
                  <input type='number' id='area' name='area' value={this.props.area} onChange={this.handleChange.bind(this)}/>
                  <label htmlFor='services'>Tjänst: </label>
                  <select id='services' name='service'>
                      {services.map((service) => {
                          const slugService = slug(service, {lower: true})
                          if (service === this.props.service) {
                              return <option
                                  key={slugService}
                                  value={slugService}
                                  selected={service} >{service}</option>
                          }
                          else {
                              return <option
                                  key={slugService}
                                  value={slugService}>{service}</option>
                          }
                      })}
                  </select>
                  <label htmlFor='message'>Meddelande:</label>
                  <textarea id='message' name='message' placeholder='Meddelande...'/>
                  {this.state.loading ? this.loader() : <input id="submit" name="submit" type="submit" value='Skicka'/>}
              </form>
          )
      }
  }

  render() {
    return this.renderContent();
  }
}

export default MailForm
