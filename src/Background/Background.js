import React from 'react'
import './Background.scss'
import {Card, List, Avatar} from 'antd'
import PropTypes from 'prop-types'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

const Background = ({data}) => {
  return (
    <div className='background'>
      {data.map((item, index) =>
        <Card title={item.title} key={index} bordered={false}>
          <List itemLayout='horizontal'
                dataSource={item.list}
                className='card-list'
                renderItem={content => (
                  <List.Item style={{display: 'block'}}>
                    <ScrollAnimation animateIn='fadeInRightBig' animateOnce offset={0}>
                      <List.Item.Meta avatar={content.logo && <Avatar src={content.logo} shape='square' size={64}/>}
                                      title={content.title}
                                      description={content.daterange}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeInRightBig' animateOnce offset={0}>
                      <i style={content.logo ? {marginLeft: '80px'} : {}}>{content.subtitle}</i>
                    </ScrollAnimation>
                    <ul style={content.logo ? {marginLeft: '64px'} : {}}>
                      {content.description && content.description.map((desc, idx) =>
                        <ScrollAnimation key={idx} animateIn='fadeInRightBig' animateOnce offset={0}>
                          <li>{desc}</li>
                        </ScrollAnimation>)}
                      {content.link &&
                      <ScrollAnimation animateIn='fadeInRightBig' animateOnce offset={0}>
                        <li>
                          Further information on <a href={content.link}
                                                    target='_blank'
                                                    rel='noopener noreferrer'>{content.link}</a>
                        </li>
                      </ScrollAnimation>}
                    </ul>
                  </List.Item>
                )}/>
        </Card>)}
    </div>)
}

Background.propTypes = {
  data: PropTypes.array.isRequired
}

export default Background