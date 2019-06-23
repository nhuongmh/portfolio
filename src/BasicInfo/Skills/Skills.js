import React from 'react'
import {Divider, Rate} from 'antd'
import PropTypes from 'prop-types'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

const Skills = ({data}) => {
  return (
    <div className='info'>
      <Divider>SKILLS</Divider>
      {data.map((item, index) =>
        <div className='info-text' key={index} style={{display: 'flex', textAlign: 'left'}}>
          <ScrollAnimation animateIn='jackInTheBox' animateOnce offset={0}>
            <div style={{width: '140px'}}>{item.title}</div>
          </ScrollAnimation>
          <ScrollAnimation animateIn='jackInTheBox' style={{textAlign: 'right', width: '100%'}} animateOnce offset={0}>
            <Rate disabled defaultValue={item.percent} allowHalf/>
          </ScrollAnimation>
        </div>)}
    </div>)
}

Skills.propTypes = {
  data: PropTypes.array.isRequired
}

export default Skills