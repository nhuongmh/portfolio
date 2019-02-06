import React from 'react'
import './Background.scss'
import {Card, List, Avatar} from 'antd'
import PropTypes from 'prop-types'

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
                    <List.Item.Meta avatar={content.logo && <Avatar src={content.logo} shape='square' size={64}/>}
                                    title={content.title}
                                    description={content.daterange}/>
                    <i style={content.logo ? {marginLeft: '80px'} : {}}>{content.subtitle}</i>
                    <ul style={content.logo ? {marginLeft: '64px'} : {}}>
                      {content.description && content.description.map((desc, idx) => <li key={idx}>{desc}</li>)}
                      {content.link && <li>
                        Project is released on <a href={content.link} target='_blank'>{content.link}</a>
                      </li>}
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