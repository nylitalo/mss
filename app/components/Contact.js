import React from 'react'
import slug from 'slug'

const services = ['Hemstädning', 'Flyttstädning', 'Kontorsstädning', 'Trappstädning', 'Snöskottning']

export const Contact = (props) => {
  return (
    <div>
      <h1>Kontakta oss</h1>
      <form>
        <input type='text' name='name' placeholder='För och efternamn' />
        <input type='mail' name='email' placeholder='ex. john@internet.com' />
        <input type='number' name='phone' placeholder='ex. +4673123456789' />
        <select name='service'>
          {services.map((service) => (
            <option value={slug(service, {lower: true})}>{service}</option>
          ))}
        </select>
      </form>
    </div>

  )
}
