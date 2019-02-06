import React from 'react'
import {Divider, Progress} from 'antd'
import PropTypes from 'prop-types'

const Skills = ({data}) => {
  return (
    <div className='info'>
      <Divider>SKILLS</Divider>
      {data.map((item, index) =>
        <p className='info-text' key={index} style={{display: 'flex', textAlign: 'left'}}>
          <b style={{width: '140px'}}>{item.title}</b>
          <Progress percent={item.percent} showInfo={false} strokeColor='#c8cba5'/>
        </p>)}
    </div>)
}

Skills.propTypes = {
  data: PropTypes.array.isRequired
}

export default Skills