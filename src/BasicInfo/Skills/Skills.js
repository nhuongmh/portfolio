import React from 'react'
import {Divider, Progress} from 'antd'
import PropTypes from 'prop-types'

const Skills = ({data}) => {
  return (
    <div className='info'>
      <Divider>SKILLS</Divider>
      {data.map((item, index) =>
        <div className='info-text' key={index} style={{display: 'flex', textAlign: 'left'}}>
          <div style={{width: '140px'}}>{item.title}</div>
          <Progress percent={item.percent} showInfo={false} strokeColor='#c8cba5'/>
        </div>)}
    </div>)
}

Skills.propTypes = {
  data: PropTypes.array.isRequired
}

export default Skills