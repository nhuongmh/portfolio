import React from 'react'
import './BasicInfo.scss'
import {Icon, Divider, List} from 'antd'
import PropTypes from 'prop-types'
import cv from './data/CV20190205.pdf'
import Skills from './Skills/Skills'

const BasicInfo = ({data, skills}) => {
  const {social, contact, information, objective, language} = data

  return (
    <div className='basic-info'>
      <div className='media-social'>
        {social.map((item, index) => <a href={item.link}
                                        key={index}
                                        target='_blank'
                                        rel='noopener noreferrer'>
          <Icon type={item.name} theme='filled'/>
        </a>)}
      </div>
      <div className='contact'>
        {contact.map((item, index) =>
          <div key={index}><Icon type={item.name}/>{item.contact}</div>)}
        <a href={cv} download><Icon type='file-pdf'/>Get my resume</a>
      </div>
      <WhiteSection title='BASIC INFORMATION' data={information}/>
      <WhiteSection title='OBJECTIVE' data={objective}/>
      <WhiteSection title='LANGUAGE' data={language}/>
      <Skills data={skills}/>
    </div>
  )
}

BasicInfo.propTypes = {
  data: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired
}

export default BasicInfo

const WhiteSection = ({title, data}) => (
  <div className='info'>
    <Divider>{title}</Divider>
    {!Array.isArray(data) ? <div className='info-text'>{data}</div>
      : <List dataSource={data}
              renderItem={(item, index) => (
                <List.Item key={index}
                           className='info-item'>{item.title}
                  <div className='info-italic'>{item.value}</div>
                </List.Item>)}/>}
  </div>
)