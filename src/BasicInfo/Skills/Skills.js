import React from 'react'
import {Divider, Progress} from 'antd'
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
            <Progress percent={item.percent * 20} strokeColor={{ from: '#c8cba5', to: '#c8cba5'}} showInfo={false}/>
          </ScrollAnimation>
        </div>)}
    </div>)
}

Skills.propTypes = {
  data: PropTypes.array.isRequired
}

export default Skills
