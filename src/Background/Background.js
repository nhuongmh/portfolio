import React from 'react'
import './Background.scss'
import {Card, List, Avatar} from 'antd'
import PropTypes from 'prop-types'
import { AnimationOnScroll } from 'react-animation-on-scroll';

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
                    <AnimationOnScroll animateIn='animate__fadeInRightBig' animateOnce offset={0}>
                      <List.Item.Meta avatar={content.logo && <Avatar src={content.logo} shape='square' size={64}/>}
                                      title={content.title}
                                      description={content.daterange}/>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='animate__fadeInRightBig' animateOnce offset={0}>
                      <i style={content.logo ? {marginLeft: '80px'} : {}}>{content.subtitle}</i>
                    </AnimationOnScroll>
                    <ul style={content.logo ? {marginLeft: '64px'} : {}}>
                      {content.description && content.description.map((desc, idx) =>
                        <AnimationOnScroll key={idx} animateIn='animate__fadeInRightBig' animateOnce offset={0}>
                          <li>{desc}</li>
                        </AnimationOnScroll>)}
                      {content.link &&
                      <AnimationOnScroll animateIn='animate__fadeInRightBig' animateOnce offset={0}>
                        <li>
                          Further information at <a href={content.link}
                                                    target='_blank'
                                                    rel='noopener noreferrer'>{content.link}</a>
                        </li>
                      </AnimationOnScroll>}
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