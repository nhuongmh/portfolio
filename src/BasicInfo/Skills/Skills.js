import React from 'react'
import {Divider, Progress} from 'antd'
import PropTypes from 'prop-types'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css'

const Skills = ({data}) => {
  return (
    <div className='info'>
      <Divider>SKILLS</Divider>
      {data.map((item, index) =>
        <div className='info-text' key={index} style={{display: 'flex', textAlign: 'left'}}>
          <AnimationOnScroll animateIn='jackInTheBox' animateOnce offset={0}>
            <div style={{width: '140px'}}>{item.title}</div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='jackInTheBox' style={{textAlign: 'right', width: '100%'}} animateOnce offset={0}>
            <Progress percent={item.percent * 20} strokeColor={{ from: '#eabfab', to: '#eabfab'}} showInfo={false}/>
          </AnimationOnScroll>
        </div>)}
    </div>)
}

Skills.propTypes = {
  data: PropTypes.array.isRequired
}

export default Skills
