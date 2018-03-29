import React from 'react'
import slug from 'slug'
import { Link } from 'react-router-dom'
import './servicecard.css'


export const ServiceCard = (props) => (
    <div className="servicecard-container">
      <Link to={'/tjanster/' + slug(props.title, {lower: true})}>
        <div className='sc-richmedia'>
          <img src={props.thumbnail} alt={props.title} />
        </div>
      </Link>
      <Link to={'/tjanster/' + slug(props.title, {lower: true})}>
        <div className='sc-header'>
          <h1>{props.title}</h1>
        </div>
      </Link>
    </div>
)