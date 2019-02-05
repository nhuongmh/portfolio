import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss'

const Header = ({data}) => {
  const {name, career} = data

  return (
    <div className='header'>
      <div className='cover'>
        <div className='cover-overlay'/>
        <div className='avatar'/>
        <div className='name'><b>{name.last}</b> {name.first}</div>
        <div className='career'>{career}</div>
      </div>
    </div>
  )
}

Header.propTypes = {
  data: PropTypes.object.isRequired
}

export default Header
