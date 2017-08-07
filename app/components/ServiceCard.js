import React from 'react'
import slug from 'slug'
import { Link } from 'react-router-dom'
import './servicecard.css'

export const ServiceCard = (props) => (
  <Link to= {'/tjanster/' + slug(props.title, {lower: true})}>
    <div className='sc-container hvr-float'>
      <div className='sc-header'>
        <h1>{props.title}</h1>
      </div>
      <div className='sc-richmedia'>
        <img src={props.thumbnail} alt={props.title} />
      </div>
      <div className='sc-text'>
        <p>{props.text}</p>
      </div>
    </div>
  </Link>
)
