import React from 'react'
import './BasicInfo.scss'
import {Icon, Divider, List} from 'antd'
import PropTypes from 'prop-types'

const BasicInfo = ({data}) => {
  const {social, contact, information, objective, interests} = data

  return (
    <div className='basic-info'>
      <div className='media-social'>
        {social.map((item, index) => <a href={item.link}
                                        key={index}
                                        target='_blank'>
          <Icon type={item.name} theme='filled'/>
        </a>)}
      </div>
      <div className='contact'>
        {contact.map((item, index) =>
          <div key={index}><Icon type={item.name}/>{item.contact}</div>)}
      </div>
      <div className='info'>
        <Divider>BASIC INFORMATION</Divider>
        <List dataSource={information}
              renderItem={(item, index) => (
                <List.Item key={index}
                           className='info-item'>{item.title}: {item.value}</List.Item>)}/>
      </div>
      <WhiteSection title='OBJECTTIVE' text={objective}/>
      <WhiteSection title='INTERESTS' text={interests}/>
    </div>
  )
}

BasicInfo.propTypes = {
  data: PropTypes.object.isRequired
}

export default BasicInfo

const WhiteSection = ({title, text}) => (
  <div className='info'>
    <Divider>{title}</Divider>
    <div className='info-text'>{text}</div>
  </div>
)